import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 用户登录注册页
const User = () => import('@/views/form/index.vue')
// 管理系统首页
const Home = () => import('@/views/home/index.vue')
// 首页子路由
const Chart  = () => import('@/views/charts/index.vue') // 图表展示
const Sections  = () => import('@/views/sections/index.vue') // 部门管理
const Staff  = () => import('@/views/staff/index.vue')  // 员工信息
const Salary  = () => import('@/views/salary/index.vue') // 工资管理
const Reset  = () => import('@/views/reset/index.vue') // 重置密码

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/home',
    component: Home,
    redirect: '/home/chart',
    children: [
      { path: 'chart', component: Chart },
      { path: 'section', component: Sections },
      { path: 'staff', component: Staff },
      { path: 'salary', component: Salary },
      { path: 'reset', component: Reset }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
