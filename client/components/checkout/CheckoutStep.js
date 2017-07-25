import React, { Component } from 'react'
import { Step } from 'semantic-ui-react'

class CheckoutStep extends Component {
  constructor() {
    super()
    this.state = {
      isActive: 'shipping',
      isCompleted: {}
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      isActive: nextProps.isActive,
      isCompleted: nextProps.isCompleted
     })
  }

  render() {
    const { isActive, isCompleted } = this.state
    return (
      <Step.Group ordered fluid>
        <Step
          completed={!!isCompleted['shipping']}
          name='shipping'
          active={isActive==='shipping'}
          title='Shipping'
          description='Choose shipping options'
        />
        <Step
          completed={!!isCompleted['billing']}
          name='billing'
          active={isActive==='billing'}
          title='Billing Address'
          description='Enter billing information'
        />
        <Step
          completed={!!isCompleted['payment']}
          name='payment'
          active={isActive==='payment'}
          title='Payment'
          description='Choose payment plan'
        />
      </Step.Group>
    )
  }
}

export default CheckoutStep
