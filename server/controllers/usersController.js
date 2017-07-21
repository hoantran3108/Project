import User from '../models/users'
import { validateInput } from '../shared/validations/signup'
import { generateToken } from '../services/token'

export function signup(req, res) {
  const { errors, isValid } = validateInput(req.body)
  if(isValid) {
    const { username, email, telephone, address, password } = req.body

    User.findOne({ $or: [ { email: email.toLowerCase() }, { username: username.toLowerCase() }]},'username email', function(err, existingUser) {
      if (err) {
        return res.status(422).json(err)
      }
      if (existingUser) {
        return res.status(422).send({email: 'Email is in use'})
      }
      const user = new User({
        username,
        email,
        telephone,
        address,
        password
      })
      user.save(function(err, savedUser) {
      if (err) {
        return res.status(500).json(err)
      }
      if (savedUser) {
        const token = generateToken(savedUser)
        res.json({token})
      }
      })
    })
  } else {
    return res.status(400).json(errors)
  }
}

export function checkUserExists(req, res) {
  User.findOne({ $or: [ { email: req.params.identifier.toLowerCase() },
    { username: req.params.identifier.toLowerCase() }]},'username email', function(err, existingUser) {
      if (err || !existingUser) {
        return res.status(422).json(err || {username: 'This username is already taken'})
      }
      if (existingUser) {
        res.json({existingUser})
      }
})
}

export function authentication(req, res) {
  const { username, password } = req.body
  User.findOne({ username: username.toLowerCase() },(err, user) => {
    if (err || !user) {
      return res.status(401).json(err || {form: 'Invalid Credentials'})
    }
    if (user) {
      user.comparePassword(password, function(err, isMatch) {
        if (err || !isMatch) {
          return res.status(401).json(err || {form: 'Invalid Credentials'})
        } else {
          const token = generateToken(user)
          res.json({token})
        }
      })
    }
  })
}
