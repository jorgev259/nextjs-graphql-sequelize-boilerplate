
import { makeExecutableSchema, mergeTypeDefs, loadFilesSync } from 'graphql-tools'

import resolvers from './resolvers'

export const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(loadFilesSync('src/graphql/typeDefs')),
  resolvers
})
