"use strict"

const nodemailer = require('nodemailer')

module.exports = function sendMail(to, subject, message) {

//! GoogleMail - (gmail) : 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gmutluayyigit@gmail.com',
        pass: 'xzcx vwtz szdh gzkn'
    }
})

//! sendmail: 
transporter.sendMail({
    from: 'gmutluayyigit@gmail.com', 
    to: to,
    subject: subject,
    text: message,
    html: message

}, function(error, success) {
    success ? console.log('SUCCESS:', success) : console.log('ERROR:', error)
})
}