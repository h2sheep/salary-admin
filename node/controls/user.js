
const UserModel = require('../models/user')
const { OK, QUERY_ERROR, NO_EXIST, HAS_EXIST } = require('../routes/status')
const { success, getToken, checkToken } = require('../utils')
const path = require('path')
const fs = require('fs')


// 登录
const login = async (req, res) => {

  const { username, password } = req.body
  // 先查询是否有该用户
  const result = await UserModel.findOne({username})

  // 已经存在
  if (result) {
    // 验证密码是否正确
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
  } 

  // 用户不存在
  else {
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


// 获取管理员账号
const getAdminAccount = async (req, res) => {
  const result = await UserModel.findOne({username: 'admin'})

  // 个人设计 就固定成一个账号吧 = =
  const user = {
    username: 'admin',
    password: 'admin',
    level: 0,
    avatar: 'http://localhost:3000/img/avatar.jpg'
  }

  // 如果已经注册
  if (result) res.send(success(OK, user))

  // 未注册
  else {
    try {
      await UserModel.signup(user)
      res.send(success(OK, user))
    } catch (e) {
      console.log(e)
    }
  }
}


// 获取用户信息
const getUserInfo = async (req, res) => {
  const uid = req.query.uid
  try {
    const user = await UserModel.findById(uid)
    res.send(success(OK, user))
  } catch (e) {
    console.log(e)
  }
}

// 删除账号
const removeUser = async (req, res) => {
  const uid = req.body.uid
  try {
    const result = await UserModel.removeUSer(uid)
    res.send(success(OK, result))
  } catch (e) {
    console.log(e)
  }
}

exports.getAdminAccount = getAdminAccount
exports.login = login
exports.isAuth = isAuth
exports.getUserInfo = getUserInfo
exports.removeUser = removeUser