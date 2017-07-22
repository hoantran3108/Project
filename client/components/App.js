import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import Main from './Main'
import FlashMessagesList from './flash/FlashMessagesList'
import { Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { CartTotal, SelectedProducts } from '../selectors/SelectedProducts'

class App extends Component {
  render() {
    const { total } = this.props
    return (
      <Container>
        <Nav total={total} {...this.props}/>
        <FlashMessagesList />
        <Main />
      </Container>
    )
  }
}

const mapStatetoProps = (state) => ({
  products: state.products.byId,
  total: CartTotal(state)
})

export default withRouter(connect(mapStatetoProps)(App))
