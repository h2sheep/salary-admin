
// 表格接口结果
export interface ISection {
  code: number
  data: ISectionRow[]
  message: string
}


// 表格一行数据
export interface ISectionRow {
  _id: string,
  name: string,
  count: number
}

// 新增一行
export interface INewSectionRow {
  name: string
  count: number
}

// 成功添加接口结果
export interface ISuccessAdd {
  code: number
  data: ISectionRow
  message: string
}

// 修改
export interface ISuccessModify {
  code: number
  message: string
}

