import axios from 'axios'
import setAuthorization from '../utils/setAuthorization'
import jwtDecode from 'jwt-decode'
import { removeAllMessages, addFlashMessage } from './flashMessages'
import { ADD_CURRENT_USER } from './types'

export const login = (credentials) => (dispatch) => {
  return axios.post('/api/users/auth', credentials)
  .then(res => {
    const { token } = res.data
    localStorage.setItem('jwtToken', token)
    setAuthorization(token)
    dispatch(removeAllMessages())
    dispatch(addCurrentUser(jwtDecode(token)))
    dispatch(addFlashMessage({
      type: 'success',
      text: 'Loged in successfully'
    }))
  })
  .catch(errors => {
    dispatch(addFlashMessage({
      type: 'error',
      text: errors.response.data.form
    }))
  })
}

export const addCurrentUser = (user) => ({
  type: ADD_CURRENT_USER,
  user
})

export const logout = () => (dispatch) => {
  localStorage.removeItem('jwtToken')
  setAuthorization(false)
  dispatch(addCurrentUser({}))
}
