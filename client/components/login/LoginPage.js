import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { login } from '../../actions/loginAction'
import { addFlashMessage, removeAllMessages } from '../../actions/flashMessages'

const LoginPage = (props) => <LoginForm {...props} />

export default connect(null,{ login, addFlashMessage, removeAllMessages })(LoginPage)
