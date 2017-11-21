import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import SignupPage from './signup/SignupPage'
import LoginPage from './login/LoginPage'
import GuestRoute from './common/GuestRoute'
import SinglePage from './product/SinglePage'
import BagPage from './bag/BagPage'
import CheckoutPage from './checkout/CheckoutPage'
import NotFound from './notfound/NotFound'
import requireAuth from '../utils/requireAuth'

const Main = (props) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <GuestRoute path='/signup' component={SignupPage} {...props} />
    <GuestRoute path='/login' component={LoginPage} {...props} />
    <Route path='/category/:name' component={Home} />
    <Route path='/product/:id' component={SinglePage} />
    <Route path='/shoppingbag' component={BagPage} />
    <Route path='/checkout' component={requireAuth(CheckoutPage)} />
    <Route component={NotFound} />
  </Switch>
)

export default Main
