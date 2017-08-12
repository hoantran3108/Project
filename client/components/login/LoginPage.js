import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import LoginForm from './LoginForm'
import { getLoginValues } from '../../selectors/SelectedForms'
import { login } from '../../actions/loginAction'

const LoginPage = (props) => <LoginForm {...props} />

const mapStatetoProps = (state) => ({
  formValues: getLoginValues(state)
})

const enhance = compose(
  withRouter,
  connect(mapStatetoProps, { login })
)

export default enhance(LoginPage)
