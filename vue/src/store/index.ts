import { admin, IAdminState } from './modules/admin/index';
import { createStore } from 'vuex'
import { section, ISectionState } from './modules/section'
import { staff, IStaffState } from './modules/staff'


export interface IGlobalState {
  section: ISectionState,
  staff: IStaffState
  admin: IAdminState
}

const store = createStore<IGlobalState>({
  mutations: {
  },
  actions: {
  },
  modules: {
    section,
    staff,
    admin
  }
})

export default store