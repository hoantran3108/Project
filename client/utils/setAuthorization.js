import axios from 'axios'

export default function setAuthorization(jwttoken) {
  if (jwttoken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${jwttoken}`
  } else {
    axios.defaults.headers.common['Authorization'] = null
    delete axios.defaults.headers.common['Authorization']
  }
}