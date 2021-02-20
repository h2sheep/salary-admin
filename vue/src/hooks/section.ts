import { IGlobalState } from './../store/index';
import { useStore } from 'vuex';
import Types from '@/store/modules/section/actionTypes';

export interface IUseSection {
  setSectionList: () => void
  addSectionItem: (name: string) => void
  removeSectionItem: (sectionid: string) => void
  updateSectionItem: (sectionid: string, name: string) => void
}

export function useSection(): IUseSection {

  const store = useStore<IGlobalState>()

  // 获取部门列表
  const setSectionList = (): void => {
    store.dispatch(`section/${Types.SET_SECTION_LIST}`)
  }

  // 添加部门
  const addSectionItem = (name: string): void => {
    store.dispatch(`section/${Types.ADD_SECTION_ITEM}`, name)
  }

  // 删除部门
  const removeSectionItem = (sectionid: string): void => {
    store.dispatch(`section/${Types.DELETE_SECTION_ITEM}`, sectionid)
  }

  // 修改部门信息
  const updateSectionItem = (sectionid: string, name: string): void => {
    store.dispatch(`section/${Types.UPDATE_SECTION_ITEM}`, {
      sectionid,
      name
    })
  }

  return {
    setSectionList,
    addSectionItem,
    removeSectionItem,
    updateSectionItem
  }
}