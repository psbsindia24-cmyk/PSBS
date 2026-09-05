const { sendContactMail } = require("../services/mail.service");

const sendContact = async (req, res, next) => {
    try {

      const { name, email, message } = req.body || {};

if (!name || !email || !message) {
  return res.status(400).json({
    success: false,
    message: "Name, email and message are required.",
  });
}

        // Basic Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Email Validation
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email address."
            });
        }

        const result = await sendContactMail({
            name: name.trim(),
            email: email.trim().toLowerCase(),
            message: message.trim()
        });

        return res.status(200).json({
            success: true,
            message: result.message
        });

    } catch (error) {

        next(error);

    }
};

module.exports = {
    sendContact
};