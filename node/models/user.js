const UsersModel = require('../db/user')


// 创建一个用户
const createOne = (user) => {
  return UsersModel.create(user)
}

// 登录查询用户
const findOneSp = (username) => {
  return UsersModel.findOne({ username }, { _id: 0, __v: 0 })
}

// 根据条件查询用户
const findOne = (condition) => {
  return UsersModel.findOne(condition, { _id: 0, __v: 0, password: 0 })
}

// 修改用户信息
const updateOne = (userid, condition) => {
  return UsersModel.updateOne({ userid }, condition)
}


exports.createOne = createOne
exports.findOneSp = findOneSp
exports.findOne = findOne
exports.updateOne = updateOne

