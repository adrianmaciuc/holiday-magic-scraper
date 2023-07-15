This little script will help you receive in your email data scraped from one of Romanians top holiday services provider

To get started you have to configure the sending of email part:
Use your gmail account to send emails. First enable 2 step verification https://myaccount.google.com/security
Then go to https://myaccount.google.com/apppasswords and choose SELECT APP -> Other (custom name) -> give it a random name (eg: nodemailer)
This will generate a password for you that you can use for nodemailer to login programmatic to your account to send emails.
Put that password in your secrets/env file under MAIL_PASS = 'secretCodeNoSpaceNeeded'

Then you can edit the values in the run.spec.js if you want different holiday to search for