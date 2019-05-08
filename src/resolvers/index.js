const { Query }    = require("./query")
const { Mutation } = require("./mutation")
const { Post }     = require("./post")
const { User     } = require("./user")
const { Comment }  = require("./comment")

module.exports = {
   resolverQuery : Query,
   resolverMutation: Mutation ,
   resolverPost: Post,
   resolverUser: User,
   resolverComment : Comment
}