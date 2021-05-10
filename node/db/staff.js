// 引入mongoose
const mongoose = require('mongoose')

require('./common')


const StaffSchema = mongoose.Schema({
  staffid: String,
  sectionid: String,
  name: String,
  age: Number,
  gender: Number,
  salary: Number,
  job: String,
  base: Number,
  extra: Number,
  overtime: Number,
  fullmonth: Number,
  eatandlive: Number,
  transportation:Number,
})

const StaffModel = mongoose.model('staff', StaffSchema)

module.exports = StaffModel
