
import fs from 'fs'

function mergeArray (path) {
  let result = {}
  fs.readdirSync(`./src/graphql/resolvers/${path}`)
    .filter(p => !p.startsWith('_') && p.endsWith('.js'))
    .forEach(p => {
      result = { ...result, ...require(`./${path}/${p}`) }
    })
  return result
}

export default {
  Query: mergeArray('Query'),
  Mutation: mergeArray('Mutation'),
  Subscription: mergeArray('Subscription'),
  ...mergeArray('typeDefs')
}
