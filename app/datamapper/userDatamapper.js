import { client } from '../services/database.js'

const TABLE_NAME = 'user'
const TABLE_ARTICLE = 'article'

//------------------------------------------------------------------- CREATE USER
async function createData(firstName, lastName, email, hashedPassword) {
  const sql = {
    text: `INSERT INTO "${TABLE_NAME}" ("firstname", "lastname", "email", "password") VALUES ($1, $2, $3, $4)`,
    values: [firstName, lastName, email, hashedPassword],
  }

  const result = await client.query(sql)

  return result.rows[0]
}

//------------------------------------------------------------------- FIND USER BY EMAIL
async function findByEmail(email) {
  const sql = {
    text: `SELECT * FROM "${TABLE_NAME}" WHERE "email" = $1`,
    values: [email],
  }
  const result = await client.query(sql)

  if (result.rowCount === 0) {
    return null
  }

  return result.rows[0]
}

//------------------------------------------------------------------- FIND ARTICLES BY CATEGORY ID
async function findArticlesByUserId(userId) {
  const result = await client.query(
    `SELECT * FROM "${TABLE_ARTICLE}" WHERE "user_id" = $1;`,
    [userId]
  )
  return result.rows
}

export { createData, findByEmail, findArticlesByUserId }
