import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import Shipping from './Shipping'
import Billing from './Billing'
import Payment from './Payment'

const CheckoutProcess = (props) => (
  <Container>
    {props.activeItem==='shipping' ? <Shipping {...props} /> : null}
    {props.activeItem==='billing' ? <Billing {...props} /> : null}
    {props.activeItem==='payment' ? <Payment {...props} /> : null}
  </Container>
)

export default CheckoutProcess
