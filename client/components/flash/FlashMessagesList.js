import React from 'react'
import FlashMessage from './FlashMessage'
import Fade from '../transitions/Fade'
import { Container } from 'semantic-ui-react'

const FlashMessagesList = (props) => (
  <Container>
    {props.messages.map(message => <FlashMessage key={message.id} {...message} />)}
  </Container>
)

export default FlashMessagesList
