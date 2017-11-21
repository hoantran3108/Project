import React from 'react'
import FlashMessage from './FlashMessage'
import renderList from '../common/renderList'
import { Container } from 'semantic-ui-react'

const FlashMessagesList = ({ messages }) => (
  <Container>
    {messages.map(renderList(FlashMessage))}
  </Container>
)

export default FlashMessagesList
