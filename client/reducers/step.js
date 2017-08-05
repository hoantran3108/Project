import { combineReducers } from 'redux'
import { SET_ACTIVE_ITEM, TOGGLE_COMPLETED_PROCESS } from '../actions/types'
import { Map } from 'immutable'

const initialState = Map({
  activeItem: 'shipping',
  isCompleted: Map({})
})

const activeItem = (state = initialState.get('activeItem'), action) => {

  switch (action.type) {
    case SET_ACTIVE_ITEM:
    return action.step

    default:
    return state

  }
}

const isCompleted = (state = initialState.get('isCompleted'), action) => {

  switch(action.type) {
    case TOGGLE_COMPLETED_PROCESS:
    return state.set([action.step], true)

    default:
    return state
  }
}

export default combineReducers({
  activeItem,
  isCompleted
})
