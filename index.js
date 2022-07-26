const express = require('express');
const nodemailer = require('nodemailer')
require('dotenv').config();

const app = express();

app.use(express.json());

app.post('/', function (request, response) {
  console.log(request.body);      // your JSON
  sendMail(request.body)
  response.send(request.body);    // echo the result back
});

app.listen(3000);

const sendMail = async (options) => {
  console.log('sending from:', "betcoin.sup@gmail.com", 'sending to:', options.to)

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "betcoin.sup@gmail.com",
      pass: process.env.SMTP_CLIENT_PASSWORD
    }
  })
  console.log("process.env.SMTP_CLIENT_PASSWORD", process.env.SMTP_CLIENT_PASSWORD)

  var mailOptions = {
    from: "betcoin.sup@gmail.com",
    to: options.to,
    subject: options.subject,
    // text: options.text,
    html: options.html
  }

  return await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
}

