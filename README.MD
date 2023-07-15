**Email Data Scraping Script for Romanian Top Holiday Services Provider**

This script will help you get data from one of Romania's leading holiday services providers and sends it to your email. Start by following the instructions below to configure the email sending functionality:

1. You can use your Gmail account for sending emails, for free. If you haven't already, enable two-step verification for your account by visiting: [Google Account Security](https://myaccount.google.com/security).

2. Generate an application-specific password for the script to log in to your Gmail account programmatically. To create an application-specific password, go to: [Google App Passwords](https://myaccount.google.com/apppasswords).

   - Select "SELECT APP" and choose "Other" (custom name).
   - Provide a random name for the application (e.g., "nodemailer").
   - The system will generate a unique password for you.

3. Store the generated password securely in your secrets or environment file as `MAIL_PASS = 'secretCodeNoSpaceNeeded'`.

4. Customize the search parameters by editing the values in the `run.spec.js` file according to your desired holiday criteria.
