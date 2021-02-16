
// 引入mongoose
const mongoose = require('mongoose')

require('./common')


// 创建一个user schema
const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  level: Number,
})

// 用户集合
const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel