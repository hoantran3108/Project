import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE, REMOVE_ALL_MESSAGES } from './types'

export const addFlashMessage = (message) => ({
  type: ADD_FLASH_MESSAGE,
  message
})

export const deleteFlashMessage = (id) => ({
  type: DELETE_FLASH_MESSAGE,
  id
})

export const removeAllMessages = () => ({
  type: REMOVE_ALL_MESSAGES,
})
