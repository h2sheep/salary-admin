import request from './axios'

// 获取部门列表
export function getSectionList<T>() {
  return request.get<T, T>('/sections/get')
}

// 添加部门
export function addSectionItem<T>(name: string) {
  return request.post<T, T>('/sections/add', { name })
}

// 修改部门信息
export function updateSectionItem<T>(sectionid: string, name: string) {
  return request.patch<T, T>('/sections/update', {
    sectionid,
    name
  })
}

// 删除部门信息
export function deleteSectionItem<T>(sectionid: string) {
  return request.delete<T, T>('/sections/delete', {
    data: { sectionid }
  })
}

// 获取部门图表
export function getSectionChart<T>() {
  return request.get<T, T>('/sections/chart')
}