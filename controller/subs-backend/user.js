const SubsModel = require("../../model/subscriber")
const sendHelper = require("../../helper/mail")

exports.handlePostData = async (req,res,next)=> {
	const {email , name , batch } = req.body

	const userData = {
		email ,
		name ,
		batch
	}

	try {
		let user = await SubsModel.find({email : email}) ;

		if(user.length !== 0) {
			return res.status(500).json("Already a user !! ")
		}
		const newuser = await SubsModel.create(userData) ;
		return res.status(200).json({status : "OK" , newuser })
	}catch(err) {
		console.log(err)
		throw next(err)
	}
}

exports.sendEmail = async (req, res, next )=> {

	let users = await SubsModel.find({}) ;
	console.log(users)
	const promise = [] ;
	users.map(async (val, index ) =>{
		promise.push(sendHelper(val))
	})

	Promise.all(promise).then((res)=>{
		console.log(promise)
		console.log("is this happening",res )
		//return res.json("runned")
	})
	.catch(err => console.log("beep bop bip ", err))

	return res.json("cop")
}
