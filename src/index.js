const {
   ApolloServer,
   makeExecutableSchema,
   AuthenticationError,
   ForbiddenError
 } = require('apollo-server-express');
const express = require("express");
const cors = require('cors');
const { Prisma } = require("prisma-binding")
const { merge } = require('lodash');
const { User , Post , Comment , Input } = require("./typeDefs")
const { 
   resolverQuery , 
   resolverMutation ,
    resolverUser,
   resolverPost,
   resolverComment
} = require("./resolvers")
const serverless = require("serverless-http");
const expressPlayground = require('graphql-playground-middleware-express')
  .default
const getAuthToken = require("./utils/getAuthToken")

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
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));
apollo.applyMiddleware({ app });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${apollo.graphqlPath}`)
// );

module.exports.handler = serverless(app);
