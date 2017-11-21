import { combineReducers } from 'redux'
import { SET_PRODUCTS } from '../constants/types'
import { List, fromJS } from 'immutable'

const initialState = List()

export default (state = initialState, action) => {

  switch(action.type) {
    case SET_PRODUCTS:
    let products = fromJS(action.products)
    return products.concat(state.filter(product => products.indexOf(product) < 0))

    default:
    return state
  }
}
