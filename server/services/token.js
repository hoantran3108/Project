import jwt from 'jsonwebtoken'
import jwtDecode from 'jwt-decode'
import config from '../config'

export function generateToken(user) {
  const timeStamp = new Date().getTime()
  const { firstname, lastname, _id, username, email, telephone, address } = user
  const payload = {
    _id,
    firstname,
    lastname,
    username,
    email,
    telephone,
    address
  }
  return jwt.sign(payload,config.jwtSecret)
}
