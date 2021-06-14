import { useReducer } from "react"
import { countReducer } from "./reducer"
import { IUseCount } from "./typing"

const useCount = (): IUseCount => {

  const [count, dispatch] = useReducer(countReducer, 0)

  const add = (num: number) => dispatch({
    type: 'add',
    payload: num
  })

  return {
    count,
    add
  }
}

export default useCount