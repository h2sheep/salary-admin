const jwt = require("jsonwebtoken")
const { get } = require("mongoose")
const PK = 'h2sheep'

// 接口返回数据
const success = (code, data) => {
  return {
    code,
    data: code === 0 ? data : [data],
    message: 'ok'
  }
}


// 生成token
const getToken = (uid) => {
  const token = jwt.sign({ uid }, PK)
  return token
}

// 验证token
const checkToken = (token) => {
  const result = jwt.verify(token, PK)
  return result
}


exports.success = success
exports.getToken = getToken
exports.checkToken = checkToken