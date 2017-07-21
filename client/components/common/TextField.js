import React from 'react'
import { Form } from 'semantic-ui-react'

const TextField = ({ type, field, value, onChange, error, label, onBlur }) => {
  return (
    <Form.Field error={!!error}>
      <label htmlFor={field}>{label}</label>
      <input
        type={type}
        name={field}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      { error && <span>{error}</span> }
    </Form.Field>
  )
}
TextField.defaultProps = {
  type: 'text'
}

export default TextField
