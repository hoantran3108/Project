import { getFirstname, getLastname, getEmail, getTelephone, getAddress } from './validators'

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
  if (!getEmail(values)) {
    errors.email = 'Required'
  }
  if (getEmail(values) && !/^\w+@[a-z_]+\.[a-z]{2,3}$/i.test(getEmail(values))) {
    errors.email = 'Invalid Email'
  }
  if (!getTelephone(values)) {
    errors.email = 'Required'
  }
  if (getTelephone(values) && isNaN(Number(getTelephone(values)))) {
    errors.telephone = 'Must be a number'
  }
  if (!getAddress(values)) {
    errors.email = 'Required'
  }
  if (getAddress(values) && getAddress(values).length > 200) {
    errors.address = 'Must be less than 200 characters'
  }
  return errors
}

export default validate
