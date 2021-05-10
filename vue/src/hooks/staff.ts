import { IAddStaff, IStaff } from "@/typings/staff"

import { useStore } from 'vuex'
import { IGlobalState } from '@/store'
import Types from '@/store/modules/staff/actionTypes'


export interface IUseStaff {
  setStaffList: (sectonid?: string) => void
  addStaffItem: (staff: IAddStaff) => void
  deleteStaffItem: (sectionid: string, staffid: string) => void
  updateStaffItem: (staff: IStaff) => void
}

export function useStaff(): IUseStaff {

  const store = useStore<IGlobalState>()

  // 获取员工列表
  const setStaffList = (sectionid?: string): void => {
    store.dispatch(`staff/${Types.SET_STAFF_LIST}`, sectionid)
  }
   
  // 添加员工
  const addStaffItem = (staff: IAddStaff): void => {
    store.dispatch(`staff/${Types.ADD_STAFF_ITEM}`, staff)
  }

  // 删除员工
  const deleteStaffItem = (sectionid: string, staffid: string): void => {
    store.dispatch(`staff/${Types.DELETE_STAFF_ITEM}`, {
      sectionid, 
      staffid
    })
  }
  
  // 修改员工信息
  const updateStaffItem = (staff: IStaff): void => {
    store.dispatch(`staff/${Types.UPDATE_STAFF_ITEM}`, staff)
  }

  return {
    setStaffList,
    addStaffItem,
    deleteStaffItem,
    updateStaffItem
  }
}