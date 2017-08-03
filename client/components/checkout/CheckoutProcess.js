import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { userSelector } from '../../selectors/SelectedUser'
import TextField from '../common/TextField'
import FormButton from '../common/FormButton'
import { Container } from 'semantic-ui-react'
import Shipping from './Shipping'
import Billing from './Billing'
import Payment from './Payment'

class CheckoutProcess extends Component {

  render() {
    const { activeItem } = this.props
    const shipping = <Shipping {...this.props} />
    const billing = <Billing {...this.props} />
    const payment = <Payment {...this.props} />
    return (
      <Container>
        {activeItem==='shipping' ? shipping : null}
        {activeItem==='billing' ? billing : null}
        {activeItem==='payment' ? payment : null}
      </Container>
    )
  }
}

const mapStatetoProps = (state) => ({
  user: userSelector(state)
})

export default connect(mapStatetoProps)(CheckoutProcess)
