import React from 'react'
import { compose, withHandlers, flattenProp, pure } from 'recompose'
import { Message } from 'semantic-ui-react'

const FlashMessage = ({ id, type, text, deleteFlashMessage }) => (
  <Message
    success={type==='success'}
    negative={type==='error'}
    header={text}
    onDismiss={deleteFlashMessage}
  />
)

const enhance = compose(
  pure,
  flattenProp('message'),
  withHandlers({
    deleteFlashMessage: ({ deleteFlashMessage, id }) => e => deleteFlashMessage(id)
  })
)

export default enhance(FlashMessage)
