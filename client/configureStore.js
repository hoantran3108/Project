import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import user from './reducers/user'
import products from './reducers/products'
import cart from './reducers/cart'
import flashMessages from './reducers/flashMessages'
import step from './reducers/step'
import { loadCart } from './localStorage'
import { fromJS } from 'immutable'

const configureStore = () => {
  const rootReducer = combineReducers({
    user,
    products,
    cart,
    step,
    flashMessages
  })

  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const persistedState = loadCart()

  const store = createStore(
    rootReducer,
    fromJS(persistedState),
    reduxDevTools(applyMiddleware(thunk, logger)))

    return store
  }

  export default configureStore
