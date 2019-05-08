export const Post = `
   extend type Query {
      posts: [Post!]!
      post(where: PostWhereUniqueInput!): Post
   }
   type Post {
      id: ID!
      title: String!
      description: String!
      user: User!
      comments: [Comment!]!
   }
   extend type Mutation {
      createPost(data: PostCreateInput!): Post!
      updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
      deletePost(where: PostWhereUniqueInput!): Post
   }
   input PostCreateInput {
      id: ID
      title: String!
      description: String!
      comments: CommentCreateManyWithoutPostInput
   }
   input PostUpdateInput {
      title: String
      description: String
      user: UserUpdateOneRequiredWithoutPostsInput
      comments: CommentUpdateManyWithoutPostInput
   }
`
// 21 user: UserCreateOneWithoutPostsInput!