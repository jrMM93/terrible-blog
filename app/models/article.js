import {
  findAll,
  createData,
  findOne,
  updateData,
  deleteData,
} from '../datamapper/articleDatamapper.js'

class Article {
  static async findAllArticles() {
    return findAll()
  }

  static async findOneArticle(articleId) {
    return findOne(articleId)
  }

  static async createArticle(articleData, userId) {
    return createData(articleData, userId)
  }

  static async updateArticle(articleId, articleData) {
    return updateData(articleId, articleData)
  }

  static async deleteArticle(articleId) {
    return deleteData(articleId)
  }
}

export { Article }
