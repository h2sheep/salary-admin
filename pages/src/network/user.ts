import request from './axios'

import { AxiosResponse } from 'axios'

export function getUserInfo<T>() {

  // return request.get<T, AxiosResponse<T>>('')

  return Promise.resolve({
    code: 0,
    data: {
      avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2979475887,2210716721&fm=26&gp=0.jpg',
      level: 0
    }
  })
}
