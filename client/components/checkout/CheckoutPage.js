import React from 'react'
import { connect } from 'react-redux'
import { Container, Divider } from 'semantic-ui-react'
import CheckoutStep from './CheckoutStep'
import CheckoutProcess from './CheckoutProcess'
import { setActiveItem, toggleProcess } from '../../actions/stepAction'
import { userSelector } from '../../selectors/SelectedUser'

const CheckoutPage = (props) => (
  <Container>
    <CheckoutStep {...props} />
    <Divider />
    <CheckoutProcess {...props} />
  </Container>
)

const activeItemSelector = (state) => state.get('step').activeItem

const isCompletedSelector = (state) => state.get('step').isCompleted.toJS()

const mapStatetoProps = (state) => ({
  activeItem: activeItemSelector(state),
  isCompleted: isCompletedSelector(state),
  user: userSelector(state)
})

export default connect(mapStatetoProps, { setActiveItem, toggleProcess })(CheckoutPage)
