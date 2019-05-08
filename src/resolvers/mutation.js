const bcryptjs = require("bcryptjs")
const jwt = ("jsonwebtoken")
const { assign } = require("lodash")

module.exports.Mutation = {
   Mutation: {
      createUser: async (parent,args, ctx ,info) => {
         const password = await bcryptjs.hash(args.data.password, 10)
         const user = await ctx
                     .prisma
                     .mutation
                     .createUser({data: {
                        ...args.data,
                        password
                     }})
         const token = await jwt.sign({userId: user.id}, "my-secret" , {expiresIn: "7d"})            
         return { user, token }
      },
      createPost: async (parent,args, ctx ,info) => {
         if(!ctx.userCurrent.userId){
            throw new Error(ctx.userCurrent)
         }else {
            const post = await ctx
                     .prisma
                     .mutation
                     .createPost({data: {
                        ...args.data,
                        user: {
                           connect: {
                              id: ctx.userCurrent.userId
                           }
                        }
                     }}, info)
            return post
         }
      },
      createComment: async (parent, args, ctx , info) => {
         const comment = await ctx
                        .prisma
                        .mutation
                        .createComment({data: {...args.data}}, info)
         return comment
      },
      updateUser: async (parent,args,ctx,info) => {
         if(!ctx.userCurrent.userId){
            throw new Error(ctx.userCurrent)
         }else {
            console.log(args.where.id)
            if(ctx.userCurrent.userId !== args.where.id){
               throw new Error("Ban khong duoc quyen update")
            }else {
               const user = await ctx
                           .prisma
                           .mutation
                           .updateUser({data: {...args.data}} , info)
               return user            
            }
         }
      },
      updatePost: async (parent,args,ctx,info) => {
         if(!ctx.userCurrent.userId){
            throw new Error(ctx.userCurrent)
         }else {
            const postIdUser = await ctx
                           .prisma
                           .query
                           .post({where: {id: args.where.id}}, '{user {id}}')
            if(ctx.userCurrent.userId !== postIdUser.user.id){
               throw new Error("You not authorization")
            }               
            const post = await ctx
                        .prisma
                        .mutation
                        .updatePost({data: {...args.data}}, info)
            return post            
         }
      },
      updateComment: async (parent,args,ctx,info) => {
         const comment = await ctx
                     .prisma
                     .mutation
                     .updateComment({data: {...args.data}}, info)
         return comment   
      },
      deletePost: async (parent,args,ctx,info) => {
         if(!ctx.userCurrent.userId){
            throw new Error(ctx.userCurrent)
         }else {
            const postIdUser = await ctx
                           .prisma
                           .query
                           .post({where: {id: args.where.id}}, '{user {id}}')
            if(ctx.userCurrent.userId !== postIdUser.user.id){
               throw new Error("You not authorization")
            }   
            const post = await ctx
                        .prisma
                        .mutation
                        .deletePost({where: {...args.where}}, info)
            return post   
         }
      },
      deleteComment: async (parent,args,ctx,info) => {
         const comment = await ctx
                     .prisma
                     .mutation
                     .deleteComment({where: {...args.where}}, info)
         return comment  
      } 
   }
}