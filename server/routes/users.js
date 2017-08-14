import express from 'express'
import { signup, authentication, checkExistingUsername, checkExistingEmail } from '../controllers/usersController'

let router = express.Router()

router.post('/signup', checkExistingUsername, checkExistingEmail, signup)
router.post('/auth', authentication)

export default router
