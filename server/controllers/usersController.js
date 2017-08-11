import User from '../models/users'
import { validateInput } from '../shared/validations/signup'
import { generateToken } from '../services/token'

export const signup = (req, res) => {
  const { errors, isValid } = validateInput(req.body)
  if (isValid) {
    const { firstname, lastname, username, email, telephone, address, password } = req.body
    const user = new User({ firstname, lastname, username, email, telephone, address, password })
    user.save((err, savedUser) => {
      if (err) {
        return res.status(500).json(err)
      }
      if (savedUser) {
        const token = generateToken(savedUser)
        return res.json({token})
      }
    })
  } else {
    return res.status(400).json(errors)
  }
}

export const checkExistingUsername = (req, res, next) => {
  const { username } = req.body
  User.findOne({ username }, (err, existingUser) => {
    if (err || existingUser) {
      return next(null, ({ form: { username: 'That username is already taken' }}))
    }
    next()
  })
}

export const checkExistingEmail = (req, res, next) => {
  const { email } = req.body
  User.findOne({ email }, (err, existingUser) => {
    if (err || existingUser) {
      return next(null, ({ form: { email: 'Email is already in use' }}))
    }
    next()
  })
}

export const authentication = (req, res) => {
  const { username, password } = req.body
  User.findOne({ username: username.toLowerCase() },(err, user) => {
    if (err || !user) {
      return res.status(401).json({form: 'Invalid Credentials'})
    }
    if (user) {
      user.comparePassword(password, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(401).json({form: 'Invalid Credentials'})
        } else {
          const token = generateToken(user)
          res.json({token})
        }
      })
    }
  })
}
