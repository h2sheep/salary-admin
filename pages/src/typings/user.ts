

// 管理员账号
export interface IGetAdmin {
  code: number
  data: IAdminAccount
  message: string
}

interface IAdminAccount {
  username: string
  password: string
  level: USER_LEVEL
  avatar: string
}

// 管理员级别
export enum USER_LEVEL {
  ADMIN,
  SUPER_ADMIN
}

// 登录表单
export interface IUserForm {
  username: string
  password: string
}



export interface IPasswordForm {
  oldPassword: string
  newPassword: string
}

// 管理员信息
export interface IAdmin {
  code: number
  data: IAdminInfo
  message: string
}

export interface IAdminInfo {
  username: string
  level: USER_LEVEL
  avatar: string
}

// 用户登录
export interface ILogin {
  code: number
  data: IUserLogin
  message: string
}

interface IUserLogin {
  uid: string
}



