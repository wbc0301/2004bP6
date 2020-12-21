var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/test', function(req, res, next) {
  res.send({code: 0, msg:'端口3000 的服务，您的请求成功了！！'})
});

module.exports = router;
