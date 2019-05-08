module.exports.Comment = `
   extend type Query {
      comments: [Comment!]!
   }
   type Comment {
      id: ID!
      content: String!
      user: User!
      post: Post!
   }
   extend type Mutation {
      createComment(data: CommentCreateInput!): Comment!
      updateComment(data: CommentUpdateInput!,where: CommentWhereUniqueInput!): Comment
      deleteComment(where: CommentWhereUniqueInput!): Comment
   }
   input CommentCreateInput {
      id: ID
      content: String!
      user: UserCreateOneWithoutCommentsInput!
      post: PostCreateOneWithoutCommentsInput!
   }
   input CommentUpdateInput {
      content: String
      user: UserUpdateOneRequiredWithoutCommentsInput
      post: PostUpdateOneRequiredWithoutCommentsInput
   }
`