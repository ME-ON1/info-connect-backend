var mongoose = require("mongoose")

var Subscriber = new mongoose.Schema({
	name : {
		type : String ,
		required : true
	},
	batch : {
		type : Number  ,
		required : true
	},
	email : {
		type : String ,
		required : true,
		unique : true
	},
	unsubsribe : {
		type : Boolean ,
		default : false
	}
})

module.exports = mongoose.model('Subscribers', Subscriber) ;
