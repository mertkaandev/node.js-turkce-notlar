const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'seninepostaadresin@outlook.com',
    pass: 'seninepostaşifren'
  }
});

const mail = {
  from: 'seninepostaadresin@outlook.com',
  to: 'epostagöndereceğinadres@outlook.com',
  subject: 'Node.js',
  text: 'Node.js ile Mail Gönderiyoruz'
};

transporter.sendMail(mail, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});