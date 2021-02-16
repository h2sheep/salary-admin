// 引入mongoose
const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://127.0.0.1/salary-admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('连接成功。'))
  .catch(err => console.log('连接失败。'))


