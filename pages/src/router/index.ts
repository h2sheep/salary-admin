import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const Login = () => import('@/views/user/Login.vue')
const Admin = () => import('@/views/admin/Admin.vue')
const Chart  = () => import('@/views/charts/Chart.vue') 
const Sections  = () => import('@/views/sections/Sections.vue') 
const Staff  = () => import('@/views/staff/Staff.vue') 
const Salary  = () => import('@/views/salary/Salary.vue') 
const Update  = () => import('@/views/user/Update.vue') 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: Admin,
    redirect: '/admin/chart',
    children: [
      { path: 'chart', component: Chart },
      { path: 'section', component: Sections },
      { path: 'staff', component: Staff },
      { path: 'salary', component: Salary },
      { path: 'update', component: Update }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
