import express from 'express'
import { checkExistingBanner, getBanners, addBanner } from '../controllers/bannersController'

const router = express.Router()

router.get('/', getBanners)
router.post('/', checkExistingBanner, addBanner)

export default router
