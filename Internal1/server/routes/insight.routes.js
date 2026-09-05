//server/routes/insight.routes.js
const express = require("express");

const router = express.Router();

const upload = require("../middlewares/upload.middleware");
const insightController = require("../controllers/insight.controller");

/**
 * Create Insight
 * Upload PDF / DOC / DOCX
 */
router.post(
  "/",
  upload.single("document"),
  insightController.createInsight
);

/**
 * Get All Insights
 */
router.get("/", insightController.getAllInsights);

/**
 * Get Single Insight
 */
router.get("/:id", insightController.getInsightById);

/**
 * Download Insight Document
 */
router.get("/:id/download", insightController.downloadInsight);

/**
 * Update Insight
 * Optional new document upload
 */
router.put(
  "/:id",
  upload.single("document"),
  insightController.updateInsight
);

/**
 * Delete Insight
 */
router.delete("/:id", insightController.deleteInsight);

module.exports = router;