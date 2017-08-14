import isEmpty from 'lodash/isEmpty'

const validateLogin = (values) => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

export default validateLogin
