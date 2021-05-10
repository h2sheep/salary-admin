const { incSectionInfo } = require("../models/section")
const { addOne, getAll, deleteOne, findOne, updateOne } = require("../models/staff")
const { OK } = require("../routes/status")
const { success } = require("../utils")


// 添加员工
const addStaff = async (req, res) => {
  const { sectionid, name, age, gender, job } = req.body
  const nowTime = new Date().getTime()

  try {
    const staff = {
      staffid: 'stf' + nowTime,
      sectionid,
      name,
      age: age * 1,
      gender: gender * 1,
      job,
      salary: 0,
      base: 0,
      extra: 0,
      overtime: 0,
      fullmonth: 0,
      eatandlive: 0,
      transportation: 0,
      holiday: 0
    }
    await addOne(staff)
    await incSectionInfo(sectionid, {
      count: 1,
      expenditure: staff.salary
    })

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

    // 删除成功
    if (result) {
      // 数量减1
      const result2 = await incSectionInfo(sectionid, {
        count: -1
      })
      res.send(success(OK))
    }
  } catch (e) {
    console.log(e)
  }
}


// 更改员工基本信息
const updateStaff = async (req, res) => {
  const staff = req.body

  try {

    // 原来的员工信息
    const preStaff = await findOne(staff.staffid)

    const sum = staff.base * 1 + staff.extra * 1 + staff.overtime * 1 + staff.fullmonth * 1 + staff.eatandlive * 1 + staff.transportation * 1
    
    // 更新员工信息
    const newStaff = await updateOne(staff.staffid, { 
      sectionid: staff.sectionid,
      age: staff.age * 1,
      gender: staff.gender * 1,
      job: staff.job,
      base: staff.base * 1,
      extra: staff.extra * 1,
      overtime: staff.overtime * 1,
      fullmonth: staff.fullmonth * 1,
      eatandlive: staff.eatandlive * 1,
      transportation: staff.transportation * 1,
      salary: sum,
    })
    
    if (preStaff.salary !== sum) {
      await incSectionInfo(staff.sectionid, {
        expenditure: sum - preStaff.salary
      })
    }
    
    console.log('当前员工', newStaff)

    res.send(success(OK))
  } catch (e) {
    console.log(e)
  }
}


exports.addStaff = addStaff
exports.getStaff = getStaff
exports.deleteStaff = deleteStaff
exports.updateStaff = updateStaff