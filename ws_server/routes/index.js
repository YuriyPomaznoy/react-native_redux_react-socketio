var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('<h1>Hello World!</h1>');
});
router.get('/get-hrefs/:prof/:topic', require('./get/getHrefs'));

module.exports = router;