import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, withProps } from 'recompose'
import FlashMessage from './FlashMessage'
import { deleteFlashMessage } from '../../actions/flashMessages'
import { Container } from 'semantic-ui-react'

const FlashMessagesList = ({ messages, deleteFlashMessage }) => (
  <Container>
    {messages.map(message =>
      <FlashMessage key={message.id} deleteFlashMessage={deleteFlashMessage} {...message} />
    )}
  </Container>
)

const mapStatetoProps = (state) => ({
  messages: state.get('flashMessages').toJS()
})

const enhance = compose(
  connect(mapStatetoProps, { deleteFlashMessage }),
  withProps(({ messages }) => messages.map(message => deleteFlashMessage(message.id)))
)

export default enhance(FlashMessagesList)
