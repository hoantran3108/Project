import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import TextField from '../common/TextField'
import FormButton from '../common/FormButton'

class Shipping extends Component {

  onSubmit = (e) => {
    e.preventDefault()
    const { setActiveItem, toggleProcess } = this.props
    setActiveItem('billing')
    toggleProcess('shipping')
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit} >

        <FormButton value="Continue" />
      </Form>
    )
  }
}

export default Shipping
