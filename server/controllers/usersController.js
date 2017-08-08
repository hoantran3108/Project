import User from '../models/users'
import { validateInput } from '../shared/validations/signup'
import { generateToken } from '../services/token'

export const signup = (req, res) => {
  const { errors, isValid } = validateInput(req.body)
  if (isValid) {
    const { firstname, lastname, username, email, telephone, address, password } = req.body

    User.findOne({ $or: [{email: email.toLowerCase()}, {username: username.toLowerCase()}]},'username email', (err, existingUser) => {
      if (err) {
        return res.status(422).json(err)
      }
      if (existingUser) {
        return res.status(422).send({form: 'Email is in use'})
      }
      const user = new User({ firstname, lastname, username, email, telephone, address, password })
      user.save((err, savedUser) => {
        if (err) {
          console.log(err)
          return res.status(500).json(err)
        }
        if (savedUser) {
          const token = generateToken(savedUser)
          return res.json({token})
        }
      })
    })
  } else {
    return res.status(400).json(errors)
  }
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
