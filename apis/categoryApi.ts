import { AxiosResponse } from 'axios'
import axiosClient from './axiosClient'
import { ICategoryItem } from '../types/category'
import { CategoryParams } from '../types/category'

const categoryApi = {
  getAll: (
    params?: CategoryParams
  ): Promise<AxiosResponse<ICategoryItem[]>> => {
    const url = '/categories'
    return axiosClient.get(url, { params })
  },

  get: (categoryId: string): Promise<AxiosResponse<ICategoryItem>> => {
    const url = `/categories/${categoryId}`
    return axiosClient.get(url)
  },
}

export default categoryApi
