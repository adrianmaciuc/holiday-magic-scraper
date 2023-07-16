## Main Idea
**Imagine you have 2 dates of the year that you know when you can take holiday. And you know exactly where you want to go but you just want to be notified by email, on a DAILY basis (with a cron-job), what is the price of the holiday based on your specific criteria**

This script will help you get that data for **FREE** from one of Romania's leading holiday services providers Christian Tour and sends it to your email. Start by following the instructions below to configure the email sending functionality:

1. You can use your Gmail account for sending emails, for free. If you haven't already, enable two-step verification for your account by visiting: [Google Account Security](https://myaccount.google.com/security).

2. Generate an application-specific password for the script to log in to your Gmail account programmatically. To create an application-specific password, go to: [Google App Passwords](https://myaccount.google.com/apppasswords).

   - Select "SELECT APP" and choose "Other" (custom name).
   - Provide a random name for the application (e.g., "nodemailer").
   - The system will generate a unique password for you.

3. Store the generated password securely in your secrets or environment file as `MAIL_PASS = 'secretCodeNoSpaceNeeded'`.

4. Customize the search parameters by editing the values in the `run.spec.js` file according to your desired holiday criteria.

5. You can choose how many dates you want as long as they are valid and you actually have a flight that day . Just add the same format the date in the array of `datesOfDeparture`. It will iterate and send as many emails as dates are set.

6. Schedule your cron job from `\scrape_holiday\.github\workflows\node.yml` - by default is set every day at 12 noon time (UTC Time)