export interface ICountAction {
  type: string
  payload: number
}

export interface IUseCount {
  count: number
  add: (num: number) => void
}