import IBaseSuccess from "./common";

// 请求注册接口
export interface ISigninResult extends IBaseSuccess {
  data: [string]
}

// 注册接口
export interface ISignin {
  nickname: string
  username: string
  password: string
}

// 请求登录接口
export interface ILoginResult extends IBaseSuccess {
  data: {
    uid: string
  }
}

// 登录接口
export interface ILogin {
  username: string
  password: string
}

// 请求管理员信息接口 
export interface IAdminInfoResult extends IBaseSuccess{
  data: IAdminInfo
}

// 管理员信息接口
export interface IAdminInfo {
  uid: string
  nickname: string
  username: string
}

// 修改密码接口
export interface IUpdatePassword {
  uid: string
  password: string
}




