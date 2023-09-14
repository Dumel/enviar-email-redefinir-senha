
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,  
    auth: {
        user: 'genimacedooliveira@outlook.com',
        pass: '@A4h6c3%',
    }
});

transport.sendMail({
    from: 'Manual do Dev<genimacedooliveira@outlook.com>',
    to: 'melquisedequeolariodejesus177@gmail.com',
    subject: 'Enviando email com nodemailer',
    html: '<h1>Olá, Dev!</h1> <p>Esse email foi enviado usando Nodemailer</p>',
    text: 'Olá, Dev! Esse email foi enviado usando Nodemailer',
})
.then(()=> console.log('email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar o email: ',err));