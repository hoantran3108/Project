import React from 'react'
import { compose, withHandlers } from 'recompose'
import { Form } from 'semantic-ui-react'
import TextField from '../common/TextField'
import FormButton from '../common/FormButton'

const Shipping = ({ onSubmit }) => (
  <Form onSubmit={onSubmit} >
    <FormButton value="Continue" />
  </Form>
)

const enhance = compose(
  withHandlers({
    onSubmit: ({ setActiveItem, toggleProcess }) => event => {
      event.preventDefault()
      setActiveItem('billing'),
      toggleProcess('shipping')
    }
  })
)

export default enhance(Shipping)
