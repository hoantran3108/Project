import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import Nav from './Nav'
import Main from './Main'
import SideBar from './SideBar'
import FlashMessagesList from './flash/FlashMessagesList'
import { Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { logout } from '../actions/loginAction'
import { searchProducts } from '../actions/productAction'
import { CartTotal, SelectedProducts } from '../selectors/SelectedProducts'
import { authenticateSelector } from '../selectors/SelectedUser'

const App = (props) => (
  <Container>
    <Nav {...props} />
    <FlashMessagesList />
    <Main {...props}/>
  </Container>
)

const mapStatetoProps = (state) => ({
  isAuthenticated: authenticateSelector(state)
})

const enhance = compose(
  withRouter,
  connect(mapStatetoProps, { logout, searchProducts })
)

export default enhance(App)
