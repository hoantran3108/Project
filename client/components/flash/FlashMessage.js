import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, flattenProp, pure, withState, lifecycle } from 'recompose'
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
  pure,
  connect(null, { deleteFlashMessage }),
  flattenProp('message'),
  withState('visible', 'toggleVisible', false),
  withHandlers({
    deleteMessage: ({ deleteFlashMessage, _id, toggleVisible }) => e => {
      toggleVisible(false)
      setTimeout(() => deleteFlashMessage(_id), 1000)
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.toggleVisible(true)
    }
  })
)

export default enhance(FlashMessage)
