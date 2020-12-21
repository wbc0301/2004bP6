var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api/test', function (req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin', '*')   
    res.send({ code: 0, msg: '端口: 3001的服务 您的请求成功了！！' })
});

module.exports = router;
