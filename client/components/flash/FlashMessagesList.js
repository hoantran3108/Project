import React, { Component } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import FlashMessage from './FlashMessage'
import { deleteFlashMessage } from '../../actions/flashMessages'
import { Container } from 'semantic-ui-react'

class FlashMessagesList extends Component {
  render() {
    const { deleteFlashMessage } = this.props
    const messages = map(this.props.messages, (message) =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={() => deleteFlashMessage(message.id)} />)
    return (
      <Container>
        {messages}
      </Container>
      )
  }
}

const mapStatetoProps = (state) => ({
    messages: state.get('flashMessages').toJS()
})

export default connect(mapStatetoProps, { deleteFlashMessage })(FlashMessagesList)
