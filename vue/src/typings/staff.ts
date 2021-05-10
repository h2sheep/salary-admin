import IBaseSuccess from "./common";

// 请求列表接口
export interface IStaffResult extends IBaseSuccess {
  data: IStaff[]
}

// 请求添加成功接口
export interface IAddResult extends IBaseSuccess {
  data: IStaff
}

// data中列表项接口
export interface IStaff extends IAddStaff {
  staffid: string
  sectionid: string
  name: string
  age: number
  gender: STAFF_GENDER
  job: string
  salary: number
  base: number
  eatandlive: number
  extra: number
  fullmonth: number
  overtime: number
  transportation: number
}

// 添加员工接口
export interface IAddStaff {
  sectionid: string
  name: string
  age: number
  gender: STAFF_GENDER
  job: string
}

// 删除员工接口
export interface IDeleteStaff {
  sectionid: string
  staffid: string
}

// 工资编辑接口
export interface IEditSalary {
  name: string
  job: string
  base: number
  eatandlive: number
  extra: number
  fullmonth: number
  overtime: number
  transportation: number
}

// 性别枚举
export enum STAFF_GENDER {
  MALE,
  FEMALE
}