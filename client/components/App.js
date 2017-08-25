import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { logout } from '../actions/loginAction'
import { searchProducts, fetchProducts } from '../actions/productAction'
import { getCategories } from '../actions/categoryAction'
import { CartTotal, SelectedProducts } from '../selectors/SelectedProducts'
import { authenticateSelector } from '../selectors/SelectedUser'
import Nav from './Nav'
import Main from './Main'

const App = (props) => (
  <Container>
    <Nav {...props} />
    <Main {...props}/>
  </Container>
)

const mapStatetoProps = (state) => ({
  isAuthenticated: authenticateSelector(state)
})

const enhance = compose(
  withRouter,
  connect(mapStatetoProps, { logout, searchProducts, getCategories, fetchProducts }),
  lifecycle({
    componentDidMount() {
      const { fetchProducts, getCategories } = this.props
      fetchProducts(0)
      getCategories()
    }
  })
)

export default enhance(App)
