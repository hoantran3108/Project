import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class NotFound extends Component {
  render() {
    return (
      <Message negative size='massive'>
        <Message.Header>Oops! Something went wrong.</Message.Header>
      </Message>
    )
  }
}

export default NotFound
