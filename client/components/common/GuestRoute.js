import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const GuestRoute = ({component: Component, isAuthenticated, ...rest}) =>
  <Route {...rest} render={ props => (
    isAuthenticated ?
    <Redirect to='/' /> :
    <Component {...props} />
  )} />

export default GuestRoute
