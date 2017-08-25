import express from 'express'
import { checkExistingCategory, addCategory, getCategories } from '../controllers/categoriesController'

const router = express.Router()

router.get('/', getCategories)
router.post('/', checkExistingCategory, addCategory)

export default router
