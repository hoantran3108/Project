import axios from 'axios'
import setAuthorization from '../utils/setAuthorization'
import jwtDecode from 'jwt-decode'
import { addCurrentUser } from './loginAction'
import { addSignupMessage } from './flashMessages'

export const userSignup = (data) => (dispatch) => {
  return axios.post('/api/users/signup',data)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken',token)
      setAuthorization(token)
      dispatch(addCurrentUser(jwtDecode(token)))
      dispatch(addSignupMessage({
        type: 'success',
        text: 'Signed up successfully'
      }))
    })
    .catch(errors => {
      dispatch(addSignupMessage({
        type: 'error',
        text: errors.response.data.form
      }))
    })
}

export const isUserExists = (identifier) => () => {
  return axios.get(`/api/users/${identifier}`)
}
