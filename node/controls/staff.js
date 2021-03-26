const { incSectionInfo } = require("../models/section")
const { addOne, getAll, deleteOne, findOne, updateOne } = require("../models/staff")
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


// 更改信息
const updateStaff = async (req, res) => {
  const { staffid, sectionid, name, age, gender, salary, job } = req.body

  try {
    // 先找到当前员工
    const staff = await findOne(staffid)

    console.log('当前员工', staff)

    // 如果改变了薪水就要更改部门支出
    if (staff.salary !== salary * 1) {
      await incSectionInfo(sectionid, {
        expenditure: salary * 1 - staff.salary
      })
    }

    // 更新员工信息
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