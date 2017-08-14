import { ADD_LOGIN_MESSAGE, ADD_CART_MESSAGE, ADD_SIGNUP_MESSAGE, REMOVE_ALL_MESSAGES, DELETE_FLASH_MESSAGE, REMOVE_CART_MESSAGES } from '../constants/types'

export const addLoginMessage = (message) => ({
  type: ADD_LOGIN_MESSAGE,
  message
})

export const addSignupMessage = (message) => ({
  type: ADD_SIGNUP_MESSAGE,
  message
})

export const addCartMessage = (message) => ({
  type: ADD_CART_MESSAGE,
  message
})

export const removeCartMessages = () => ({
  tyep: REMOVE_CART_MESSAGES
})

export const deleteFlashMessage = (id) => ({
  type: DELETE_FLASH_MESSAGE,
  id
})

export const removeAllMessages = () => ({
  type: REMOVE_ALL_MESSAGES,
})
