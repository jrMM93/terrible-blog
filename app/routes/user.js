import { Router } from 'express'
const router = Router()
import { login, logout } from '../controllers/authController.js'
import {
  createUser,
  fetchArticlesByUserId,
} from '../controllers/userController.js'
import { authorization } from '../middlewares/authMiddleware.js'

router.post('/api/v1/register', createUser)

router.post('/api/v1/login', login)

router.get('/api/v1/logout', authorization, logout)

router.get('/api/v1/posts/user/:id(\\d+)', fetchArticlesByUserId)

export { router }
