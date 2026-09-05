const express = require("express");

const {
    sendContact,
} = require("../controllers/contact.controller");

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Send Contact Form Email
 * @access  Public
 */
router.post("/", sendContact);

module.exports = router;