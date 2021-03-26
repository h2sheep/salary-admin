const StaffModel = require("../db/staff")


// 添加员工
const addOne = (staff) => {
  return StaffModel.create(staff)
}

// 获取员工
const getAll = (sectionid) => {
  if (sectionid) {
    return StaffModel.find({ sectionid }, { _id: 0, __v: 0 })
  } else {
    return StaffModel.find({}, { _id: 0, __v: 0 })
  }
}

// 删除某个员工
const deleteOne = (staffid) => {
  return StaffModel.findOneAndDelete({ staffid })
}

// 删除某个部门所有的员工
const deleteMany = (sectionid) => {
  return StaffModel.deleteMany({ sectionid })
}

// 获取某个员工
const findOne = (staffid) => {
  return StaffModel.findOne({ staffid })
}

// 修改某个员工信息
const updateOne = (staffid, staff) => {
  return StaffModel.findOneAndUpdate({ staffid }, staff)
}

exports.addOne = addOne
exports.getAll = getAll
exports.deleteOne = deleteOne
exports.deleteMany = deleteMany
exports.findOne = findOne
exports.updateOne = updateOne