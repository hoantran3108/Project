import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE, REMOVE_ALL_MESSAGES } from '../actions/types'
import uuid from 'uuid'
import _ from 'lodash'

const initialState = []

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: uuid.v4(),
          type: action.message.type,
          text: action.message.text
        }
      ]
    case DELETE_FLASH_MESSAGE:
      const index = _.findIndex(state, { id: action.id })
      if(index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ]
      }
    case REMOVE_ALL_MESSAGES:
      return initialState
    default: return state
  }
}
