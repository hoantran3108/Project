import React, { Component } from 'react'
import classNames from 'classnames'
import { Message } from 'semantic-ui-react'

class FlashMessage extends Component {

  render() {
    const { id, type, text } = this.props.message
    return (
      <Message
        success={type==='success'}
        negative={type==='error'}
        header={text}
        onDismiss={this.props.deleteFlashMessage}
      />
    )
  }
}

export default FlashMessage
