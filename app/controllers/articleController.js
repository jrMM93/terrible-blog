import { Article } from '../models/article.js'
import { _500 } from './errorController.js'

//------------------------------------------------------------- FETCH ALL ARTICLES
async function fetchAllArticles(req, res) {
  try {
    const articles = await Article.findAllArticles()

    if (articles) res.status(200).json(articles)
    else throw new Error(`Aucun article n'a été trouvé`)
  } catch (err) {
    _500(err, req, res)
  }
}

//------------------------------------------------------------- FETCH ONE ARTICLE
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

//------------------------------------------------------------- CREATE ARTICLE
async function createArticle(req, res) {
  try {
    await Article.createArticle(req.body)

    return res.status(200).json(`L'article a bien été créé`)
  } catch (err) {
    _500(err, req, res)
  }
}

export { fetchAllArticles, fetchOneArticle, createArticle }
