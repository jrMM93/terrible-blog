import { Article } from '../models/article.js'
import { _500 } from './errorController.js'

//------------------------------------------------------------- FETCH ALL
async function fetchAllArticles(req, res) {
  try {
    const articles = await Article.findAllArticles()

    if (articles) res.status(200).json(articles)
    else throw new Error(`This post doesn't exist`)
  } catch (err) {
    _500(err, req, res)
  }
}

//------------------------------------------------------------- FETCH ONE
async function fetchOneArticle(req, res) {
  try {
    const articleId = +req.params.id

    const article = await Article.findOneArticle(articleId)

    if (article) res.status(200).json(article)
    else throw new Error(`L'article n'existe pas`)
  } catch (err) {
    _500(err, req, res)
  }
}

//------------------------------------------------------------- CREATE
async function createArticle(req, res) {
  try {
    await Article.createArticle(req.body, req.userId)

    return res.status(200).json(`Your post has been successfully created`)
  } catch (err) {
    _500(err, req, res)
  }
}

//------------------------------------------------------------- UPDATE
async function updateArticle(req, res) {
  try {
    const articleId = +req.params.id

    let articleInfo = await Article.findOneArticle(articleId)

    if (!(articleInfo.user_id === +req.userId)) {
      return res.status(403).json('Unauthorized')
    }

    for (const key in articleInfo) {
      req.body[key] ? req.body[key] : (req.body[key] = articleInfo[key])
    }

    await Article.updateArticle(articleId, req.body)

    return res.status(200).json(`Your post has been successfully edited`)
  } catch (err) {
    _500(err, req, res)
  }
}

//------------------------------------------------------------- DELETE
async function deleteArticle(req, res) {
  try {
    const articleId = +req.params.id

    let articleInfo = await Article.findOneArticle(articleId)

    if (!(articleInfo.user_id === +req.userId)) {
      return res.status(403).json('Unauthorized')
    }
    await Article.deleteArticle(articleId)

    return res.status(200).json(`Post successfully deleted`)
  } catch (err) {
    _500(err, req, res)
  }
}

export {
  fetchAllArticles,
  fetchOneArticle,
  createArticle,
  updateArticle,
  deleteArticle,
}
