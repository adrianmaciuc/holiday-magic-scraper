const { defineConfig } = require('cypress')
const nodemailer = require('nodemailer')
require('dotenv').config()

const baseUrl = process.env.BASE_URL

module.exports = defineConfig({
	e2e: {
		baseUrl: baseUrl,
		specPattern: '**/specs/*.spec.js',
		supportFile: 'cypress/support/index.js',
		defaultCommandTimeout: 15000,
    
		setupNodeEvents(on, config) {
			on('task', {

				sendEmail(price) {
					var transporter = nodemailer.createTransport({
						service: 'gmail',
						auth: {
						  user: 'Bugghunter69@gmail.com',
						  pass: 'bugHunter#23'
						}
					  });
					  
					  var mailOptions = {
						from: 'holidayMagic@magic.com',
						to: 'adrian.maciuc@gmail.com',
						subject: 'Price for holiday',
						text: `
						Destination = 'Kalimera Kriti'\n
						Transport type = 'Avion'\n
						Departure from = 'Cluj-Napoca'\n
						Nr Of Nights = '7'\n
						Date Of Departure = '07.09.2023'\n
						Nr Of Rooms = '1'\n
						Nr Of Adults = '2'\n
						Nr Of Kids = '2'\n\n
						PRICE: ${price} EURO`
					  };
					  
					  transporter.sendMail(mailOptions, function(error, info){
						if (error) {
						  console.log(error);
						} else {
						  console.log('Email sent: ' + info.response);
						}
					  });
		
				  return null
				},
			  })
		},
	},

	env: {
		USERNAME: process.env.USERNAME,
		PASSWORD: process.env.PASSWORD,
	},
    
	screenshotsFolder: 'cypress/screenshots',
	videosFolder: 'cypress/videos',
	viewportWidth: 1280,
	viewportHeight: 720,
	videoUploadOnPasses: false,
	video: false,
	retries: 1,
	scrollBehavior: 'center',
     
})
