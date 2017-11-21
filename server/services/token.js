import jwt from 'jsonwebtoken'
import config from '../config'

export const generateToken = (user) => {
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
