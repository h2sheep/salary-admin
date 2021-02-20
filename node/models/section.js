const SectionModel = require('../db/section')

// 添加新部门
const addOne = (section) => {
  return SectionModel.create(section)
}

// 获取所有部门
const getAll = () => {
  return SectionModel.find({}, { _id: 0, __v: 0 })
}

// 修改部门名称
const updateName = (sectionid, name) => {
  return SectionModel.updateOne({ sectionid }, { name })
}

// 删除一个部门
const deleteOne = (sectionid) => {
  return SectionModel.deleteOne(({ sectionid }))
}

// 添加部门员工数量
const incSectionCount = (sectionid) => {
  return SectionModel.updateOne({ sectionid }, {
    '$inc': {
      count: 1
    }
  })
}

// 减少部门员工数量
const decSectionCount = (sectionid) => {
  return SectionModel.updateOne({ sectionid }, {
    '$inc': {
      count: -1
    }
  })
}


exports.addOne = addOne
exports.getAll = getAll
exports.updateName = updateName
exports.deleteOne = deleteOne

exports.incSectionCount = incSectionCount
exports.decSectionCount = decSectionCount