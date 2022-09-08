import { gql } from 'apollo-server'

export const postType = gql`
  type Query {
    posts: [Post]
    post(id: Int): Post
  }
  type Post {
    userId: Int
    id: Int
    title: String
    body: String
  }
`