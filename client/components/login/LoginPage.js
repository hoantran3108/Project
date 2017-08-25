import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import { getLoginValues } from '../../selectors/SelectedForms'
import { login, loginFacebook } from '../../actions/loginAction'
import { Container } from 'semantic-ui-react'
import LoginForm from './LoginForm'
import { removeAllMessages } from '../../actions/flashMessages'
import FlashMessagesList from '../flash/FlashMessagesList'
import { loginMessagesSelector } from '../../selectors/SelectedFlashMessages'

const LoginPage = (props) => (
  <Container>
    <FlashMessagesList messages={props.loginMessages} />
    <LoginForm {...props} />
  </Container>
)

const mapStatetoProps = (state) => ({
  formValues: getLoginValues(state),
  loginMessages: loginMessagesSelector(state)
})

const enhance = compose(
  withRouter,
  connect(mapStatetoProps, { login, removeAllMessages, loginFacebook }),
  lifecycle({
    componentDidMount() {
      this.props.removeAllMessages()
    }
  })
)

export default enhance(LoginPage)
