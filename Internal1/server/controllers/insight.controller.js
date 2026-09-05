//server/controllers/insight.controller.js
const insightService = require("../services/insight.service");
const fileService = require("../services/file.service");

/**
 * Create Insight
 */
const createInsight = async (req, res) => {
  try {
    const insight = await insightService.createInsight(req.body, req.file);

    return res.status(201).json({
      success: true,
      message: "Insight created successfully.",
      data: insight,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get All Insights
 */
const getAllInsights = async (req, res) => {
  try {
    const insights = await insightService.getAllInsights();

    return res.status(200).json({
      success: true,
      count: insights.length,
      data: insights,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get Single Insight
 */
const getInsightById = async (req, res) => {
  try {
    const insight = await insightService.getInsightById(req.params.id);

    return res.status(200).json({
      success: true,
      data: insight,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Update Insight
 */
const updateInsight = async (req, res) => {
  try {
    const insight = await insightService.updateInsight(
      req.params.id,
      req.body,
      req.file
    );

    return res.status(200).json({
      success: true,
      message: "Insight updated successfully.",
      data: insight,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Delete Insight
 */
const deleteInsight = async (req, res) => {
  try {
    const response = await insightService.deleteInsight(req.params.id);

    return res.status(200).json({
      success: true,
      ...response,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Download Document
 */
const downloadInsight = async (req, res) => {
  try {
    const insight = await insightService.getInsightById(req.params.id);

    const stream = await fileService.downloadFile(insight.fileId);

    res.set({
      "Content-Type": insight.mimeType,
      "Content-Disposition": `attachment; filename="${insight.fileName}"`,
    });

    stream.pipe(res);

    stream.on("error", () => {
      return res.status(500).json({
        success: false,
        message: "Unable to download document.",
      });
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createInsight,
  getAllInsights,
  getInsightById,
  updateInsight,
  deleteInsight,
  downloadInsight,
};