var express = require('express')
var router = express.Router()


const { signin, login, isAuth, getUserInfo, updatePassword } = require('../controls/user')


// 注册
router.post('/signin', signin)

// 用户登录
router.post('/login', login)

// 获取用户信息
router.get('/info', isAuth, getUserInfo)

// 修改密码
router.patch('/reset', isAuth, updatePassword)

module.exports = router
