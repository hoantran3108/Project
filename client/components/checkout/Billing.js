import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import TextField from '../common/TextField'
import FormButton from '../common/FormButton'
import validateInput from '../../../server/shared/validations/billing'
import isEmpty from 'lodash/isEmpty'

class Billing extends Component {
  constructor(props) {
    super(props)
    const { firstname, lastname, telephone, address, email } = props.user
    this.state = {
      firstname,
      lastname,
      telephone: telephone || '',
      address,
      email,
      errors: {},
      isLoading: false
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

  isValid = () => {
    const { errors, isValid } = validateInput(this.state)

    if (!isValid) {
      this.setState({ errors })
    }
    return isValid
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.isValid()) {
      const { setActiveItem, toggleProcess } = this.props
      setActiveItem('payment')
      toggleProcess('billing')
    }
  }

  onBlur = (e) => {
    if (e.target.value === '') {
      let field = e.target.name
      let errors = this.state.errors
      errors[field] = 'Required'
      this.setState({ errors })
    }
  }

  goPrevious = (e) => {
    e.preventDefault()
    const { setActiveItem } = this.props
    setActiveItem('shipping')
  }

  render() {
    const { firstname, lastname, telephone, address, email, activeItem, errors } = this.state
    return (
      <Form onSubmit={this.onSubmit} >
        <Form.Group widths='equal'>
          <TextField
            error={errors.firstname}
            label="Firstname"
            field="firstname"
            value={firstname}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
          <TextField
            error={errors.lastname}
            label="Lastname"
            field="lastname"
            value={lastname}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <TextField
            type='number'
            error={errors.telephone}
            label="Telephone"
            field="telephone"
            value={telephone}
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
        <Form.Group widths='equal'>
          <TextField
            error={errors.email}
            label="Email"
            field="email"
            value={email}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </Form.Group>
        <Form.Group>
          <Button negative floated='left' onClick={this.goPrevious}>Previous</Button>
          <Button primary floated='right'>Continue</Button>
        </Form.Group>
      </Form>
    )
  }
}

export default Billing
