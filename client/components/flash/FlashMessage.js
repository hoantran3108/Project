import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, withState, lifecycle } from 'recompose'
import { deleteFlashMessage } from '../../actions/flashMessages'
import { Message, Transition } from 'semantic-ui-react'

const FlashMessage = ({ type, text, deleteMessage, visible }) => (
  <Transition.Group animation='fade down' duration={500}>
    {visible && <Message
      success={type==='success'}
      negative={type==='error'}
      header={text}
      onDismiss={deleteMessage}
    />}
  </Transition.Group>
)

const enhance = compose(
  connect(null, { deleteFlashMessage }),
  withState('visible', 'toggleVisible', false),
  lifecycle({
    componentDidMount() {
      const { visible, toggleVisible } = this.props
      toggleVisible(!visible)
    }
  }),
  withHandlers({
    deleteMessage: ({ deleteFlashMessage, _id, toggleVisible, visible }) => () => {
      toggleVisible(!visible)
      setTimeout(() => deleteFlashMessage(_id), 550)
    }
  })
)

export default enhance(FlashMessage)
