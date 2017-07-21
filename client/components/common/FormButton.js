import React from 'react'
import { Button } from 'semantic-ui-react'

const FormButton = ({ value, disabled }) => {
  return (
    <div className="field">
      <Button primary disabled={!!disabled}>{value}</Button>
    </div>
  )
}

export default FormButton
