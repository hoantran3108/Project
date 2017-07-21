import express from 'express'
import users from './users'
import products from './products'

let router = express.Router()

router.use('/users', users)
router.use('/products', products)

export default router