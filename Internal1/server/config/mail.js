const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const verifyMailer = async () => {
    await transporter.verify();
    console.log("✅ SMTP Connected Successfully");
};

module.exports = {
    transporter,
    verifyMailer,
};