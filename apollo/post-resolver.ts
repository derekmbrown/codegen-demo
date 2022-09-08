export const postResolver = {
  Query: {
    posts: async (_: any, __: any, { dataSources }) => {
      return dataSources.postAPI.getPosts()
    },
    post: async (_, { id }, { dataSources }) => {
      return dataSources.postAPI.getPost(id)
    },
    
  }
}