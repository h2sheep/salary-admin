var express = require('express')
var router = express.Router()

const { isAuth } = require('../controls/user')
const { addStaff, getStaff, deleteStaff, updateStaff } = require('../controls/staff')

router.get('/get', isAuth, getStaff)

router.post('/add', isAuth, addStaff)
router.post('/update', isAuth, updateStaff)

router.delete('/delete', isAuth, deleteStaff)


module.exports = router