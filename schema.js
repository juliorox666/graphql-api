import GQ from 'graphql-tools'
import { resolvers } from "./Application.js";
import { typeDefs } from "./Domain.js";

export default GQ.makeExecutableSchema({
  typeDefs,
  resolvers
})