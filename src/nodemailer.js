const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'edwina27@ethereal.email',
        pass: 'd8uh8HbaedPnzWC8GC'
    },
});

 const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
};

 export default mailer()
