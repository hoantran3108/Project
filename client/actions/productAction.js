import axios from 'axios'
import map from 'lodash/map'
import { SET_PRODUCTS, ADD_TO_CART } from './types'
import { saveCart } from '../localStorage'

export const fetchProducts = () => (dispatch) => {
  axios.get('/api/products')
  .then(res => dispatch(setProducts(res.data.products)))
}

const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products
})

const addToCart = (productId) => ({
  type: ADD_TO_CART,
  productId
})

export const addProductToCart = (productId) => (dispatch, getState) => {
  map(getState().products.byId, product => {
    if (product._id === productId && product.inventory > 0) {
      dispatch(addToCart(productId))
      saveCart({cart: getState().cart})
    }
  })
}
