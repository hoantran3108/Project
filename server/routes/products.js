import express from 'express'
import { getProducts, addProduct, editProduct, deleteProduct } from '../controllers/productsController'

let router = express.Router()

router.get('/', getProducts)
router.post('/', addProduct)
router.put('/edit/:identifier',editProduct)
router.delete('/delete/:identifier',deleteProduct)

export default router
