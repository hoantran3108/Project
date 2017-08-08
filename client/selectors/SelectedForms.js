import { formValueSelector } from 'redux-form/immutable'

const loginFormSelector = formValueSelector('loginForm')
const signupFormSelector = formValueSelector('signupForm')

export const getLoginValues = (state) => loginFormSelector(state, 'username', 'password')

export const getSignupValues = (state) => signupFormSelector(state, 'firstname', 'lastname', 'username', 'email', 'telephone', 'address', 'password')
