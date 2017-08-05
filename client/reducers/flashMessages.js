import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE, REMOVE_ALL_MESSAGES } from '../actions/types'
import uuid from 'uuid'
import { List } from 'immutable'

const initialState = List([])

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
    const { type, text } = action.message
    return state.push({
      id: uuid.v4(),
      type,
      text
    })

    case DELETE_FLASH_MESSAGE:
    const index = state.findIndex(message => {
      if (message.id===action.id) return message.id
    })
    // if(index >= 0) {
    //   return [
    //     ...state.slice(0, index),
    //     ...state.slice(index + 1)
    //   ]
    // }
    return state.delete(index)

    case REMOVE_ALL_MESSAGES:
    return initialState

    default:
    return state
  }
}
