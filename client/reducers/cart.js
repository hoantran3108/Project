import { ADD_TO_CART, REMOVE_PRODUCTS, REMOVE_PRODUCT } from '../actions/types'
import _ from 'lodash'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state=initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [
        ...state,
        action.productId
      ]
    case REMOVE_PRODUCTS:
      return initialState.addedIds
    case REMOVE_PRODUCT:
      const index = _.indexOf(state, action.productId)
      if (index >=0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index +1)
        ]
      }
    default:
      return state

  }
}

const quantityById = (state=initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.productId]: (state[action.productId] || 0) + 1
      }
    case REMOVE_PRODUCTS:
      return initialState.quantityById
    case REMOVE_PRODUCT:
      const array = _.filter(Object.keys(state), id => id!==action.productId)
      return {
        ..._.pick(state, array)
      }
    default:
      return state
  }
}

const cart = (state=initialState, action) => {
  switch (action.type) {
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
