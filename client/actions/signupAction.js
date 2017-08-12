import axios from 'axios'
import setAuthorization from '../utils/setAuthorization'
import jwtDecode from 'jwt-decode'
import { addCurrentUser } from './loginAction'
import { addFlashMessage, removeAllMessages } from './flashMessages'
import { ADD_CURRENT_USER } from './types'

export const userSignup = (data) => (dispatch) => {
  dispatch(removeAllMessages())
  return axios.post('/api/users/signup',data)
  .then(res => {
    const { token } = res.data
    localStorage.setItem('jwtToken',token)
    setAuthorization(token)
    dispatch(addCurrentUser(jwtDecode(token)))
    dispatch(addFlashMessage({
        type: 'success',
        text: 'Signed up successfully'
      }))
  })
  .catch(errors => {
    dispatch(addFlashMessage({
        type: 'error',
        text: (errors.response.data.form || errors)
      }))
  })
}

export const isUserExists = (identifier) => (dispatch) => {
  return axios.get(`/api/users/${identifier}`)
}
