import { client } from '../services/database.js'

const TABLE_NAME = 'article'

//------------------------------------------------------------------- FIND ALL ARTICLES
async function findAll() {
  const result = await client.query(`SELECT * FROM "${TABLE_NAME}";`)

  return result.rows
}

//------------------------------------------------------------------- FIND ONE ARTICLE
async function findOne(articleId) {
  const result = await client.query(
    `SELECT * FROM "${TABLE_NAME}" WHERE "id" = $1;`,
    [articleId]
  )

  return result.rows[0]
}

//------------------------------------------------------------------- CREATE ARTICLE
async function createData(articleData) {
  let { category, slug, title, excerpt, content, category_id, user_id } =
    articleData

  const sql = {
    text: `
        INSERT INTO "${TABLE_NAME}"
            ("category", "slug", "title", "excerpt", "content", "category_id", "user_id")
        VALUES
            ($1,$2,$3,$4,$5,$6,$7);`,
    values: [category, slug, title, excerpt, content, category_id, user_id],
  }

  const result = await client.query(sql)

  return result.rowCount
}

export { findAll, findOne, createData }
