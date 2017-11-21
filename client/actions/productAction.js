import axios from 'axios'
import { SET_PRODUCTS } from '../constants/types'

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

export const searchProducts = (value) => () => {
  return axios.get(`/api/products?name=${value}`)
}

export const singleProduct = (id) => () => {
  return axios.get(`/api/products/${id}`)
    .then(err => console.log(err))
}
