import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import ProductList from './product/ProductsList'
import SignupPage from './signup/SignupPage'
import LoginPage from './login/LoginPage'
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
      <Route exact path='/' children={() => <Home {...props} />} />
      <GuestRoute path='/signup' component={SignupPage} {...props}/>
      <GuestRoute path='/login' component={LoginPage} {...props}/>
      <Route path='/category/:name' component={Home} />
      <Route path='/product/:id' component={SinglePage} />
      <Route path='/shoppingbag' component={BagPage} />
      <Route path='/checkout' component={requireAuth(CheckoutPage)} />
      <Route component={NotFound} />
    </Switch>
  </Container>
)

export default Main
