import express from 'express'
import users from './users'
import products from './products'
import categories from './categories'
import banners from './banners'

let router = express.Router()

router.use('/users', users)
router.use('/products', products)
router.use('/categories', categories)
router.use('/banners', banners)

export default router
