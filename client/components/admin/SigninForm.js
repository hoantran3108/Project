import React, { Component } from 'react'
import TextField from '../common/TextField'
import FormButton from '../common/FormButton'
import { Form } from 'semantic-ui-react'

class SigninForm extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    }
  }

  onBlur = (e) => {
    let errors = this.state.errors
    let field = e.target.name
    if(e.target.value === '') {
      errors[field] = 'Required'
      this.setState({ errors })
    }
  }

  onChange = (e) => {
    if(this.state.errors[e.target.name]) {
      let errors = this.state.errors
      let field = e.target.name
      errors[field] = undefined
      this.setState({ errors, [e.target.name]: e.target.value })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  render() {
    const { username, password, isLoading, errors } = this.state
    return (
      <Form>
        <TextField
          error={errors.username}
          label="Username"
          field="username"
          value={username}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
        <TextField
         error={errors.password}
         label="Password"
         field="password"
         value={password}
         type="password"
         onChange={this.onChange}
         onBlur={this.onBlur}
       />
       <FormButton value="Sign up" disabled={isLoading} />
      </Form>
    )
  }
}

export default SigninForm
