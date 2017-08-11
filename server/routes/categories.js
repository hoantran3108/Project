import express from 'express'
import { checkExistingCategory, addCategory } from '../controllers/categoriesController'

const router = express.Router()

router.post('/', checkExistingCategory, addCategory)

export default router
