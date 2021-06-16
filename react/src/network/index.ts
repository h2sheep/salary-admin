import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  request  =>  {
    // 携带token
    request.headers['authorization'] = localStorage.getItem('salary-admin-token')
    return request
  },
  err => Promise.reject(err.message)
)


// 响应拦截器
instance.interceptors.response.use(
  response => {
    const result = response.data
    // 如果有token 保存token
    if (response.headers['authorization']) localStorage.setItem('salary-admin-token', response.headers['authorization'])
    return result
  },
  err => Promise.reject(err.message)
)

export default instance