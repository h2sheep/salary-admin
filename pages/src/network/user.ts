import request from './axios'


// 登录
interface IUser {
  uid: string
}

interface IUserLogin {
  code: number
  data: IUser
  message: string
}

export function userLogin<T>(user: T) {
  return request.post<T, IUserLogin>('/users/login', user)
}


// 获取用户信息
export function getUserInfo<T>() {

  // return request.get<T, AxiosResponse<T>>()

  return Promise.resolve({
    data: {
      avatar: '',
      level: 0
    }
  })
}
