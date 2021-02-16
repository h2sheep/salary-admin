const jwt = require("jsonwebtoken")
const { get } = require("mongoose")
const pk = 'h2sheep'

// 接口返回数据
const success = (code, data) => {
  return {
    code,
    data: code === 0 ? data : [data],
    message: 'ok'
  }
}


// 生成token
const getToken = (username) => {
  const token = jwt.sign({ username }, pk)
  return token
}

// 验证token
const checkToken = (token) => {
  const result = jwt.verify(token, pk)
  return result
}


exports.success = success
exports.getToken = getToken
exports.checkToken = checkToken