### 记录



#### 设计数据集合


##### 用户

> 实际上也只设置了一个账号

* user：管理员
  * username：用户名
  * password：密码
  * level：等级
  * avatar: 头像



##### 部门

> 部门应该和管理员没关系 平级关系
> 部门包括员工 不同部门有自己的员工 所以部门应该是员工的父级

* section
  * sectionid
  * name
  * count

###### 员工

* staff：每位员工
  * name：姓名
  * age：年龄
  * tel：电话
  * gender：性别
  * section：部门
  * job：职位
  * salary：工资