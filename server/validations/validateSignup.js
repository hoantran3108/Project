import isEmpty from 'lodash/isEmpty'

const validateSignup = (values) => {
  const errors = {}

  if (!values.firstname) {
    errors.firstname = 'Required'
  }
  if (values.firstname && /[^a-zA-Z]/i.test(values.firstname)) {
    errors.firstname = 'Only alpha characters'
  }
  if (values.firstname && values.firstname.length > 30) {
    errors.firstname = 'Contains less than 30 characters'
  }
  if (!values.lastname) {
    errors.lastname = 'Required'
  }
  if (values.lastname && /[^a-zA-Z ]/i.test(values.lastname)) {
    errors.lastname = 'Only alpha characters'
  }
  if (values.lastname && values.lastname.length > 30) {
    errors.lastname = 'Contains less than 30 characters'
  }
  if (!values.username) {
    errors.username = 'Required'
  }
  if (values.username && /[^a-zA-Z0-9 ]/i.test(values.username)) {
    errors.username = 'Only alphanumeric characters'
  }
  if (values.username && (values.username.length < 6 || values.username.length > 30)) {
    errors.username = 'Must be between 6 and 30 characters'
  }
  if (!values.email) {
    errors.email = 'Required'
  }
  if (values.email && !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(values.email)) {
    errors.email = 'Invalid Email'
  }
  if (values.telephone && isNaN(Number(values.telephone))) {
    errors.telephone = 'Must be a number'
  } else if (values.telephone && !/\d{10,11}/.test(values.telephone)) {
    errors.telephone = 'Must be 10 or 11 digits'
  }
  if (values.address && values.address.length > 200) {
    errors.address = 'Must be less than 200 characters'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (values.password && values.password.length < 6) {
    errors.password = 'Contains at least 6 characters'
  }
  if (values.password && values.password.length > 100) {
    errors.password = 'Contains at most 100 characters'
  }
  if (values.password && !/(?=.*[A-Z])/.test(values.password)) {
    errors.password = 'Contains at least 1 uppercase letter'
  }
  if (values.password && !/(?=.*[a-z])/.test(values.password)) {
    errors.password = 'Contains at least 1 lowercase letter'
  }
  if (!values.passwordconfirmation) {
    errors.passwordconfirmation = 'Required'
  } else if (values.passwordconfirmation && values.passwordconfirmation.length < 6) {
    errors.passwordconfirmation = 'Contains at least 6 characters'
  } else if (values.passwordconfirmation && values.passwordconfirmation.length > 100) {
    errors.passwordconfirmation = 'Contains at most 100 characters'
  } else if (values.passwordconfirmation &&
  values.password &&
  (values.passwordconfirmation!==values.password)) {
    errors.passwordconfirmation = 'Password not match'
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

export default validateSignup
