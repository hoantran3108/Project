import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import SignupPage from './signup/SignupPage'
import LoginPage from './login/LoginPage'
import SigninPage from './admin/SigninPage'
import GuestRoute from './common/GuestRoute'
import SinglePage from './product/SinglePage'
import BagPage from './bag/BagPage'
import CheckoutPage from './checkout/CheckoutPage'
import NotFound from './notfound/NotFound'
import Modal from './login/Modal'
import requireAuth from '../utils/requireAuth'
import { withRouter } from 'react-router-dom'
import { authenticateSelector } from '../selectors/SelectedUser'
import { Container } from 'semantic-ui-react'

class Main extends Component {

  // previousLocation = this.props.location
  //
  // componentWillUpdate = (nextProps) => {
  //   const { state } = this.props.location
  //   if (nextProps.history.action !== 'POP' && (!state || !state.modal)) {
  //     this.previousLocation = this.props.location
  //   }
  // }

  render() {
    const { isAuthenticated } = this.props
    // const { location } = this.props
    // const isModal = !!(
    //   location.state &&
    //   location.state.modal &&
    //   this.previousLocation !== location
    // )location={isModal ? this.previousLocation : location}
    return (
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <GuestRoute path='/signup' component={SignupPage} isAuthenticated={isAuthenticated}/>
          <GuestRoute path='/login' component={LoginPage} isAuthenticated={isAuthenticated}/>
          <Route path='/product/:id' component={SinglePage} />
          <Route path='/shoppingbag' component={BagPage} />
          <Route path='/checkout' component={requireAuth(CheckoutPage)} />
          <Route exact path='/admin' component={SigninPage} />
          <Route component={NotFound} />
        </Switch>
        {/* {isModal ? <Route path='/login' component={Modal} /> : null } */}
      </Container>
    )
  }
}

const mapStatetoProps = (state) => ({
  isAuthenticated: authenticateSelector(state)
})

export default withRouter(connect(mapStatetoProps)(Main))
