import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

export const sendVerificationEmail = (email, token) => {
    console.log(email)
    const verificationLink = `http://localhost:${process.env.PORT}/api/verify?token=${token}`;
    resend.emails.send({
        from: process.env.EMAIL_HOST,
        to: [email],
        subject: 'Verifica tu correo',
        html: `Por favor, verifica tu correo haciendo clic en <a href="${verificationLink}">este enlace</a>`,
    }).then((result) => {
        console.log('Correo enviado:', result);
    }).catch((error) => {
        console.error('Error al enviar el correo:', error);
    });
};