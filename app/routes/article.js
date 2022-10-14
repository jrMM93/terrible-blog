import { Router } from 'express'
import {
  createArticle,
  fetchAllArticles,
  fetchOneArticle,
  updateArticle,
  deleteArticle,
} from '../controllers/articleController.js'
const router = Router()

router.get('/api/v1/posts', fetchAllArticles)

router.get('/api/v1/posts/:id(\\d+)', fetchOneArticle)

router.post('/api/v1/posts', createArticle)

router.patch('/api/v1/posts/:id(\\d+)', updateArticle)

router.delete('/api/v1/posts/:id(\\d+)', deleteArticle)

export { router }
