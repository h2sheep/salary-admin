import { IUserForm } from '@/typings/user';
import request from './axios'


// 用户登录
export function userLogin<T>(user: IUserForm) {
  return request.post<T, T>('/users/login', user)
}


// 获取用户信息
export function getUserInfo<T>(uid: string) {
  return request.get<T, T>('/users/info', {
    params: {
      uid
    }
  })
}

// 获取账号
export function getAdminAccount<T>() {
  return request.get<T, T>('/users/get')
}
