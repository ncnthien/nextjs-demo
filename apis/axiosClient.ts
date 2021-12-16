import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import queryString from 'qs'

const axiosClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    throw error
  }
)

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    throw error
  }
)

export default axiosClient
