# 记录

## vue3.0 ts

### 设计思路

#### 列表选项

* 部门管理
* 员工管理
* 工资管理
* 报表统计
* 修改密码

#### 功能

##### 拦截器

* 请求拦截添加token
* 响应拦截
  * 未登录跳转登录页
  * 保存token

##### 登录注册

* 注册后切到登录页
* 登录后切到首页

##### 路由

* 默认跳转首页路由
* 首页路由默认跳转部门管理子路由

##### Vuex

* 单向数据/事件流
* CRUD -> actionType -> dispatch -> commit -> state -> cpn -> CRUD

##### 图表

* 柱状图
  * x: 部门
  * y：总支付工资

## 个人博客 <https://h2sheep.gitee.io/>
