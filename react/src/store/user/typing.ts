export interface IAction {
  type: string
  payload?: string | IState
}

export interface IState {
  nickname: string
  uid: string
  username: string
  token: string
}

export enum USER_ACTION {
  LOGIN = "login",
  LOGOUT = "logout",
  INIT = "init"
}