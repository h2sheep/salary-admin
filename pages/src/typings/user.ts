

export interface IUserForm {
  user: string;
  password: string;
}

export interface IPasswordForm {
  oldPassword: string
  newPassword: string
}

export enum USER_LEVEL {
  ADMIN,
  SUPER_ADMIN
}

export interface IUserInfo {
  avatar: string
  level: USER_LEVEL
}