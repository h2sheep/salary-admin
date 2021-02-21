import { createStore } from 'vuex'
import { section, ISectionState } from './modules/section'
import { staff, IStaffState } from './modules/staff'


export interface IGlobalState {
  section: ISectionState,
  staff: IStaffState
}

const store = createStore<IGlobalState>({
  modules: {
    section,
    staff
  }
})

export default store