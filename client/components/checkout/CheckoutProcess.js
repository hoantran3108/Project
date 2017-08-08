import React from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import Shipping from './Shipping'
import Billing from './Billing'
import Payment from './Payment'

const CheckoutProcess = ({ activeItem, ...rest}) => (
  <Container>
    {activeItem==='shipping' && <Shipping {...rest} />}
    {activeItem==='billing' && <Billing {...rest} />}
    {activeItem==='payment' && <Payment {...rest} />}
  </Container>
)

export default CheckoutProcess
