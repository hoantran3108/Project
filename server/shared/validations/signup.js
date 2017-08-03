import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export function validateInput(data) {
  let errors = {}

  if(Validator.isEmpty(data.firstname)) {
    errors.firstname = 'Required'
  }

  if(Validator.isEmpty(data.lastname)) {
    errors.lastname = 'Required'
  }

  if(Validator.isEmpty(data.username)) {
    errors.username = 'Required'
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Required'
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Invalid Email'
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Required'
  }

  if(Validator.isEmpty(data.passwordconfirmation)) {
    errors.passwordconfirmation = 'Required'
  }

  if(!Validator.equals(data.password,data.passwordconfirmation)) {
    errors.passwordconfirmation = 'Unmatched'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
