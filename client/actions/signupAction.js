import axios from 'axios'
import setAuthorization from '../utils/setAuthorization'
import jwtDecode from 'jwt-decode'
import { ADD_CURRENT_USER } from './types'

export function userSignup(data) {
  return dispatch => {
    return axios.post('/api/users/signup',data)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken',token)
      setAuthorization(token)
      dispatch(addCurrentUser(jwtDecode(token)))
    })
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return axios.get(`/api/users/${identifier}`)
  }
}
