import { Module } from "vuex"
import { IGlobalState } from '@/store'
import Types from './actionTypes'

import { IAddResult, ISection, ISectionResult, IUpdatePayload } from '@/typings/section'
import IBaseSuccess from '@/typings/common'

import { addSectionItem, deleteSectionItem, getSectionList, updateSectionItem } from '@/network/section'


// vuex state
export interface ISectionState {
  sectionList: ISection[],
}

const state: ISectionState = {
  sectionList: [],
}

export const section: Module<ISectionState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    // 列表增删改查
    [Types.SET_SECTION_LIST](state, list: ISection[]) {
      state.sectionList = list
    },
    [Types.ADD_SECTION_ITEM](state, section: ISection) {
      state.sectionList = [...state.sectionList, section]
    },
    [Types.DELETE_SECTION_ITEM](state, sectionid: string) {
      state.sectionList = state.sectionList.filter((item: ISection) => item.sectionid !== sectionid)
    },
    [Types.UPDATE_SECTION_ITEM](state, payload: IUpdatePayload) {
      state.sectionList = state.sectionList.map((item: ISection) => {
        if (item.sectionid === payload.sectionid) item.name = payload.name
        return item
      })
    }
  },
  actions: {
    // 列表增删改查
    async [Types.SET_SECTION_LIST]({ commit }) {
      const result = await getSectionList<ISectionResult>()
      commit(Types.SET_SECTION_LIST, result.data)
    },
    async [Types.ADD_SECTION_ITEM]({ commit }, name: string) {
      const result = await addSectionItem<IAddResult>(name)
      commit(Types.ADD_SECTION_ITEM, result.data)
    },
    async [Types.DELETE_SECTION_ITEM]({ commit }, sectionid: string) {
      const result = await deleteSectionItem<IBaseSuccess>(sectionid)
      if (result.code === 0) commit(Types.DELETE_SECTION_ITEM, sectionid)
    },
    async [Types.UPDATE_SECTION_ITEM]({ commit }, payload: IUpdatePayload) {
      const result = await updateSectionItem<IBaseSuccess>(payload.sectionid, payload.name)
      if (result.code === 0) commit(Types.UPDATE_SECTION_ITEM, payload)
    }
  }
}