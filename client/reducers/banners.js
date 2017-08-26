import { List } from 'immutable'
import { SET_BANNER } from '../constants/types'

const initialState = List([])

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BANNER:
    return state.push(...action.banners)

    default:
    return state
  }
}
