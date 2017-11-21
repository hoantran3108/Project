import { GET_CATEGORIES } from '../constants/types'
import axios from 'axios'

const setCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories
})

export const getCategories = () => (dispatch) => {
  axios.get('/api/categories')
    .then(res => dispatch(setCategories(res.data.categories)))
    .catch(error => console.log(error))
}
