module.exports.User = `
   type Query {
      users: [User!]!
   }
   type User {
      id: ID!
      name: String!
      email: String!
      password: String!
      createdAt: String!
      updatedAt: String!
      posts: [Post!]!
      comments: [Comment!]!
   }
   type Mutation {
      createUser(data: UserCreateInput!): UserToken!
      updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
   }
   type UserToken {
      user: User!
      token: String!
   }
   input UserCreateInput {
      id: ID
      name: String!
      email: String!
      password: String!
      posts: PostCreateManyWithoutUserInput
      comments: CommentCreateManyWithoutUserInput
   }
   input UserUpdateInput {
      name: String!
      posts: PostUpdateManyWithoutUserInput
      comments: CommentUpdateManyWithoutUserInput
   }
`
