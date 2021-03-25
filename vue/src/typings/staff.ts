import { section } from './../store/modules/section/index';
import IBaseSuccess from "./common";

// 请求列表接口
export interface IStaffResult extends IBaseSuccess {
  data: IStaff[]
}

// 请求添加成功接口
export interface IAddResult extends IBaseSuccess {
  data: IStaff
}

// 列表项接口
export interface IStaff extends IBaseStaff {
  staffid: string
}

// 添加员工接口
export interface IBaseStaff {
  sectionid: string
  name: string
  age: number
  gender: STAFF_GENDER
  salary: number
  job: string
}

// 删除员工接口
export interface IDeleteStaff {
  sectionid: string
  staffid: string
}

// 性别枚举
export enum STAFF_GENDER {
  MALE,
  FEMALE
}