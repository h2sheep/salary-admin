const { addOne, getAll, updateOne, deleteOne } = require("../models/section")
const { OK, NO_EXIST } = require("../routes/status")
const { success } = require("../utils")

// 添加部门
const addSection = async (req, res) => {
  const { name, count } = req.body

  const section = {
    name,
    count: count * 1
  }

  try {
    const result = await addOne(section)

    res.send(success(OK, {
      _id: result._id,
      name: result.name,
      count: result.count
    }))
  } catch (e) {
    console.log(e)
  }
}

// 获取部门
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
  const { sectionid, name, count } = req.body

  try {
    await updateOne(sectionid, { name, count })
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
    result ? res.send(success(OK)) : res.send(success(NO_EXIST, '不存在该数据'))
  } catch (e) {
    console.log(e)
  }
}


exports.addSection = addSection
exports.getSections = getSections
exports.updateSection = updateSection
exports.deleteSection = deleteSection
