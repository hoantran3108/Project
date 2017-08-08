import express from 'express'
import { signup, authentication } from '../controllers/usersController'

let router = express.Router()

router.post('/signup', signup)
router.post('/auth', authentication)

export default router
