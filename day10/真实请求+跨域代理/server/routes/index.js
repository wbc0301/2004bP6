var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/list', function (req, res, next) {
    let data = require('../public/list.json');
    res.send({ code: 0, msg: '成功', data })
});
router.get('/login', function (req, res, next) {
    let { username, password } = req.query
    if (password === 'admin') {
        res.send({ code: 0, msg: '登录成功！', username: username })
    } else {
        res.send({ code: 1, msg: '密码错误！', username: '' })
    }
});

module.exports = router;
