const SectionModel = require('../db/section')

// 添加新部门
const addOne = (section) => {
  return SectionModel.create(section)
}

// 获取所有部门
const getAll = () => {
  return SectionModel.find({}, { _id: 0, __v: 0, expenditure: 0 })
}

// 修改部门名称
const updateName = (sectionid, name) => {
  return SectionModel.updateOne({ sectionid }, { name })
}

// 删除一个部门
const deleteOne = (sectionid) => {
  return SectionModel.deleteOne({ sectionid })
}

// 改变部门信息值
const incSectionInfo = (sectionid, condition) => {
  return SectionModel.updateOne({ sectionid }, {
    '$inc': condition
  })
}

// 图表数据
const getChartInfo = () => {
  return SectionModel.find({}, { name: 1, expenditure: 1, _id: 0 })
}


exports.addOne = addOne
exports.getAll = getAll
exports.updateName = updateName
exports.deleteOne = deleteOne

exports.incSectionInfo = incSectionInfo
exports.getChartInfo = getChartInfo