import { getUserInfo, loginUser } from './../../network/auth';
import { registerUser } from "network/auth"
import { Dispatch } from "react"
import { IRegisterUser, ILoginResult, IRegisterResult, IUerInfo } from "typings/user"
import { IAction, USER_ACTION } from "./typing"

export interface IUseUserAction {
  register: (user: IRegisterUser) =>  Promise<string>
  login: ({username, password}: { 
    username: string
    password: string
  }) => Promise<string>
  logout: () => void
}

export function useUserActions(dispatch: Dispatch<IAction>): IUseUserAction {
  // 注册
  const register = async (user: IRegisterUser): Promise<string> => {
    const result = await registerUser<IRegisterResult>(user)
    return result.code === 0 ? '注册成功' : Promise.reject(result.data)
  }

  // 获取用户信息
  const getInfo = async (uid: string) => {
    const result = await getUserInfo<IUerInfo>(uid)
    const payload = {
      nickname: result.data.username,
      uid: result.data.userid,
      username: result.data.username,
      token: localStorage.getItem('salary-admin-token') as string
    }
    localStorage.setItem('salary-admin', JSON.stringify(payload))
    dispatch({
      type: USER_ACTION.INIT,
      payload
    })
  }

  // 登录
  const login = async ({username, password}: { 
    username: string
    password: string
  }) => {
    const result = await loginUser<ILoginResult>({ username, password })
    if (result.code !== 0) return Promise.reject(result.data)
    await getInfo(result.data.uid)
    return '登录成功'
  }


  // 登出
  const logout = () => {
    localStorage.removeItem('salary-admin')
    localStorage.removeItem('salary-admin-token')
    dispatch({
      type: USER_ACTION.LOGOUT
    })
  }

  return {
    register,
    login,
    logout,
  }
}