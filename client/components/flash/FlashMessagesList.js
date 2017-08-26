import React from 'react'
import FlashMessage from './FlashMessage'
import Fade from '../transitions/Fade'
import List from '../common/List'
import { Container } from 'semantic-ui-react'

const FlashMessagesList = (props) => (
  <Container>
    {props.messages.map(List(FlashMessage))}
  </Container>
)

export default FlashMessagesList
