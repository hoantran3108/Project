import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import CheckoutList from './CheckoutList'

class CheckoutPage extends Component {
  render() {
    return (
      <Container>
        <CheckoutList />
      </Container>
    )
  }
}

export default CheckoutPage
