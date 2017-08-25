import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { Container, Divider } from 'semantic-ui-react'
import CheckoutStep from './CheckoutStep'
import CheckoutProcess from './CheckoutProcess'
import { setActiveItem, toggleProcess } from '../../actions/stepAction'
import { removeAllMessages } from '../../actions/flashMessages'
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

const enhance = compose(
  connect(mapStatetoProps, { setActiveItem, toggleProcess, removeAllMessages }),
  lifecycle({
    componentDidMount() {
      this.props.removeAllMessages()
    }
  })
)

export default enhance(CheckoutPage)
