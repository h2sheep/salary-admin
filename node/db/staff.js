// 引入mongoose
const mongoose = require('mongoose')

require('./common')


const StaffSchema = mongoose.Schema({
  name: String,
  age: Number,
  gender: Number,
  section: String, 
  salary: Number,
  job: String
})

module.exports = StaffSchema
