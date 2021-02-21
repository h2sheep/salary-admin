var express = require('express')
const { addSection, updateSection, getSections, deleteSection, getSectionChart } = require('../controls/section')
var router = express.Router()


const { isAuth } = require('../controls/user')

router.get('/get', isAuth, getSections)

router.get('/chart', getSectionChart)

router.post('/add', isAuth, addSection)

router.patch('/update', isAuth, updateSection)

router.delete('/delete', isAuth, deleteSection)

module.exports = router