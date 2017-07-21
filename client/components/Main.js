import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import SignupPage from './signup/SignupPage'
import LoginPage from './login/LoginPage'
import SigninPage from './admin/SigninPage'
import GuestRoute from './common/GuestRoute'
import CheckoutPage from './checkout/CheckoutPage'
import NotFound from './notfound/NotFound'
import { withRouter } from 'react-router-dom'

class Main extends Component {
  render() {
    const { isAuthenticated } = this.props
    return (
    <Switch>
      <Route exact path='/' component={Home} />
      <GuestRoute path='/signup' component={SignupPage} isAuthenticated={isAuthenticated}/>
      <GuestRoute path='/login' component={LoginPage} isAuthenticated={isAuthenticated}/>
      <Route path='/checkout' component={CheckoutPage} />
      <Route exact path='/admin' component={SigninPage} />
      <Route component={NotFound} />
    </Switch>
    )
  }
}

const mapStatetoProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated
})

export default withRouter(connect(mapStatetoProps)(Main))
