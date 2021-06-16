import { ComponentType, lazy, ReactNode } from "react"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

interface IRoute {
  path: string
  key: string
  component: ComponentType<ReactNode>
  icon: ReactNode
  title: string
  exact?: boolean
}

const SectionPage = lazy(() => import("views/section"))
const StaffPage = lazy(() => import("views/staff"))
const SalaryPage = lazy(() => import("views/salary"))
const ResetPage = lazy(() => import("views/reset"))

const routes: IRoute[] = [
  {
    path: '/section',
    key: "1",
    component: SectionPage,
    icon: <UserOutlined />,
    title: "部门管理",
    exact: true
  },
  {
    path: '/staff',
    key: "2",
    component: StaffPage,
    icon: <UploadOutlined />,
    title: "员工管理"
  },
  {
    path: '/salary',
    key: "3",
    component: SalaryPage,
    icon: <VideoCameraOutlined />,
    title: "工资管理"
  },
  {
    path: '/reset',
    key: "4",
    component: ResetPage,
    icon: <UserOutlined />,
    title: "修改密码"
  }
]

export default routes