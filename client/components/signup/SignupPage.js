import React from 'react'
import { connect } from 'react-redux'
import { userSignup, isUserExists } from '../../actions/signupAction'
import { addFlashMessage } from '../../actions/flashMessages'
import SignupForm from './SignupForm'

const SignupPage = (props) => <SignupForm {...props}/>

export default connect(null , { userSignup, addFlashMessage, isUserExists })(SignupPage)
