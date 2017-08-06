import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import SignupPage from './signup/SignupPage'
import LoginPage from './login/LoginPage'
import SigninPage from './admin/SigninPage'
import GuestRoute from './common/GuestRoute'
import SinglePage from './product/SinglePage'
import BagPage from './bag/BagPage'
import CheckoutPage from './checkout/CheckoutPage'
import NotFound from './notfound/NotFound'
import requireAuth from '../utils/requireAuth'
import { Container } from 'semantic-ui-react'

const Main = (props) => (
  <Container>
    <Switch>
      <Route exact path='/' component={Home} />
      <GuestRoute path='/signup' component={SignupPage} {...props}/>
      <GuestRoute path='/login' component={LoginPage} {...props}/>
      <Route path='/product/:id' component={SinglePage} />
      <Route path='/shoppingbag' component={BagPage} />
      <Route path='/checkout' component={requireAuth(CheckoutPage)} />
      <Route exact path='/admin' component={SigninPage} />
      <Route component={NotFound} />
    </Switch>
  </Container>
)

export default Main
