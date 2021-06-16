import { FC, ReactNode } from "react"
import { createContext, ReactElement } from "react"

import useUser, { IUseUser } from "./user"

interface IStore extends IUseUser {}
// 创建全局Context
export const AppContext = createContext<IStore | null>(null)

// 创建Store
const Store: FC<ReactNode> = ({ children }): ReactElement => {
  return <AppContext.Provider value={{ ...useUser() }} children={children} />
}

// 暴露Store
export default Store