import React from 'react'
import { Button } from 'semantic-ui-react'

const FormButton = ({ value, disabled }) => <Button primary disabled={!!disabled}>{value}</Button>

export default FormButton
