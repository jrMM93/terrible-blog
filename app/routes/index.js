// IMPORT ROUTER
import { Router } from 'express'
const router = Router()

// ROUTER MAIN
router.get('/api/v1', (_req, res) => {
  res.json('Welcome to the worst blog API Humankind has ever seen')
})

// IMPORT ARTICLE ROUTER
import { router as articleRouter } from './article.js'
router.use('/', articleRouter)

// IMPORT CATEGORY ROUTER
import { router as categoryRouter } from './category.js'
router.use('/', categoryRouter)

// IMPORT USER ROUTER
import { router as userRouter } from './user.js'
router.use('/', userRouter)

export { router }
