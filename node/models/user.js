const UsersModel = require('../db/user')

// 根据条件查询用户
const findOne = (condition) => {
  return UsersModel.findOne(condition)
}

// 根据id查询用户
const findById = (uid) => {
  return UsersModel.findById(uid, '-password -_id -__v')
}

//  添加用户
const signup = (user) => {
  return UsersModel.create(user)
}

// 删除用户
const removeUSer = (uid) => {
  return UsersModel.findByIdAndRemove(uid)
}

exports.findOne = findOne
exports.findById = findById
exports.signup = signup
exports.removeUSer = removeUSer

