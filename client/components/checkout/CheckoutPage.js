import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Divider } from 'semantic-ui-react'
import CheckoutStep from './CheckoutStep'
import CheckoutProcess from './CheckoutProcess'
import { setActiveItem, toggleProcess } from '../../actions/stepAction'

class CheckoutPage extends Component {

  render() {
    const { setActiveItem, toggleProcess, activeItem, isCompleted } = this.props
    return (
      <Container>
        <CheckoutStep activeItem={activeItem} isCompleted={isCompleted} />
        <Divider />
        <CheckoutProcess {...this.props} />
      </Container>
    )
  }
}

const mapStatetoProps = (state) => ({
  activeItem: state.step.activeItem,
  isCompleted: state.step.isCompleted
})

export default connect(mapStatetoProps,{ setActiveItem, toggleProcess })(CheckoutPage)
