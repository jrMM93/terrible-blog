import {
  createData,
  findByEmail,
  findArticlesByUserId,
} from '../datamapper/userDatamapper.js'

class User {
  static async createUser(firstName, lastName, email, hashedPassword) {
    return createData(firstName, lastName, email, hashedPassword)
  }

  static async findUserByEmail(email) {
    return findByEmail(email)
  }

  static async findArticlesByUser(userId) {
    return findArticlesByUserId(userId)
  }
}

export { User }
