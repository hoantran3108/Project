import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userSignup, isUserExists } from '../../actions/signupAction'
import { addFlashMessage } from '../../actions/flashMessages'
import SignupForm from './SignupForm'


class SignupPage extends Component {
  render() {
    const { userSignup, addFlashMessage, isUserExists } = this.props
    return (
      <SignupForm userSignup={userSignup} addFlashMessage={addFlashMessage} isUserExists={isUserExists}/>
    )
  }
}

export default connect(null , { userSignup, addFlashMessage, isUserExists })(SignupPage)