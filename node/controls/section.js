const { addOne, getAll, updateName, deleteOne, getChartInfo } = require("../models/section")
const { deleteMany } = require("../models/staff")
const { OK, NO_EXIST } = require("../routes/status")
const { success } = require("../utils")

// 添加新部门
const addSection = async (req, res) => {
  const { name } = req.body
  const nowTime = new Date().getTime()

  const section = {
    sectionid: 'st' + nowTime,
    name,
    count: 0,
    expenditure: 0
  }

  try {
    await addOne(section)
    res.send(success(OK, section))
  } catch (e) {
    console.log(e)
  }
}

// 获取所有部门信息
const getSections = async (req, res) => {
  try {
    const result = await getAll()
    res.send(success(OK,result))
  } catch (e) {
    console.log(e)
  }
}

// 修改部门信息
const updateSection = async (req, res) => {
  const { sectionid, name } = req.body

  console.log(sectionid, name)

  try {
    await updateName(sectionid, name)
    res.send(success(OK))
  } catch (e) {
    console.log(e)
  }
}

// 删除一个部门
const deleteSection = async (req, res) => {
  const { sectionid } = req.body

  try {
    const result = await deleteOne(sectionid)
    // 删除成功
    if (result) {
      // 删除部门员工
      await deleteMany(sectionid)
      res.send(success(OK))
    }
  } catch (e) {
    console.log(e)
  }
}

// 获取部门图表数据
const getSectionChart = async (req, res) => {
  try {
    const result = await getChartInfo()
    res.send(success(OK, result))
  } catch (e) {
    console.log(e)
  }
}

exports.addSection = addSection
exports.getSections = getSections
exports.updateSection = updateSection
exports.deleteSection = deleteSection
exports.getSectionChart = getSectionChart
