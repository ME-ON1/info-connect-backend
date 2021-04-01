const SubsModel = require("../../model/subscriber")
//const sendHelper = require("../helper/mail")

exports.handlePostData = async (req,res,next)=> {
	const {email , name , batch } = req.body

	const userData = {
		email ,
		name ,
		batch
	}
	console.log(userData)

	try {
		let user = await SubsModel.find({email : email}) ;

		if(user.length !== 0) {
			return res.status(401).json("Already a user !! ")
		}
		const newuser = await SubsModel.create(userData) ;
		return res.status(200).json({status : "OK" , newuser })
	}catch(err) {
		conosle.log(err)
		throw next(err)
	}
}

//exports.sendEmail = async (update)=> {
	//let users = await SubsModel.find({}) ;
	//console.log(users)
	//users.forEach(async (val, index ) =>{
		//let mailReturned = await sendHelper(val) ;

		//console.log(mailReturned);
	//})
	//console.log("let's see this")
//}
