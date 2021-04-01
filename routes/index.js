var express = require('express');
var router = express.Router();
const {handlePostData} = require("../controller/subs-backend/user")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/post", handlePostData) ;

module.exports = router;
