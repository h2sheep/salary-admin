var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// history模式
const history = require('connect-history-api-fallback')

// 跨域
const cors = require('cors')

// 管理员路由
const usersRouter = require('./routes/users')
// 部门路由
const sectionsRouter = require('./routes/sections')
// 员工路由
const staffRouter = require('./routes/staff')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// history 放在静态目录前
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

// 跨域
app.use(cors())

app.use('/users', usersRouter)
app.use('/sections', sectionsRouter)
app.use('/staff', staffRouter)

module.exports = app
