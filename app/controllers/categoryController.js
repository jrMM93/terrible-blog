import { Category } from '../models/category.js'
import { _500 } from './errorController.js'

//------------------------------------------------------------- FETCH ALL
async function fetchAllCategories(req, res) {
  try {
    const categories = await Category.findAllCategories()

    if (categories) res.status(200).json(categories)
    else throw new Error(`No categories were found`)
  } catch (err) {
    _500(err, req, res)
  }
}

//------------------------------------------------------------- FETCH ARTICLES BY CATEGORY ID
async function fetchArticlesByCategoryId(req, res) {
  try {
    const categoryId = +req.params.id
    console.log(categoryId)

    const articles = await Category.findArticlesByCategory(categoryId)

    res.json(articles)
  } catch (err) {
    _500(err, res, res)
  }
}

export { fetchArticlesByCategoryId, fetchAllCategories }
