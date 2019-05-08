module.exports.Post = {
   Post: {
      user: async (parent,args,ctx,info) => {
         const user = await parent.user
         return user
      },
      comments: (parent,args, ctx ,info) => {
         return parent.comments
      }
   }
}