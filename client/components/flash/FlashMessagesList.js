import React from 'react'
import { connect } from 'react-redux'
import FlashMessage from './FlashMessage'
import { deleteFlashMessage } from '../../actions/flashMessages'
import { Container } from 'semantic-ui-react'

const FlashMessagesList = (props) => (
  <Container>
    {props.messages.map(message =>
      <FlashMessage key={message.id} {...props} {...message} />
    )}
  </Container>
)

//FIXME: Move toJS() out of mapStatetoProps

const mapStatetoProps = (state) => ({
  messages: state.get('flashMessages').toJS()
})

export default connect(mapStatetoProps, { deleteFlashMessage })(FlashMessagesList)
