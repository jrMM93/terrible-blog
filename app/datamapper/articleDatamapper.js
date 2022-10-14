import { client } from '../services/database.js'

const TABLE_NAME = 'article'

//------------------------------------------------------------------- FIND ALL
async function findAll() {
  const result = await client.query(`SELECT * FROM "${TABLE_NAME}";`)

  return result.rows
}

//------------------------------------------------------------------- FIND ONE
async function findOne(articleId) {
  const result = await client.query(
    `SELECT * FROM "${TABLE_NAME}" WHERE "id" = $1;`,
    [articleId]
  )

  return result.rows[0]
}

//------------------------------------------------------------------- CREATE
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

//------------------------------------------------------------------- UPDATE
async function updateData(articleId, articleData) {
  const { category, slug, title, excerpt, content, category_id } = articleData

  const sql = {
    text: `
        UPDATE "${TABLE_NAME}"
            SET
            "category" = $1,
            "slug" = $2,
            "title" = $3,
            "excerpt" = $4,
            "content" = $5,
            "category_id" = $6
        WHERE "id" = $7;`,
    values: [category, slug, title, excerpt, content, category_id, articleId],
  }

  const result = await client.query(sql)

  return result.rowCount
}

//------------------------------------------------------------------- DELETE
async function deleteData(articleId) {
  const result = await client.query(
    `DELETE FROM "${TABLE_NAME}" WHERE "id" = $1;`,
    [articleId]
  )

  return result.rowCount
}

export { findAll, findOne, createData, updateData, deleteData }
