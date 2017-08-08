import { getUsername, getPassword } from './validators'

const validate = (values) => {
  const errors = {}

  if (!getUsername(values)) {
    errors.username = 'Required'
  }
  if (!getPassword(values)) {
    errors.password = 'Required'
  }
  return errors
}

export default validate
