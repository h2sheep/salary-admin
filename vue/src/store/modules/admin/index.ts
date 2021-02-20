import { ILogin } from './../../../typings/admin';
import IBaseSuccess from '@/typings/common'
import { ILoginResult, IAdminInfoResult, IAdminInfo, IUpdatePassword, ISignin } from '@/typings/admin'
import { getAdminInfo, logIn, signIn, updateAdminPassword } from '@/network/admin'

import { Module } from 'vuex'
import { IGlobalState } from '@/store'
import Types from './actionTypes'


export interface IAdminState {
  uid: string,
  admin: {
    nickname: string
  }
}

const state: IAdminState = {
  uid: '',
  admin: {
    nickname: ''
  }
} 

export const admin: Module<IAdminState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.LOG_IN](state, uid: string) {
      state.uid = uid
    },
    [Types.SET_ADMIN_INFO](state, admin: IAdminInfo) {
      state.admin.nickname = admin.nickname
    }
  },
  actions: {
    async [Types.SIGN_IN]({ commit }, admin: ISignin) {
      const result = await signIn<IBaseSuccess>(admin)
      if (result.code === 0) {
        console.log(this)
      }
    },
    async [Types.LOG_IN]({ commit }, admin: ILogin) {
      const result = await logIn<ILoginResult>(admin)
      if (result.code === 0) {
        commit(Types.LOG_IN, result.data.uid)
      }
      return result
    },
    async [Types.SET_ADMIN_INFO]({ commit }, uid: string) {
      const result = await getAdminInfo<IAdminInfoResult>(uid)
      commit(Types.SET_ADMIN_INFO, result.data)
    },
    async [Types.UPDATE_ADMIN_PASSWORD]({ commit }, payload: IUpdatePassword) {
      await updateAdminPassword<IBaseSuccess>(payload.uid, payload.password)
    }
  }
}