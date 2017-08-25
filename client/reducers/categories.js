import { List } from 'immutable'
import { GET_CATEGORIES } from '../constants/types'

const initialState = List([])

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
    return state.push(...action.categories)

    default:
    return state
  }
}
