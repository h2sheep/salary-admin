import { IBaseStaff, IStaff } from '@/typings/staff'
import request from './axios'

// 获取员工
export function getStaffList<T>(sectionid?: string) {
  if (sectionid) {
    return request.get<T, T>('/staff/get', {
      params: { sectionid }
    })
  } else {
    return request.get<T, T>('/staff/get')
  }
}

// 添加员工
export function addStaffItem<T>(staff:IBaseStaff) {
  return request.post<T, T>('/staff/add', staff)
}

// 删除员工
export function deleteStaffItem<T>(sectionid: string, staffid: string) {
  return request.delete<T, T>('/staff/delete', {
    data: {
      sectionid,
      staffid
    }
  })
}

// 修改员工信息
export function updateStaffItem<T>(staff: IStaff) {
  return request.post<T, T>('/staff/update', staff)
}