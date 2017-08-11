import axios from 'axios'
import { ADD_TO_CART, REMOVE_PRODUCTS, REMOVE_PRODUCT, UPDATE_CART } from './types'
import { saveCart } from '../localStorage'
import { productsSelector, cartSelector, quantityByIdsSelector } from '../selectors/SelectedProducts'

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
  const idsByQuantity = quantityByIdsSelector(getState())
  productsSelector(getState()).map(product => {
    if (product._id === productId && product.inventory > 0 && (idsByQuantity[productId] || 0) < 100) {
      dispatch(addToCart(productId))
      saveCart({
        products: productsSelector(getState()),
        cart: cartSelector(getState())
      })
    }
  })
}

export const updateCart = (productId, quantity) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    if (quantity>0) {
      dispatch(updateQuantityCart({productId, quantity}))
      saveCart({
        products: productsSelector(getState()),
        cart: cartSelector(getState())
      })
      resolve()
    }
    reject('Invalid quantity')
  })
}

export const removeProducts = () => (dispatch) => {
  dispatch(removeProductsFromCart())
  localStorage.removeItem('cart')
}

export const removeProduct = (productId) => (dispatch, getState) => {
  dispatch(removeProductFromCart(productId))
  saveCart({
    products: productsSelector(getState()),
    cart: cartSelector(getState())
  })
}
