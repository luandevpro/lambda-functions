module.exports.User = {
   User: {
      posts: async (parent,args, ctx ,info) => {
         const posts = await parent.posts
         return posts
      },
      comments: async (parent,agrs, ctx ,info) => {
         const comments = await parent.comments
         return comments
      }
   },
}