import React from 'react'
import { connect } from 'react-redux'
import { userSignup, isUserExists } from '../../actions/signupAction'
import SignupForm from './SignupForm'
import { getSignupValues } from '../../selectors/SelectedForms'
import { Container } from 'semantic-ui-react'
import FlashMessagesList from '../flash/FlashMessagesList'
import { signupMessagesSelector } from '../../selectors/SelectedFlashMessages'

const SignupPage = (props) => (
  <Container>
    <FlashMessagesList messages={props.signupMessages} />
    <SignupForm {...props}/>
  </Container>
)

const mapStatetoProps = (state) => ({
  formValues: getSignupValues(state),
  signupMessages: signupMessagesSelector(state)
})

export default connect(mapStatetoProps , { userSignup, isUserExists })(SignupPage)
