var express = require('express');
var router = express.Router();


const { login, isAuth } = require('../controls/user')

// 用户登录
router.post('/login', login)

module.exports = router
