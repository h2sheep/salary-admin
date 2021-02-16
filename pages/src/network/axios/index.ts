import axios, { 
  AxiosError, 
  AxiosInstance, 
  AxiosRequestConfig, 
  AxiosResponse 
} from 'axios'

import { LOG_IN } from './status'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

instance.interceptors.request.use((request: AxiosRequestConfig) => {

  // 添加token
  request.headers['Authorization'] = localStorage.getItem('token')

  return request
}, (error: AxiosError) => {
  console.log(error)
})

instance.interceptors.response.use((response: AxiosResponse) => {
   // 保存token
  if (response.headers['authorization']) localStorage.setItem('token', response.headers['authorization'])

  const result = response.data
  // 未登录 跳转登录页面
  if (result.code === LOG_IN) window.location.pathname = '/login'
  
  // 返回数据
  return result
}, (error: AxiosError) => {
  console.log(error)
})


export default instance