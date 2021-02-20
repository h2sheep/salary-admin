
const UserModel = require('../models/user')
const { OK, QUERY_ERROR, NO_EXIST, LOG_IN } = require('../routes/status')
const { success, getToken, checkToken } = require('../utils')


// 注册
const signin = async (req, res) => {
  const { nickname, username, password } = req.body

  // 先查询是否存在用户
  const isExist = await UserModel.findOne({ username })
  // 如果存在直接返回
  if (isExist) return res.send(success(HAS_EXIST, '已经注册过该用户'))

  // 如果不存在则创建该用户
  const nowTime = new Date().getTime()
  const user = {
    userid: 'user' + nowTime,
    nickname,
    username,
    password
  }

  try {
    const result = await UserModel.createOne(user)
    res.send(success(OK, result))
  } catch (e) {
    console.log(e)
  }
}

// 登录
const login = async (req, res) => {
  const { username, password } = req.body

  try {
    // 先查询是否有该用户
    const result = await UserModel.findOne({ username })
    // 不存在直接返回
    if (!result) res.send(success(NO_EXIST, '该用户不存在'))

    // 如果密码不正确直接返回
    if (result.password !== password) return res.send(success(QUERY_ERROR, '用户名或密码不正确'))

    // 生成token并放在响应头中
    res.set({
      'Authorization': getToken(result.id),
      'Access-Control-Expose-Headers': 'Authorization'  // 浏览器只能获取默认字段
    })
    res.send(success(OK, { uid: result.id }))
  } catch (e) {
    console.log(e)
  }
}

// 判断是否登录
const isAuth = (req, res, next) => {
  const token = req.get('Authorization')
  try {
    checkToken(token)
    next()
  } catch (e) { // 未登录就直接返回
    res.send(success(LOG_IN, '需要登录'))
  }
}

// 获取用户信息
const getUserInfo = async (req, res) => {
  const userid = req.query.uid

  try {
    const user = await UserModel.findOne({ userid })
    res.send(success(OK, user))
  } catch (e) {
    console.log(e)
  }
}

// 修改密码
const updatePassword = async (req, res) => {
  const { uid, password } = req.body

  try {
    await UserModel.updateOne(uid, { password })
    res.send(success(LOG_IN, '需要登录'))
  } catch (e) {
    console.log(e)
  }
}

exports.signin = signin
exports.login = login
exports.isAuth = isAuth
exports.getUserInfo = getUserInfo
exports.updatePassword = updatePassword