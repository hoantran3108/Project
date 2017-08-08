import express from 'express'
import { getProducts, addProduct, editProduct, deleteProduct, getSingleProduct, checkExistingProduct } from '../controllers/productsController'

const router = express.Router()

router.get('/', getProducts)
router.post('/', addProduct)
router.get('/:id', getSingleProduct)
router.put('/edit/:identifier', checkExistingProduct, editProduct)
router.delete('/delete/:identifier',deleteProduct)

export default router
