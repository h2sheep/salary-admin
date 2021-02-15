var express = require('express');
var router = express.Router();


// 用户登录
router.post('/login', (req, res, next) => {
  res.send('login')
});

module.exports = router;
