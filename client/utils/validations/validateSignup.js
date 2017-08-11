import { getFirstname, getLastname, getUsername, getEmail, getTelephone, getAddress, getPassword, getPasswordConfirmation } from './validators'

const validate = (values) => {
  const errors = {}

  if (!getFirstname(values)) {
    errors.firstname = 'Required'
  }
  if (getFirstname(values) && /[^a-zA-Z]/i.test(getFirstname(values))) {
    errors.firstname = 'Only alpha characters'
  }
  if (getFirstname(values) && getFirstname(values).length > 30) {
    errors.firstname = 'Contains less than 30 characters'
  }
  if (!getLastname(values)) {
    errors.lastname = 'Required'
  }
  if (getLastname(values) && /[^a-zA-Z ]/i.test(getLastname(values))) {
    errors.lastname = 'Only alpha characters'
  }
  if (getLastname(values) && getLastname(values).length > 30) {
    errors.lastname = 'Contains less than 30 characters'
  }
  if (!getUsername(values)) {
    errors.username = 'Required'
  }
  if (getUsername(values) && /[^a-zA-Z0-9 ]/i.test(getUsername(values))) {
    errors.username = 'Only alphanumeric characters'
  }
  if (getUsername(values) && (getUsername(values).length < 6 || getUsername(values).length > 30)) {
    errors.username = 'Must be between 6 and 30 characters'
  }
  if (!getEmail(values)) {
    errors.email = 'Required'
  }
  if (getEmail(values) && !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(getEmail(values))) {
    errors.email = 'Invalid Email'
  }
  if (getTelephone(values) && isNaN(Number(getTelephone(values)))) {
    errors.telephone = 'Must be a number'
  } else if (getTelephone(values) && !/\d{10,11}/.test(getTelephone(values))) {
    errors.telephone = 'Must be 10 or 11 digits'
  }
  if (getAddress(values) && getAddress(values).length > 200) {
    errors.address = 'Must be less than 200 characters'
  }
  if (!getPassword(values)) {
    errors.password = 'Required'
  }
  if (getPassword(values) && getPassword(values).length < 6) {
    errors.password = 'Contains at least 6 characters'
  }
  if (getPassword(values) && getPassword(values).length > 100) {
    errors.password = 'Contains at most 100 characters'
  }
  if (getPassword(values) && !/(?=.*[A-Z])/.test(getPassword(values))) {
    errors.password = 'Contains at least 1 uppercase letter'
  }
  if (getPassword(values) && !/(?=.*[a-z])/.test(getPassword(values))) {
    errors.password = 'Contains at least 1 lowercase letter'
  }
  if (!getPasswordConfirmation(values)) {
    errors.passwordconfirmation = 'Required'
  } else if (getPasswordConfirmation(values) && getPasswordConfirmation(values).length < 6) {
    errors.passwordconfirmation = 'Contains at least 6 characters'
  } else if (getPasswordConfirmation(values) && getPasswordConfirmation(values).length > 100) {
    errors.passwordconfirmation = 'Contains at most 100 characters'
  } else if (getPasswordConfirmation(values) &&
  getPassword(values) &&
  (getPasswordConfirmation(values)!==getPassword(values))) {
    errors.passwordconfirmation = 'Password not match'
  }
  return errors
}

export default validate
