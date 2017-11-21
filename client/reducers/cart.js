import { ADD_TO_CART, REMOVE_PRODUCTS, REMOVE_PRODUCT, UPDATE_CART } from '../constants/types'
import { Map, List } from 'immutable'

const initialState = Map({
  addedIds: List(),
  quantityById: Map()
})

const addedIds = (state = initialState.get('addedIds'), action) => {

  switch (action.type) {
    case ADD_TO_CART:
    if (state.toJS().indexOf(action.productId) !== -1) {
      return state
    }
    return state.push(action.productId)

    case REMOVE_PRODUCTS:
    return initialState.get('addedIds')

    case REMOVE_PRODUCT:
    const index = state.toJS().indexOf(action.productId)
    if (index >=0) {
      return state.delete(index)
    }
    default:
    return state
  }
}

const quantityById = (state = initialState.get('quantityById'), action) => {

  switch (action.type) {
    case ADD_TO_CART:
    // return {
    //   ...state,
    //   [action.productId]: (state[action.productId] || 0) + 1
    // }
    return state.update(action.productId, (quantity=0) => parseInt(quantity)+1)

    case UPDATE_CART:
    // return {
    //   ...state,
    //   [action.payload.productId]: (action.payload.quantity)
    // }
    const { productId, quantity } = action.payload
    return state.update(productId, newQuantity => quantity)

    case REMOVE_PRODUCTS:
    return initialState.get('quantityById')

    case REMOVE_PRODUCT:
    // const keys = _.filter(Object.keys(state), id => id!==action.productId)
    // return {
    //   ..._.pick(state, keys)
    // }
    return state.delete(action.productId)

    default:
    return state
  }
}

const cart = (state=initialState, action) => {
  switch (action.type) {
    default:
    let initialCart = Map({
      addedIds: addedIds(state.get('addedIds'), action),
      quantityById: quantityById(state.get('quantityById'), action)
    })
    return state.merge(initialCart)
  }
}

export default cart
