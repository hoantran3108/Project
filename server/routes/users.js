import express from 'express'
import { signup, checkUserExists, authentication } from '../controllers/usersController'

let router = express.Router()

router.post('/signup', signup)
router.get('/:identifier', checkUserExists)
router.post('/auth', authentication)

export default router