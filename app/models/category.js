import {
  findAll,
  findArticlesByCategoryId,
} from '../datamapper/categoryDatamapper.js'

class Category {
  static async findAllCategories() {
    return findAll()
  }

  static async findArticlesByCategory(categoryId) {
    return findArticlesByCategoryId(categoryId)
  }
}

export { Category }
