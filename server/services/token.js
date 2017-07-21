import jwt from 'jsonwebtoken'
import jwtDecode from 'jwt-decode'
import config from '../config'

export function generateToken(user) {
  const timeStamp = new Date().getTime()
  const { _id, username, email } = user
  const payload = {
    _id: _id,
    username: username,
    email: email
  }
  return jwt.sign(payload,config.jwtSecret)
}
