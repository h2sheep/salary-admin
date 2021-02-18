import { INewSectionRow, ISectionRow } from '@/typings/section'
import request from './axios'


// 获取部门数据
export function getAllSections<T>() {
  return request.get<T, T>('/sections/get')
}


// 添加部门
export function addSection<T>(section: INewSectionRow) {
  return request.post<T, T>('/sections/add', {
    name: section.name,
    count: section.count
  })
}

// 修改部门信息
export function updateSection<T>(section: ISectionRow) {
  return request.post<T, T>('/sections/update', {
    sectionid: section._id,
    name: section.name,
    count: section.count
  })
}

// 删除部门信息
export function deleteSection<T>(sectionid: string) {
  return request.delete<T, T>('/sections/delete', {
    data: {
      sectionid
    }
  })
}