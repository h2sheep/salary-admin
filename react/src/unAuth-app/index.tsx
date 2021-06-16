import { FC, ReactElement, useState } from "react"
import { Tabs } from 'antd'
import LoginPage from "./Login"
import RegisterPage from "./Register"

import './index.less'

const { TabPane } = Tabs
const LOGIN_KEY = "login"
const REGISTER_KEY = "register"

const UnAuthApp: FC = (): ReactElement => {
  // 标签页标识
  const [activeKey, setActiveKey] = useState<string>('login')

  // 注册成功切换标签页
  const toggleTab = () => setActiveKey(LOGIN_KEY)

  return (
    <div className="unauth-app">

      <h1 className="title">工资管理系统</h1>

      <Tabs onChange={setActiveKey} activeKey={activeKey}>
        <TabPane tab="登录" key={ LOGIN_KEY }>
          <LoginPage />
        </TabPane>

        <TabPane tab="注册" key={ REGISTER_KEY }>
          <RegisterPage toggleTab={ toggleTab } />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default UnAuthApp