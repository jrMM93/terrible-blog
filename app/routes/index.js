//~ IMPORTATION ROUTER
import { Router } from 'express'
const router = Router()

//~ ROUTER MAIN
router.get('/api/v1', (_req, res) => {
  res.json('Welcome to the worst blog API Humankind has ever seen')
})

//~ IMPORTATION ARTICLE ROUTER
import { router as articleRouter } from './article.js'
router.use('/', articleRouter)

export { router }
