import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../../actions/loginAction'

class LoginPage extends Component {
  render() {
    const { login } = this.props
    return (
      <LoginForm login={login}/>
    )
  }
}

export default connect(null,{ login })(LoginPage)
