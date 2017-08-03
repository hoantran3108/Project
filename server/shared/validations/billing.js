import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

const validateInput = (data) => {
  let errors = {}

    if (Validator.isEmpty(data.firstname)) {
      errors.firstname = 'Required'
    }

    if (Validator.isEmpty(data.lastname)) {
      errors.lastname = 'Required'
    }

    if (Validator.isEmpty(data.telephone)) {
      errors.telephone = 'Required'
    }

    if (Validator.isEmpty(data.address)) {
      errors.address = 'Required'
    }

    if (Validator.isEmpty(data.email)) {
      errors.email = 'Required'
    }

    if(!Validator.isEmail(data.email)) {
      errors.email = 'Invalid Email'
    }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

export default validateInput
