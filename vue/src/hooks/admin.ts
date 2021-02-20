import { ILogin, ISignin } from './../typings/admin';
import { watch } from "vue"
import { useRouter } from "vue-router"

import { useStore } from 'vuex'
import { IGlobalState } from "@/store"
import Types from '@/store/modules/admin/actionTypes'



export interface IUseAdmin {
  login: (account: ILogin) => void
  logout: () => void
  setAdminInfo: () => void
  updateAdminPassword: (password: string) => void
}

export function useAdmin(): IUseAdmin {

  const store = useStore<IGlobalState>()
  const router = useRouter()

  // 注册
  const signin = (admin: ISignin): void => {
    store.dispatch(`admin/${Types.SIGN_IN}`, admin)
  }

  // 登录
  const login = (account: ILogin): void => {
    store.dispatch(`admin/${Types.LOG_IN}`, account)
  }

  // 获取管理员信息
  const setAdminInfo = (): void => {
    const uid = localStorage.getItem('uid') as string
    store.dispatch(`admin/${Types.SET_ADMIN_INFO}`, uid)
  }

  // 修改密码
  const updateAdminPassword = (password: string): void => {
    const uid = localStorage.getItem('uid') as string
    store.dispatch(`admin${Types.UPDATE_ADMIN_PASSWORD}`, {
      uid,
      password
    })
  }

  // 监听uid
  watch(() => store.state.admin.uid, val => {
    localStorage.setItem('salary-admin-uid', val)
    router.replace('/admin')
  })

  // 退出登录
  const logout = (): void => {
    localStorage.removeItem('token')
    router.replace('/login')
  }

  return {
    login,
    logout,
    setAdminInfo,
    updateAdminPassword
  }
}