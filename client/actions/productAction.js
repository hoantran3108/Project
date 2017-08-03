import axios from 'axios'
import { SET_PRODUCTS, SET_SEARCHED_PRODUCTS } from './types'

export const fetchProducts = (prevTotal) => (dispatch) => {
  return axios.get(`/api/products?total=${prevTotal}`)
  .then(res => {
    dispatch(setProducts(res.data.products))
    return new Promise(resolve => resolve(res))
  })
}

const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products
})

export const searchProducts = (value) => (dispatch) => {
  return axios.get(`/api/products?name=${value}`)
}
