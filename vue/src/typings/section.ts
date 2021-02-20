
import IBaseSuccess from './common'

// 请求列表接口
export interface ISectionResult extends IBaseSuccess {
  data: ISection[]
}

// 列表项接口
export interface ISection {
  sectionid: string,
  name: string,
  count: number
}

// 请求添加成功接口
export interface IAddResult extends IBaseSuccess{
  data: ISection
}

// 修改部门信息接口
export interface IUpdatePayload {
  sectionid: string,
  name: string
}



