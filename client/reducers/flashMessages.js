import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types'
import uuid from 'uuid'
import _ from 'lodash'

export default (state = [], action = {}) => {
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
      console.log(index)
      if(index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ]
      }
      return state
    default: return state
  }
}