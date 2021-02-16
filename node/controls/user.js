
const UserModel = require('../models/user')
const { OK, QUERY_ERROR, NO_EXIST } = require('../routes/status')
const { success, getToken, checkToken } = require('../utils')


// 登录
const login = async (req, res) => {

  const { username, password } = req.body
  // 先查询是否有该用户
  const result = await UserModel.findOne(username)

  if (result) {
    // 如果存在用户 验证密码是否正确
    if (result.password === password) {
      // 生成token并放在响应头中
      res.set({
        'Authorization': getToken(result.username),
        'Access-Control-Expose-Headers': 'Authorization'  // 浏览器只能获取默认字段
      })
      res.send(success(OK, {
        uid: result.id
      }))
    } else {
      res.send(success(QUERY_ERROR, '用户名或密码不正确'))
    }
  } else {
    res.send(success(NO_EXIST, '该用户不存在'))
  }
}


// 判断是否登录
const isAuth = (req, res, next) => {
  const token = req.get('Authorization')
  try {
    checkToken(token)
    next()
  } catch (e) { // 未登录就直接返回
    res.send(success(1300, '未登录'))
  }
}


exports.login = login
exports.isAuth = isAuth