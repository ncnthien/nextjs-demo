import axios from 'axios'
import queryString from 'qs'

const axiosClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

export default axiosClient
