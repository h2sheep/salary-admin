import { ISignin, ILogin } from './../typings/admin';
import request from './axios'

// 注册
export function signIn<T>(admin: ISignin) {
  return request.post<T, T>('/users/signin', admin)
}


// 登录
export function logIn<T>(admin: ILogin) {
  return request.post<T, T>('/users/login', admin)
}

// 获取管理员信息
export function getAdminInfo<T>(uid: string) {
  return request.get<T, T>('/users/info', {
    params: { uid }
  })
}

// 修改密码
export function updateAdminPassword<T>(uid: string, password: string) {
  return request.patch<T, T>('/users/update', {
    uid,
    password
  })
}