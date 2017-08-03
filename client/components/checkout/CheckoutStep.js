import React, { Component } from 'react'
import { Step } from 'semantic-ui-react'

class CheckoutStep extends Component {

  render() {
    const { activeItem, isCompleted } = this.props
    return (
      <Step.Group ordered fluid>
        <Step
          completed={!!isCompleted['shipping']}
          name='shipping'
          active={activeItem==='shipping'}
          title='Shipping'
          description='Choose shipping options'
        />
        <Step
          completed={!!isCompleted['billing']}
          name='billing'
          active={activeItem==='billing'}
          title='Billing Address'
          description='Enter billing information'
        />
        <Step
          completed={!!isCompleted['payment']}
          name='payment'
          active={activeItem==='payment'}
          title='Payment'
          description='Choose payment plan'
        />
      </Step.Group>
    )
  }
}

export default CheckoutStep
