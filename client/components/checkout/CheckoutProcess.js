import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import TextField from '../common/TextField'
import FormButton from '../common/FormButton'

class CheckoutProcess extends Component {
  constructor(props) {
    super(props)
    this.state ={
      firstname: '',
      lastname: '',
      telephone: '',
      address: '',
      city: '',
      isLoading: false
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmitStepOne = (e) => {
    e.preventDefault()
    this.props.isActive('billing')
    this.props.isCompleted({ shipping: true })
  }

  render() {
    const { firstname, lastname } = this.state
    return (
      <Form onSubmit={this.onSubmitStepOne} >
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
        <FormButton value="Continue" />
      </Form>
    )
  }
}

export default CheckoutProcess
