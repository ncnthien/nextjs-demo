export interface IChannelItem {
  id: string
  name: string
  avatar: string
  title: string
  categoryName: string
  categoryId: string
  language: string
  img: string
  view: string
}

export interface ChannelParams {
  limit?: number
}
