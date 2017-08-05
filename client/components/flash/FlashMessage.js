import React from 'react'
import { Message } from 'semantic-ui-react'

const FlashMessage = ({ id, type, text, deleteFlashMessage }) => (
  <Message
    success={type==='success'}
    negative={type==='error'}
    header={text}
    onDismiss={deleteFlashMessage}
  />
)

export default FlashMessage
