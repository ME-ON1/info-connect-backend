const nodemailer = require("nodemailer")
const ejs = require("ejs");
const fs =  require("fs")
const path = require("path")
async function sendHelper(userData) {

	try {

		const transporter = nodemailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			auth: {
				user: MAIL_ID,
				pass: MAIL_PASS
			}
		});
		const dir = path.join(__dirname, "../views/template.ejs")
		console.log(dir)
		const htmlRender = await ejs.renderFile(dir)
		console.log(htmlRender) ;
		const info =  await transporter.sendMail({
			from : OWNER_MAIL,
			to : userData.email ,
			subject : "Updates in InfoConnect" ,
			html : htmlRender
		})

		return info ;
	}catch(er) {
		console.log(er)
		throw er ;
	}

}
module.exports = sendHelper
