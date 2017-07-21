import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/users'

export default (req, res, next) => {
  const authorizationHeader = req.headers['Authorization']
  let token

  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1]
  }

  if (token) {
    jwt.verify(token, config.jwtSecret, function(err, decoded) {
      if (err) {
        res.status(401).json({error: 'Fail to authenticate'})
      } else {
        User.findById(decoded._id,'_id username email', function(err, user) {
          if (err || !user) {
            res.status(404).json({error: 'No such user'})
          } else {
            req.currentUser = user
            next()
          }
        })
      }

    })
  } else {
    res.status(403).json({error: 'No token found'})
  }
}