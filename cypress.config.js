const { defineConfig } = require('cypress')
require('dotenv').config()
const sendMagic = require('./mailer')

module.exports = defineConfig({
	e2e: {
		baseUrl: process.env.BASE_URL,
		specPattern: '**/*.spec.js',
		supportFile: 'support.js',
		defaultCommandTimeout: 15000,
    
		setupNodeEvents(on, config) {
			on('task', {
				sendEmail(price) {
					sendMagic(price)
				return null
				}
			  })
		},
	},

	videoUploadOnPasses: false,
	video: false,
	retries: 1,
	scrollBehavior: 'center',  
})
