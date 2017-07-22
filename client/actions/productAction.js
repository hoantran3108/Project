import axios from 'axios'
import { SET_PRODUCTS } from './types'

export const fetchProducts = () => (dispatch) => {
  axios.get('/api/products')
  .then(res => dispatch(setProducts(res.data.products)))
}

const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products
})
