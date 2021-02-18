var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 跨域
const cors = require('cors')

const usersRouter = require('./routes/users');
const sectionsRouter = require('./routes/sections')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 跨域
app.use(cors())

app.use('/users', usersRouter)
app.use('/sections', sectionsRouter)

module.exports = app;
