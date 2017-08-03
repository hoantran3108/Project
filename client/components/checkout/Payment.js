import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import TextField from '../common/TextField'
import FormButton from '../common/FormButton'

class Payment extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      errors: {},
      isLoading: false
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
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
    setActiveItem('billing')
  }

  render() {
    const { firstname, lastname, activeItem, errors } = this.state
    return (
      <Form onSubmit={this.onSubmit} >
        <Form.Group widths='equal'>
          <TextField
            label="Firstname"
            field="firstname"
            value={firstname}
            onChange={this.onChange}
          />
          <TextField
            label="Lastname"
            field="lastname"
            value={lastname}
            onChange={this.onChange}
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

export default Payment
