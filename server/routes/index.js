import express from 'express'
import users from './users'
import products from './products'
import categories from './categories'

let router = express.Router()

router.use('/users', users)
router.use('/products', products)
router.use('/categories', categories)

export default router
