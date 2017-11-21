import { SET_BANNER } from '../constants/types'
import axios from 'axios'

const setBanners = (banners) => ({
  type: SET_BANNER,
  banners
})

export const getBanners = () => (dispatch) => {
  axios.get('/api/banners')
    .then(res => dispatch(setBanners(res.data.banners)))
    .catch(error => console.log(error))
}
