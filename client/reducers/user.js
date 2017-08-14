import { ADD_CURRENT_USER } from '../constants/types'
import isEmpty from 'lodash/isEmpty'
import { Map, fromJS } from 'immutable'

const initialState = Map({
  isAuthenticated: false,
  user: Map({})
})

export default (state = initialState, action) => {

  switch(action.type) {
    case ADD_CURRENT_USER:
    let user = Map({
      isAuthenticated: !isEmpty(action.user),
      user: fromJS(action.user)
    })
    return state.merge(user)

    default:
    return state
  }

}
