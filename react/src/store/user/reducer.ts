import { IAction, IState, USER_ACTION } from "./typing"

function userReducer(state: IState, action: IAction): IState {

  const { type, payload } = action

  switch (type) {
    case USER_ACTION.LOGOUT:
      return {
        ...state,
        uid: "",
        username: "",
        nickname: "",
        token: ""
      }
    case USER_ACTION.INIT:
      return {
        ...state,
        ...payload as IState
      }
    default:
      return state
  }
}

export {
  userReducer
}