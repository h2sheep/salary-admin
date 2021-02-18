// 引入mongoose
const mongoose = require('mongoose')

require('./common')

const StaffSchema = require('./staff')

const SectionSchemal = mongoose.Schema({
  name: String,
  count: Number,
  staff: [StaffSchema]
})

const SectionModel = mongoose.model('section', SectionSchemal)

module.exports = SectionModel