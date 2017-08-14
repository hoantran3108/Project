import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, flattenProp, pure } from 'recompose'
import { deleteFlashMessage } from '../../actions/flashMessages'
import { Message } from 'semantic-ui-react'

const FlashMessage = ({ id, type, text, deleteMessage }) => (
  <Message
    success={type==='success'}
    negative={type==='error'}
    header={text}
    onDismiss={deleteMessage}
  />
)

const enhance = compose(
  pure,
  connect(null, { deleteFlashMessage }),
  flattenProp('message'),
  withHandlers({
    deleteMessage: ({ deleteFlashMessage, id }) => e => deleteFlashMessage(id)
  })
)

export default enhance(FlashMessage)
