const nodemailer = require('nodemailer');
require('dotenv').config()

const sendMagic = (data) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: `${data.emailUsedToSend}`,
            pass: process.env.MAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: `${data.emailUsedToSend}`,
        to: `${data.sendResultsTo}`,
        subject: `Price for holiday - ${data.finalPrice} eur`,
        html: `<html>
        Destination = ${data.destination}<br>
        Departure from = ${data.departureFrom}<br>
        Date Of Departure = ${data.dateOfDeparture}<br>
        Nr Of Rooms = ${data.nrOfRooms}<br>
        Nr Of Adults = ${data.nrOfAdults}<br><br>
        PRICE: <strong>${data.finalPrice}</strong> EURO
        </html>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
        console.log('Success email has been sent');
    });

}

module.exports = sendMagic