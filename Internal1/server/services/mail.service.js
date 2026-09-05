const { transporter } = require("../config/mail");

const sendContactMail = async ({ name, email, message }) => {
    try {
        if (!name || !email || !message) {
            throw new Error("All fields are required.");
        }

      const mailOptions = {
    from: `"PSBS Consulting" <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO,
    replyTo: email,

            subject: `📩 New Contact Enquiry from ${name}`,

            text: `
New Contact Enquiry

Name: ${name}

Email: ${email}

Message:
${message}
            `,

            html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body{
font-family:Arial,Helvetica,sans-serif;
background:#f4f6f9;
padding:30px;
}

.container{
max-width:650px;
margin:auto;
background:#ffffff;
border-radius:8px;
overflow:hidden;
box-shadow:0 2px 10px rgba(0,0,0,.1);
}

.header{
background:#0f172a;
color:#fff;
padding:20px;
text-align:center;
}

.content{
padding:30px;
}

.table{
width:100%;
border-collapse:collapse;
}

.table td{
padding:12px;
border-bottom:1px solid #eee;
}

.footer{
padding:20px;
text-align:center;
background:#f8fafc;
font-size:12px;
color:#777;
}
</style>
</head>

<body>

<div class="container">

<div class="header">
<h2>PSBS Consulting</h2>
<p>New Website Enquiry</p>
</div>

<div class="content">

<table class="table">

<tr>
<td><strong>Name</strong></td>
<td>${name}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${email}</td>
</tr>

<tr>
<td><strong>Message</strong></td>
<td>${message}</td>
</tr>

</table>

</div>

<div class="footer">

This enquiry was submitted through the PSBS website.

</div>

</div>

</body>

</html>
`
        };

// Send email to company (Mandatory)
const info = await transporter.sendMail(mailOptions);

// Send auto reply to user (Optional)
try {
  await transporter.sendMail({
    from: `"PSBS Consulting" <${process.env.MAIL_FROM}>`,
    to: email,
    replyTo: process.env.MAIL_TO,

        subject: "We've received your enquiry | PSBS Consulting",

        html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body{
    font-family:Arial,Helvetica,sans-serif;
    background:#f4f6f9;
    padding:30px;
}
.container{
    max-width:650px;
    margin:auto;
    background:#ffffff;
    border-radius:8px;
    overflow:hidden;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
}
.header{
    background:#0f172a;
    color:#fff;
    padding:25px;
    text-align:center;
}
.content{
    padding:30px;
    color:#333;
    line-height:1.8;
}
.footer{
    background:#f8fafc;
    padding:20px;
    text-align:center;
    font-size:12px;
    color:#666;
}
.button{
    display:inline-block;
    margin-top:20px;
    padding:12px 24px;
    background:#0f172a;
    color:#fff !important;
    text-decoration:none;
    border-radius:6px;
}
</style>
</head>

<body>

<div class="container">

<div class="header">
<h2>PSBS Consulting</h2>
<p>Thank you for contacting us</p>
</div>

<div class="content">

<p>Dear <strong>${name}</strong>,</p>

<p>
Thank you for reaching out to <strong>PSBS Consulting</strong>.
</p>

<p>
We have successfully received your enquiry. Our team is currently reviewing your message and will get back to you as soon as possible.
</p>

<p>
Our usual response time is <strong>24–48 business hours</strong>.
</p>

<p>
This is an automated acknowledgement email, so no further action is required from your side.
</p>

<p>
Kind Regards,<br>
<b>PSBS Consulting Team</b>
</p>

</div>

<div class="footer">
© ${new Date().getFullYear()} PSBS Consulting. All Rights Reserved.
</div>

</div>

</body>
</html>
        `,
    });

    console.log("✅ Auto reply sent successfully.");

} catch (autoReplyError) {

    console.error("⚠️ Auto reply failed:", autoReplyError.message);

    // Ignore auto reply failure.
    // Company mail has already been delivered.
}

return {
    success: true,
    message: "Email sent successfully.",
    messageId: info.messageId,
};

    } catch (error) {

        console.error("Mail Service Error:", error);

        throw new Error(error.message || "Unable to send email.");

    }
};

module.exports = {
    sendContactMail,
};