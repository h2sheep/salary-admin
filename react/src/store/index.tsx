import { FC, ReactNode } from "react";
import { createContext, ReactElement } from "react";
import useCount from "./count";
import { IUseCount } from "./count/typing";

interface IStore extends IUseCount {
  name: string
}

export const AppContext = createContext<IStore | null>(null)

const Store: FC<ReactNode> = ({ children }): ReactElement => {
  const { count, add } = useCount()

  const name = 'a'

  return (
   <AppContext.Provider value={{ name, count, add }}>
     { children }
   </AppContext.Provider>
  )
}

export default Store