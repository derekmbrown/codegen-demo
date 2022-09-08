import { RESTDataSource } from 'apollo-datasource-rest'

class PostAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://jsonplaceholder.typicode.com/'
  }

  async getPosts() {
    return await this.get('posts')
  }

  async getPost(id: number) {
    return await this.get('posts/' + id)
  }
}

export const postDatasource = {
  PostAPI
}