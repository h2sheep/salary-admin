export interface IBaseResult {
  code: number
  message: string
}

// 注册用户
export interface IRegisterUser {
  nickname: string
  username: string
  password: string
}
// 注册结果
export interface IRegisterResult extends IBaseResult {
  data?: [string]
}

// 登录结果
export interface ILoginResult extends IBaseResult {
  data: {
    uid: string
  }
}

// 获取信息结果
export interface IUerInfo extends IBaseResult {
  data: {
    userid: string
    nickname: string
    username: string
  }
}
