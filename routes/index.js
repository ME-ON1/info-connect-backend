var express = require('express');
var router = express.Router();
const {handlePostData, sendEmail} = require("../controller/subs-backend/user")

/* GET home page. */
router.get('/', function(req, res, next) {
	res.status(200).json({
		"status" : "running"
	})
});

router.post("/post", handlePostData) ;
router.get("/sendmail" , sendEmail )
module.exports = router;
