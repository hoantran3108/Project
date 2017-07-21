import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../../actions/loginAction'
import { addFlashMessage, removeAllMessages } from '../../actions/flashMessages'

class LoginPage extends Component {
  render() {
    const { login, addFlashMessage, removeAllMessages } = this.props
    return (
      <LoginForm
        login={login}
        addFlashMessage={addFlashMessage}
        removeAllMessages={removeAllMessages}
      />
    )
  }
}

export default connect(null,{ login, addFlashMessage, removeAllMessages })(LoginPage)
