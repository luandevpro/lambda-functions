import {
   ApolloServer,
   makeExecutableSchema,
   AuthenticationError,
   ForbiddenError
 } from 'apollo-server-express';
import express from "express";
import cors from 'cors';
import { Prisma } from "prisma-binding"
import { merge } from 'lodash';
import { User , Post , Comment , Input } from "./typeDefs"
import { 
   Query as resolverQuery , 
   Mutation as resolverMutation,
   User as resolverUser,
   Post as resolverPost,
   Comment as resolverComment
} from "./resolvers"
import graphiql from "graphql-playground-middleware-express";
import getAuthToken from "./utils/getAuthToken"

const app = express();
app.use(cors({
   credentials: true,
   port: 4000,
   origin: ['http://localhost:4000'],
}));

const schema = makeExecutableSchema({
   typeDefs: [ User , Post , Comment , Input],
   resolvers: merge(
      resolverQuery,
      resolverMutation,
      resolverUser,
      resolverPost,
      resolverComment
   )
});

const apollo = new ApolloServer({ 
   schema,
   context: async (ctx) => { 
      const userCurrent = await getAuthToken(ctx.req);
      const prisma = await new Prisma({
         typeDefs: "src/generated/prisma.graphql",
         endpoint: "http://134.209.102.11:4466/graphql/dev",
         secret: "tacayaha"
      });
      return {
         prisma,
         ctx,
         userCurrent,
      }
   },
   tracing: true,
   introspection: true,
   playground: {
      endpoint: `http://localhost:4000/graphql`,
      settings: {
        'editor.theme': 'dark',
        'general.betaUpdates': true
      }
    }
})
app.get("/playground", graphiql({ endpoint: "/graphql" }));
apollo.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${apollo.graphqlPath}`)
);