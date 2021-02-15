import axios, { 
  AxiosError, 
  AxiosInstance, 
  AxiosRequestConfig, 
  AxiosResponse 
} from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 5000
})

instance.interceptors.request.use((request: AxiosRequestConfig) => {
  return request
}, (error: AxiosError) => {
  console.log(error)
})

instance.interceptors.response.use((response: AxiosResponse) => {
  const res = response.data
  return res
})

export default instance