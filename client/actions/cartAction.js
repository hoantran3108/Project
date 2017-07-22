import axios from 'axios'
import map from 'lodash/map'
import { ADD_TO_CART, REMOVE_PRODUCTS, REMOVE_PRODUCT } from './types'
import { saveState } from '../localStorage'

const addToCart = (productId) => ({
  type: ADD_TO_CART,
  productId
})

const removeProductsFromCart = () => ({
  type: REMOVE_PRODUCTS
})

const removeProductFromCart = (productId) => ({
  type: REMOVE_PRODUCT,
  productId
})

export const addProductToCart = (productId) => (dispatch, getState) => {
  map(getState().products.byId, product => {
    if (product._id === productId && product.inventory > 0) {
      dispatch(addToCart(productId))
      saveState({
        products: getState().products,
        cart: getState().cart
      })
    }
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
