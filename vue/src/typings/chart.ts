import IBaseSuccess from "./common";

// 请求图表接口
export interface IChartResult extends IBaseSuccess {
  data: IChart[]
}

// 图表接口
export interface IChart {
  name: string
  expenditure: number
}