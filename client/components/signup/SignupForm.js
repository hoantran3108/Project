import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { validateInput } from '../../../server/shared/validations/signup'
import TextField from '../common/TextField'
import FormButton from '../common/FormButton'
import { Form } from 'semantic-ui-react'

class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      telephone: '',
      address: '',
      city: '',
      password: '',
      passwordconfirmation: '',
      errors: {},
      isLoading: false
    }
  }

  onBlur = (e) => {
    let field = e.target.name
    let errors = this.state.errors
    if (e.target.value === ''
    && e.target.name !== 'telephone'
    && e.target.name !== 'address') {
      errors[field] = 'Required'
      this.setState({ errors })
    }
  }

  onChange = (e) => {
    if(this.state.errors[e.target.name]) {
      let field = e.target.name
      let errors = this.state.errors
      errors[field] = undefined
      this.setState({ [e.target.name]: e.target.value, errors})
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  isValid() {
    const { isValid, errors } = validateInput(this.state)

    if(!isValid) {
      return this.setState({ errors })
    }
    return isValid
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.isValid()) {
      const { userSignup, addFlashMessage, history } = this.props
      this.setState({errors: {}, isLoading: true })
      userSignup(this.state)
      .then(() => {
        addFlashMessage({
          type: 'success',
          text: 'Signed up successfully'
        })
        history.push('/')
      })
      .catch(errors => {
        addFlashMessage({
          type: 'error',
          text: 'Sign up failed'
        })
        this.setState({ errors, isLoading: false })
      })
    }
  }

  render() {
    const {firstname, lastname, username, email, telephone, address, password, passwordconfirmation, errors, isLoading } = this.state

    return (
      <Form onSubmit={this.onSubmit} loading={isLoading}>
        <Form.Group widths='equal'>
          <TextField
            error={errors.firstname}
            label="Firstname*"
            field="firstname"
            value={firstname}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <TextField
            error={errors.lastname}
            label="Lastname*"
            field="lastname"
            value={lastname}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <TextField
            error={errors.username}
            label="Username*"
            field="username"
            value={username}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <TextField
            error={errors.email}
            label="Email*"
            field="email"
            value={email}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <TextField
            error={errors.password}
            label="Password*"
            field="password"
            value={password}
            type="password"
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <TextField
            error={errors.passwordconfirmation}
            label="Password Confirmation*"
            field="passwordconfirmation"
            value={passwordconfirmation}
            type="password"
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <TextField
            error={errors.telephone}
            label="Telephone"
            field="telephone"
            value={telephone}
            type="number"
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <TextField
            error={errors.address}
            label="Address"
            field="address"
            value={address}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </Form.Group>
        <FormButton value="Sign up" disabled={isLoading} />
      </Form>
    )
  }
}

export default SignupForm
