import { AxiosResponse } from 'axios'
import axiosClient from './axiosClient'
import { ChannelParams, IChannelItem } from '../types/channel'

const channelApi = {
  getAll: (params: ChannelParams): Promise<AxiosResponse<IChannelItem[]>> => {
    const url = `/channels`
    return axiosClient.get(url, { params })
  },

  getOnCategory: (
    categoryId: string
  ): Promise<AxiosResponse<IChannelItem[]>> => {
    const url = `/channels/${categoryId}`
    return axiosClient.get(url)
  },
}

export default channelApi
