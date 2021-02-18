var express = require('express')
var router = express.Router()


const { login, isAuth, getAdminAccount, getUserInfo, removeUser } = require('../controls/user')

// 获取管理员账号
router.get('/get', getAdminAccount)

// 用户登录
router.post('/login', login)

// 返回用户信息
router.get('/info', isAuth, getUserInfo)

// 删除用户
router.delete('/delete', removeUser)

module.exports = router
