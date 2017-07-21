import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import users from './reducers/users'
import products from './reducers/products'
import cart from './reducers/cart'
import flashMessages from './reducers/flashMessages'
import { loadCart } from './localStorage'
// import throttle from 'lodash/throttle' //import directly to avoid a bunch of unnescessary files in bundle.

const configureStore = () => {
  const rootReducer = combineReducers({
    flashMessages,
    users,
    products,
    cart
  })

  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const persistedState = loadCart()

  const store = createStore(
    rootReducer,
    persistedState,
    reduxDevTools(applyMiddleware(thunk, logger)))

  // store.subscribe(throttle(() => {
  //   saveState(store.getState())
  // }, 2000))

  return store
}

export default configureStore
