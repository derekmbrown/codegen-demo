import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { types } from './graphql-types'
import { resolvers } from './graphql-resolvers'
import { datasources } from './graphql-datasources'

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