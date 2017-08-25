import express from 'express'
import passport from 'passport'
import Strategy from 'passport-facebook'
import { signup, authentication, checkExistingUsername, checkExistingEmail, loginFacebook } from '../controllers/usersController'

const router = express.Router()
const FacebookStrategy = Strategy

router.post('/signup', checkExistingUsername, checkExistingEmail, signup)
router.post('/auth', authentication)
router.get('/auth/facebook', passport.authenticate('facebook'))

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/')
  })

  passport.use(new FacebookStrategy({
      clientID: '1985676058335589',
      clientSecret: '42919bf490ab3c8651bbb4df5f8db7fe',
      callbackURL: "http://localhost:3000/api/users/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      cb(null, profile)
    }
  ));

export default router
