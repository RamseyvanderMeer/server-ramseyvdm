require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ramseyvdm0@gmail.com',
        pass: 'Playbal1'
    },
    tls:{
        rejectUnauthorized: false
    }
});

// Step 2
let mailOptions = {
    from: 'ramseyvdm0@gmail.com', // TODO: email sender
    to: '799549@seq.org', // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log(err);
    }
    return log('Email sent!!!');
});