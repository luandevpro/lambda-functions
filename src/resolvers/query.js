export const Query = {
   Query: {
      users: async (parent, args , ctx ,info) => {
         if(!ctx.userCurrent.userId){
            throw new Error(ctx.userCurrent)
         }else {
            const users = await ctx
                     .prisma
                     .query
                     .users(null, '{id name email password createdAt posts {id title description comments {id content}} comments {id content}}');
            return users
         }
      },
      posts: async (parent, args , ctx ,info) => {
         const posts = await ctx
                     .prisma
                     .query
                     .posts(null,'{id title description user {id name email} comments {id content user {id name email}}}')
         return posts            
      },
      comments: async (parent, args , ctx ,info) => {
         const comments = await ctx
                     .prisma
                     .query
                     .comments(null,'{id content user {id name email} post {id title description}}')
         return comments            
      },
      post: async (parent, args , ctx ,info) => {
         const post = await ctx
                     .prisma
                     .query
                     .post({where: {id: args.where.id}},'{id title description user {id name email} comments {id content user {id name email}}}')
         return post   
      }
   }
}