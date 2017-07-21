import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SigninForm from './SigninForm'

class SigninPage extends Component {
  render() {
    return (
      <div>
          <SigninForm />
      </div>
    )
  }
}

export default SigninPage
