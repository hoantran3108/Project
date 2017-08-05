import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '../common/TextField'
import FormButton from '../common/FormButton'
import validateInput from '../../../server/shared/validations/login'
import { Form } from 'semantic-ui-react'


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    }
  }

  onBlur = (e) => {
    let field = e.target.name
    let errors = this.state.errors
    if (e.target.value === '') {
      errors[field] = 'Required'
      this.setState({ errors })
    }
  }

  onChange = (e) => {
    if(!!this.state.errors[e.target.name]) {
      let field = e.target.name
      let errors = this.state.errors
      errors[field] = undefined
      this.setState({ [e.target.name]: e.target.value, errors})
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state)

    if (!isValid) {
      this.setState({ errors })
    }
    return isValid
  }

  onSubmit = (e) => {
    const { removeAllMessages, addFlashMessage, history, login } = this.props
    e.preventDefault()
    if (this.isValid()) {
      this.setState({ isLoading: true})
      login(this.state)
      .then(res => {
        removeAllMessages()
        addFlashMessage({
          type: 'success',
          text: 'Loged in successfully'
        })
      })
      .catch(errors => {
        removeAllMessages()
        addFlashMessage({
          type: 'error',
          text: (errors.response.data.form || errors)
        })
        this.setState({ errors, isLoading: false})
      })
    }
  }

  render() {
    const { username, password, errors, isLoading } = this.state
    return (
      <Form onSubmit={this.onSubmit} loading={isLoading}>
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
          onChange={this.onChange}
          onBlur={this.onBlur}
          type="password"
        />
        <FormButton value="Log in" disabled={isLoading} />
      </Form>
    )
  }
}

export default LoginForm
