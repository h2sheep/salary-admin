import { Module } from 'vuex'
import { IGlobalState } from '@/store'
import Types from './actionTypes'

import { IAddResult, IAddStaff, IStaff, IStaffResult, IDeleteStaff } from '@/typings/staff'
import IBaseSuccess from '@/typings/common'

import { addStaffItem, deleteStaffItem, getStaffList, updateStaffItem } from '@/network/staff'


export interface IStaffState {
  staffList: IStaff[]
}

const state: IStaffState = {
  staffList: []
}

export const staff: Module<IStaffState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.SET_STAFF_LIST](state, list: IStaff[]) {
      state.staffList = list
    },
    [Types.ADD_STAFF_ITEM](state, staff: IStaff) {
      state.staffList = [...state.staffList, staff]
    },
    [Types.DELETE_STAFF_ITEM](state, staffid: string) {
      state.staffList = state.staffList.filter((item: IStaff) => item.staffid !== staffid)
    },
    [Types.UPDATE_STAFF_ITEM](state, staff: IStaff) {
      state.staffList = state.staffList.map((item: IStaff) => {
        if (item.staffid === staff.staffid) item = staff
        return item
      })
    }
  },
  actions: {
    async [Types.SET_STAFF_LIST]({ commit }, sectionid: string) {
      const result = await getStaffList<IStaffResult>(sectionid)
      commit(Types.SET_STAFF_LIST, result.data)
    },
    async [Types.ADD_STAFF_ITEM]({ commit }, staff: IAddStaff) {
      const result = await addStaffItem<IAddResult>(staff)
      commit(Types.ADD_STAFF_ITEM, result.data)
    },
    async [Types.DELETE_STAFF_ITEM]({ commit }, payload: IDeleteStaff) {
      const result = await deleteStaffItem<IBaseSuccess>(payload.sectionid, payload.staffid)
      if (result.code === 0) commit(Types.DELETE_STAFF_ITEM, payload.staffid)
    },
    async [Types.UPDATE_STAFF_ITEM]({ commit }, staff: IStaff) {
      const result = await updateStaffItem<IBaseSuccess>(staff)
      if (result.code === 0) commit(Types.UPDATE_STAFF_ITEM, staff)
    }
  }
}
