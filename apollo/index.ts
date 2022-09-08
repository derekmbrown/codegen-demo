import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { types } from './types'
import { resolvers } from './resolvers'
import { datasources } from './datasources'

const schema = makeExecutableSchema({
  typeDefs: types,
  resolvers: resolvers
})

const server = new ApolloServer({ 
  schema,
  dataSources: () => {
    return {
      postAPI: new datasources.PostAPI(),
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})