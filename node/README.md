# 记录

> 敲代码时发现思路有些不明确了  记录一下

## express

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
  * count = 0
  * expenditure = 0


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

#### 用户功能

##### 注册

* post
* username password nickname
* 查询是否注册过 -> 生成userid -> 返回ok

##### 登录

* post
* username password
* 查询是否存在用户 -> 对比密码 -> 返回token ok

##### 修改密码

* patch
* userid newpassword
* 根据userid找到用户 -> 修改密码 -> 返回ok

#### 部门功能

##### 添加

* post 请求
* 参数：name
* count默认为0 根据员工个数变化
* 返回新的部门信息
  * sectionid
  * name
  * count

##### 修改

* patch
* 参数：sectionid, name
* 只让修改name
* 返回 ok

##### 删除

* 删除部门同时所有部员也删掉

#### 员工功能

##### 获取

* 根据sectionid查询员工
* 没有id返回全部员工

##### 添加员工

* 生成staffid并添加员工 -> 根据sectionid找到部门 -> 部门count++, expenditure+

##### 删除员工

* 根据staffid删除员工 -> 根据sectionid找到部门 -> 部门count--, 总支出减少？ 否

##### 修改员工信息

* 根据staffid找到员工 -> 更改员工信息

#### 图表

##### 柱状图

* 查找所有部门信息 只获取name expenditure
