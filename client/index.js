import React from 'react'
import { render } from 'react-dom'
import jwtDecode from 'jwt-decode'
import setAuthorization from './utils/setAuthorization'
import { addCurrentUser } from './actions/loginAction'
import configureStore from './configureStore'
import Root from './components/Root'
import { fetchProducts } from './actions/productAction'

const store = configureStore()

const jwtToken = localStorage.getItem('jwtToken')
if (jwtToken) {
  setAuthorization(jwtToken)
  store.dispatch(addCurrentUser(jwtDecode(jwtToken)))
}

store.dispatch(fetchProducts(0))

render(
  <Root store={store} />,
  document.getElementById('app'))
