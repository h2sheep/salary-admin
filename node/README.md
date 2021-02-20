## 记录

> 敲代码时发现思路有些不明确了  记录一下

### 设计数据集合


#### 用户

* user：管理员
  * userid：唯一id
  * username：用户名
  * password：密码
  * nickname：昵称

#### 部门

* section
  * sectionid
  * name
  * count

#### 员工

* staff：每位员工
  * staffid: 根据时间生成唯一id
  * sectionid：根据部门id来联系部门
  * name：姓名
  * age：年龄
  * gender：性别 enum
  * job：职位 enum
  * salary：工资


### CRUD


#### 用户

##### 注册

* post
* username password nickname
* 查询是否注册过 -> 生成userid -> 返回ok

##### 登录

* post
* username password
* 查询是否存在用户 -> 对比密码 -> 返回token

##### 修改密码

* patch
* userid newpassword
* 根据userid找到用户 -> 修改密码 -> 返回1300需要登录

#### 部门

##### 添加部门

* post 请求
* 参数：name
* count默认为0 根据员工个数变化
* 返回新的部门信息

##### 修改部门信息

* patch 请求
* 参数：sectionid, name
* 只让修改name
* 返回 ok

##### 删除部门

* 删除部门同时所有部员也删掉

##### 获取员工

* 根据sectionid查询员工
* 没有id返回全部员工

##### 添加员工

* 生成staffid并添加员工 -> 根据sectionid找到部门 -> 部门count++

##### 删除员工

* 根据staffid删除员工 -> 根据sectionid找到部门 -> 部门count--

##### 修改员工信息

* 根据staffid找到员工 -> 更改员工信息