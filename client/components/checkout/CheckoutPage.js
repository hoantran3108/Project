import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { removeProducts } from '../../actions/cartAction'
import { Container } from 'semantic-ui-react'
import CheckoutList from './CheckoutList'

class CheckoutPage extends Component {
  render() {
    const { removeProducts } = this.props
    return (
      <Container>
        <CheckoutList removeProducts={() => removeProducts()} {...this.props}/>
      </Container>
    )
  }
}

export default withRouter(connect(null,{ removeProducts })(CheckoutPage))
