import { ADD_TO_CART } from '../actions/types'

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
