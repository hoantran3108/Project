import { ADD_LOGIN_MESSAGE, ADD_CART_MESSAGE, ADD_SIGNUP_MESSAGE, DELETE_FLASH_MESSAGE,REMOVE_ALL_MESSAGES } from '../constants/types'
import uuid from 'uuid'
import { List, Map } from 'immutable'

const initialState = Map({
  login: List([]),
  signup: List([]),
  cart: List([])
})

const login = (state = initialState.get('login'), action) => {
  switch(action.type) {
    case ADD_LOGIN_MESSAGE:
    const { type, text } = action.message
    return state.push({
      id: uuid.v4(),
      type,
      text
    })

    case DELETE_FLASH_MESSAGE:
    const index = state.findIndex(message => {
      if (message.id===action.id) return message.id
    })
    return state.delete(index)

    default:
    return state
  }
}

const cart = (state = initialState.get('cart'), action) => {
  switch(action.type) {
    case ADD_CART_MESSAGE:
    const { type, text } = action.message
    return state.push({
      id: uuid.v4(),
      type,
      text
    })

    case DELETE_FLASH_MESSAGE:
    const index = state.findIndex(message => {
      if (message.id===action.id) return message.id
    })
    return state.delete(index)

    default:
    return state
  }
}

const signup = (state = initialState.get('signup'), action) => {
  switch(action.type) {
    case ADD_SIGNUP_MESSAGE:
    const { type, text } = action.message
    return state.push({
      id: uuid.v4(),
      type,
      text
    })

    case DELETE_FLASH_MESSAGE:
    const index = state.findIndex(message => {
      if (message.id===action.id) return message.id
    })
    return state.delete(index)

    default:
    return state
  }
}

const flashMessages = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ALL_MESSAGES:
    return state=initialState

    default:
    let initialMessages = Map({
      login: login(state.get('login'), action),
      signup: signup(state.get('signup'), action),
      cart: cart(state.get('cart'), action)
    })
    return state.merge(initialMessages)
  }
}

export default flashMessages
