import axios from 'axios'
import setAuthorization from '../utils/setAuthorization'
import jwtDecode from 'jwt-decode'
import { addCurrentUser } from './loginAction'
import { ADD_CURRENT_USER } from './types'

export const userSignup = (data) => (dispatch) => {
  return axios.post('/api/users/signup',data)
  .then(res => {
    const { token } = res.data
    localStorage.setItem('jwtToken',token)
    setAuthorization(token)
    dispatch(addCurrentUser(jwtDecode(token)))
    return new Promise(resolve => resolve())
  })
}

export const isUserExists = (identifier) => (dispatch) => {
  return axios.get(`/api/users/${identifier}`)
}
