const mongoose = require("mongoose")

exports.mongoINIT = (async ()=>{
	await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true , useUnifiedTopology : true })
})

