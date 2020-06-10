var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var title = "Our Home Page";
  res.render('pages/index',{
    title:title,
  });
module.exports = router;
