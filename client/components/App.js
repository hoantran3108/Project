import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Main from './Main'
import FlashMessagesList from './flash/FlashMessagesList'
import { Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { logout } from '../actions/loginAction'
import { CartTotal, SelectedProducts } from '../selectors/SelectedProducts'
import { authenticateSelector } from '../selectors/SelectedUser'

class App extends Component {
  
  render() {
    const { total, logout } = this.props
    return (
      <Container>
        <Nav total={total} logout={() => logout()} {...this.props} />
        <FlashMessagesList />
        <Main />
      </Container>
    )
  }
}

const mapStatetoProps = (state) => ({
  isAuthenticated: authenticateSelector(state),
  products: SelectedProducts(state),
  total: CartTotal(state)
})

export default withRouter(connect(mapStatetoProps, { logout })(App))
