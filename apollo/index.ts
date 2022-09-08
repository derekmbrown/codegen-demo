import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { postType } from './post-type'
import { postResolver } from './post-resolver'
import { postDatasource } from './post-datasource'

const schema = makeExecutableSchema({
  typeDefs: postType,
  resolvers: postResolver
})

const server = new ApolloServer({ 
  schema,
  dataSources: () => {
    return {
      postAPI: new postDatasource.PostAPI(),
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})