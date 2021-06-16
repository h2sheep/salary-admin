import instance from "network"
import { IRegisterUser } from "typings/user"

// 注册
export const registerUser = <T>(user: IRegisterUser) => {
  return instance.post<T, T>('/users/signin', user)
}

// 登录
export const loginUser = <T>({ username, password }: { 
  username: string
  password: string
}) => {
  return instance.post<T, T>('/users/login', { username, password })
}

// 获取用户信息
export const getUserInfo = <T>(uid: string) => {
  return instance.get<T, T>('/users/info', {
    params: { uid }
  })
}
