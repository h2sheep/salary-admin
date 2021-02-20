const { incSectionCount, decSectionCount } = require("../models/section")
const { addOne, getAll, deleteOne, updateOne } = require("../models/staff")
const { OK } = require("../routes/status")
const { success } = require("../utils")


// 添加员工
const addStaff = async (req, res) => {
  const { sectionid, name, age, gender, salary, job } = req.body
  const nowTime = new Date().getTime()

  try {
    const staff = {
      staffid: 'stf' + nowTime,
      sectionid,
      name,
      age: age * 1,
      gender: gender * 1,
      salary: salary * 1,
      job
    }
    await addOne(staff)
    await incSectionCount(sectionid)

    res.send(success(OK, staff))
  } catch (e) {
    console.log(e)
  }
}

// 获取所有员工
const getStaff = async (req, res) => {
  const { sectionid } = req.query

  try {
    const result = await getAll(sectionid)
    res.send(success(OK, result))
  } catch (e) {
    console.log(e)
  }
}

// 删除部员
const deleteStaff = async (req, res) => {
  const { sectionid, staffid } = req.body

  try {
    const result = await deleteOne(staffid)
    console.log(result)
    // 删除成功
    if (result) {
      // 数量减1
      const result2 = await decSectionCount(sectionid)
      console.log(result2)
      res.send(success(OK))
    }
  } catch (e) {
    console.log(e)
  }
}


// 更改信息
const updateStaff = async (req, res) => {
  const { staffid, sectionid, name, age, gender, salary, job } = req.body

  try {
    await updateOne(staffid, { 
      sectionid, 
      name, 
      age: age * 1, 
      gender: gender * 1, 
      salary: salary * 1, 
      job 
    })
    res.send(success(OK))
  } catch (e) {
    console.log(e)
  }
}

exports.addStaff = addStaff
exports.getStaff = getStaff
exports.deleteStaff = deleteStaff
exports.updateStaff = updateStaff