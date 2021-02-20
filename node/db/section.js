// 引入mongoose
const mongoose = require('mongoose')

require('./common')

const SectionSchemal = mongoose.Schema({
  sectionid: String,
  name: String,
  count: Number,
})

const SectionModel = mongoose.model('section', SectionSchemal)

module.exports = SectionModel