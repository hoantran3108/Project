import React from 'react'
import { Form } from 'semantic-ui-react'

const renderField = ({ input, label, type, meta: { touched, error }}) => (
  <Form.Field error={!!touched && !!error}>
    <label>{label}</label>
    <input {...input} type={type} placeholder={label} />
    {touched && error && <span>{error}</span>}
  </Form.Field>
)

renderField.defaultProps = {
  type: 'text'
}

export default renderField
