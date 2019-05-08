module.exports.Input = `
   input PostCreateManyWithoutUserInput {
      create: [PostCreateWithoutUserInput!]
      connect: [PostWhereUniqueInput!]
   }

   input PostCreateWithoutUserInput {
      id: ID
      title: String!
      description: String!
      comments: CommentCreateManyWithoutPostInput
   }

   input PostWhereUniqueInput {
      id: ID
   }

   input CommentCreateManyWithoutPostInput {
      create: [CommentCreateWithoutPostInput!]
      connect: [CommentWhereUniqueInput!]
   }

   input CommentCreateWithoutPostInput {
      id: ID
      content: String!
      user: UserCreateOneWithoutCommentsInput!
   }

   input CommentWhereUniqueInput {
      id: ID
   }

   input UserCreateOneWithoutCommentsInput {
      create: UserCreateWithoutCommentsInput
      connect: UserWhereUniqueInput
   }

   input UserCreateWithoutCommentsInput {
      id: ID
      name: String!
      email: String!
      password: String!
      posts: PostCreateManyWithoutUserInput
   }

   input UserWhereUniqueInput {
      id: ID
   }

   input CommentCreateWithoutUserInput {
      id: ID
      content: String!
      post: PostCreateOneWithoutCommentsInput!
   }

   input PostCreateOneWithoutCommentsInput {
      create: PostCreateWithoutCommentsInput
      connect: PostWhereUniqueInput
   }

   input PostCreateWithoutCommentsInput {
      id: ID
      title: String!
      description: String!
      user: UserCreateOneWithoutPostsInput!
   }

   input UserCreateOneWithoutPostsInput {
      create: UserCreateWithoutPostsInput
      connect: UserWhereUniqueInput
   }

   input UserCreateWithoutPostsInput {
      id: ID
      name: String!
      email: String!
      password: String!
      comments: CommentCreateManyWithoutUserInput
   }

   input CommentCreateManyWithoutUserInput {
      create: [CommentCreateWithoutUserInput!]
      connect: [CommentWhereUniqueInput!]
   }

   input PostUpdateManyWithoutUserInput {
      create: [PostCreateWithoutUserInput!]
      connect: [PostWhereUniqueInput!]
      set: [PostWhereUniqueInput!]
      disconnect: [PostWhereUniqueInput!]
      delete: [PostWhereUniqueInput!]
      update: [PostUpdateWithWhereUniqueWithoutUserInput!]
   }

   input CommentUpdateManyWithoutUserInput {
      create: [CommentCreateWithoutUserInput!]
      connect: [CommentWhereUniqueInput!]
      set: [CommentWhereUniqueInput!]
      disconnect: [CommentWhereUniqueInput!]
      delete: [CommentWhereUniqueInput!]
      update: [CommentUpdateWithWhereUniqueWithoutUserInput!]
   }

   input PostUpdateWithWhereUniqueWithoutUserInput {
      where: PostWhereUniqueInput!
      data: PostUpdateWithoutUserDataInput!
   }

   input PostUpdateWithoutUserDataInput {
      title: String
      description: String
      comments: CommentUpdateManyWithoutPostInput
   }

   input CommentUpdateManyWithoutPostInput {
      create: [CommentCreateWithoutPostInput!]
      connect: [CommentWhereUniqueInput!]
      set: [CommentWhereUniqueInput!]
      disconnect: [CommentWhereUniqueInput!]
      delete: [CommentWhereUniqueInput!]
      update: [CommentUpdateWithWhereUniqueWithoutPostInput!]
   }

   input CommentUpdateWithWhereUniqueWithoutPostInput {
      where: CommentWhereUniqueInput!
      data: CommentUpdateWithoutPostDataInput!
   }

   input CommentUpdateWithoutPostDataInput {
      content: String
      user: UserUpdateOneRequiredWithoutCommentsInput
   }

   input UserUpdateOneRequiredWithoutCommentsInput {
      create: UserCreateWithoutCommentsInput
      connect: UserWhereUniqueInput
      update: UserUpdateWithoutCommentsDataInput
   }

   input UserUpdateWithoutCommentsDataInput {
      name: String
      email: String
      posts: PostUpdateManyWithoutUserInput
   }

   input CommentUpdateWithWhereUniqueWithoutUserInput {
      where: CommentWhereUniqueInput!
      data: CommentUpdateWithoutUserDataInput!
   }

   input CommentUpdateWithoutUserDataInput {
      content: String
      post: PostUpdateOneRequiredWithoutCommentsInput
   }

   input PostUpdateOneRequiredWithoutCommentsInput {
      create: PostCreateWithoutCommentsInput
      connect: PostWhereUniqueInput
      update: PostUpdateWithoutCommentsDataInput
   }

   input PostUpdateWithoutCommentsDataInput {
      title: String
      description: String
      user: UserUpdateOneRequiredWithoutPostsInput
   }

   input UserUpdateOneRequiredWithoutPostsInput {
      create: UserCreateWithoutPostsInput
      connect: UserWhereUniqueInput
      update: UserUpdateWithoutPostsDataInput
   }

   input UserUpdateWithoutPostsDataInput {
      name: String
      email: String
      comments: CommentUpdateManyWithoutUserInput
    }
`
