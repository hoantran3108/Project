import { combineReducers } from 'redux'
import map from 'lodash/map'
import { SET_PRODUCTS } from '../actions/types'


const byId = (state = [], action) => {
  switch(action.type) {
    case SET_PRODUCTS:
      return action.products

    default: return state
  }
}

const visibleId = (state = [], action) => {
  switch(action.type) {
    case SET_PRODUCTS:
      return map(action.products, product => product._id)
    default: return state
  }
}

export default combineReducers({
  byId,
  visibleId
})
