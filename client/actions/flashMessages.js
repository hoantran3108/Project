import { ADD_LOGIN_MESSAGE, ADD_CART_MESSAGE, ADD_SIGNUP_MESSAGE, REMOVE_ALL_MESSAGES, DELETE_FLASH_MESSAGE } from '../constants/types'

const loginMessage = (message) => ({
  type: ADD_LOGIN_MESSAGE,
  message
})

export const addLoginMessage = (message) => (dispatch) => {
  dispatch(removeAllMessages())
  dispatch(loginMessage(message))
}

const signupMessage = (message) => ({
  type: ADD_SIGNUP_MESSAGE,
  message
})

export const addSignupMessage = (message) => (dispatch) => {
  dispatch(removeAllMessages())
  dispatch(signupMessage(message))
}

const cartMessage = (message) => ({
  type: ADD_CART_MESSAGE,
  message
})

export const addCartMessage = (message) => (dispatch) => {
  dispatch(removeAllMessages())
  dispatch(cartMessage(message))
}

export const deleteFlashMessage = (_id) => ({
  type: DELETE_FLASH_MESSAGE,
  _id
})

export const removeAllMessages = () => ({
  type: REMOVE_ALL_MESSAGES,
})
