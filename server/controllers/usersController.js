import User from '../models/users'
import { generateToken } from '../services/token'
import validateLogin from '../validations/validateLogin'
import validateSignup from '../validations/validateSignup'

export const signup = (req, res) => {
  const { errors, isValid } = validateSignup(req.body)
  if (isValid) {
    const user = new User(req.body)
    user.saveAsync()
      .then(user => {
        const token = generateToken(user)
        res.json({token})
      })
      .catch(errors => res.status(400).json({errors}))
  } else {
    return res.json({errors})
  }
}

export const checkExistingUsername = (req, res, next) => {
  const { username } = req.body
  User.findOneAsync({ username })
    .then(user => user ? res.status(400).json({form: 'Username is already taken!'}) : next())
    .catch(errors => next(errors))
}

export const checkExistingEmail = (req, res, next) => {
  const { email } = req.body
  User.findOneAsync({ email })
    .then(user => user ? res.status(400).json({form: 'Email is already taken!'}) : next())
    .catch(errors => next(errors))
}

export const authentication = (req, res) => {
  const { username, password } = req.body
  const { errors, isValid } = validateLogin(req.body)
  if (isValid) {
    User.findOneAsync({ username: username.toLowerCase() })
      .then(user => user.comparePassword(password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({form: 'Invalid Credentials'})
        }
        const token = generateToken(user)
        res.json({token})
      }))
      .catch(() => res.status(401).json({form: 'Invalid Credentials'}))
  } else {
    return res.json({errors})
  }
}
