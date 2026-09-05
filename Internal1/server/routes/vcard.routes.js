// src/routes/vcard.routes.js

const express = require("express");

const router = express.Router();

const { downloadVCard } = require("../controllers/vcard.controller");

// Download Employee VCF
router.get("/:slug", downloadVCard);

module.exports = router;