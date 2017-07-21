import React from 'react'
import { render } from 'react-dom'
import jwtDecode from 'jwt-decode'
import setAuthorization from './utils/setAuthorization'
import { addCurrentUser } from './actions/loginAction'
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore()

const jwtToken = localStorage.getItem('jwtToken')
if (jwtToken) {
  setAuthorization(jwtToken)
  store.dispatch(addCurrentUser(jwtDecode(jwtToken)))
}

render(
  <Root store={store} />,
  document.getElementById('app'))
