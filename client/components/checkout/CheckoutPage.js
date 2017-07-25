import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Divider } from 'semantic-ui-react'
import StepExampleLinks from './CheckoutStep'
import CheckoutProcess from './CheckoutProcess'

class CheckoutPage extends Component {
  constructor() {
    super()
    this.state = {
      isActive: '',
      isCompleted: {}
     }
  }

  isActive = (isActive) => {
    this.setState({ isActive })
  }

  isCompleted = (isCompleted) => {
    this.setState({ isCompleted })
  }

  render() {
    const { isActive, isCompleted } = this.state
    return (
      <Container>
        <StepExampleLinks isActive={isActive} isCompleted={isCompleted} />
        <Divider />
        <CheckoutProcess isActive={this.isActive} isCompleted={this.isCompleted} />
      </Container>
    )
  }
}

export default CheckoutPage
