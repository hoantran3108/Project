import React from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { getLoginValues } from '../../selectors/SelectedForms'
import { login } from '../../actions/loginAction'
import { addFlashMessage, removeAllMessages } from '../../actions/flashMessages'

const LoginPage = (props) => <LoginForm {...props} />

const mapStatetoProps = (state) => ({
  formValues: getLoginValues(state)
})

export default connect(mapStatetoProps, { login, addFlashMessage, removeAllMessages })(LoginPage)
