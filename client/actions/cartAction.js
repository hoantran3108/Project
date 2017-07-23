import axios from 'axios'
import _ from 'lodash'
import { ADD_TO_CART, REMOVE_PRODUCTS, REMOVE_PRODUCT, UPDATE_CART } from './types'
import { saveState } from '../localStorage'

const addToCart = (productId) => ({
  type: ADD_TO_CART,
  productId
})

const updateQuantityCart = (payload) => ({
  type: UPDATE_CART,
  payload
})

const removeProductsFromCart = () => ({
  type: REMOVE_PRODUCTS
})

const removeProductFromCart = (productId) => ({
  type: REMOVE_PRODUCT,
  productId
})

export const addProductToCart = (productId) => (dispatch, getState) => {
  _.map(getState().products.byId, product => {
    if (product._id === productId && product.inventory > 0) {
      dispatch(addToCart(productId))
      saveState({
        products: getState().products,
        cart: getState().cart
      })
    }
  })
}

export const updateCart = (productId, quantity) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    if (quantity>0) {
      dispatch(updateQuantityCart({productId, quantity}))
      saveState({
        products: getState().products,
        cart: getState().cart
      })
      resolve()
    }
    reject('Invalid quantity')
  })
}

export const removeProducts = () => (dispatch) => {
  dispatch(removeProductsFromCart())
  localStorage.removeItem('state')
}

export const removeProduct = (productId) => (dispatch, getState) => {
  dispatch(removeProductFromCart(productId))
  saveState({
    products: getState().products,
    cart: getState().cart
  })
}
