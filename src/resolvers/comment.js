export const Comment = {
   Comment: {
      user: async (parent,args, ctx ,info) => {
         console.log(parent,"user")
         const user = await parent.user
         return user
      },
      post: async (parent,args, ctx ,info) => {
         const post = await parent.post
         return post
      }
   }  
}