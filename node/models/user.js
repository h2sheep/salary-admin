const UsersModel = require('../db/user')

const findOne = (username) => {
  return UsersModel.findOne({username})
}

const login = ({ username, password }) => {

}

// const signup = ({ username, password }) => {
//   // 添加一条管理员文档
//   UserModel.create({
//     username: username,
//     password: password,
//     level: 0
//   })
// }


exports.findOne = findOne

