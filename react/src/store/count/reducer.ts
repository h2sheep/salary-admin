import { ICountAction } from "./typing"

function countReducer(state: number, action: ICountAction): number {

  const { type, payload } = action

  switch (type) {
    case 'add':
      return state + payload
    default:
      return state
  }
}

export {
  countReducer
}