const SectionModel = require('../db/section')

// 添加一个部门
const addOne = (section) => {
  return SectionModel.create(section)
}

// 获取所有部门
const getAll = () => {
  return SectionModel.find({}, { staff: 0, __v: 0 })
}

// 修改一个部门信息
const updateOne = (sectionid, section) => {
  return SectionModel.findByIdAndUpdate(sectionid, section)
}

// 删除一个部门
const deleteOne = (sectionid) => {
  return SectionModel.findByIdAndRemove(sectionid)
}

exports.addOne = addOne
exports.getAll = getAll
exports.updateOne = updateOne
exports.deleteOne = deleteOne