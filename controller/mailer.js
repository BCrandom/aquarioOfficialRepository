const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

async function sendEmail(to, subject, message) {
    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to,
            subject,
            html: message,
        });
        console.log("Correo enviado a:", to);
    } catch (error) {
        console.error("Error al enviar correo:", error);
    }
}

module.exports = sendEmail;