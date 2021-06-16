import { IState } from './typing';
import { useReducer } from "react"
import { userReducer } from "./reducer"
import { IUseUserAction, useUserActions } from './actions'


export interface IUseUser extends IUseUserAction {
  user: IState
}

const useUser = (): IUseUser => {
  const salaryAdmin: IState = JSON.parse(localStorage.getItem('salary-admin') || '{}')

  // 状态
  const [state, dispatch] = useReducer(userReducer, {
    nickname: salaryAdmin.nickname || '',
    uid: salaryAdmin.uid || '',
    username: salaryAdmin.username || '',
    token: salaryAdmin.nickname || ''
  })

  return {
    user: state,
    ...useUserActions(dispatch)
  }
}

export default useUser