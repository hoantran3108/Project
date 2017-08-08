import React from 'react'
import { connect } from 'react-redux'
import { userSignup, isUserExists } from '../../actions/signupAction'
import { addFlashMessage, removeAllMessages } from '../../actions/flashMessages'
import SignupForm from './SignupForm'
import { getSignupValues } from '../../selectors/SelectedForms'

const SignupPage = (props) => <SignupForm {...props}/>

const mapStatetoProps = (state) => ({
  formValues: getSignupValues(state)
})

export default connect(mapStatetoProps , { userSignup, addFlashMessage, isUserExists, removeAllMessages })(SignupPage)
