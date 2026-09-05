//server/services/insight.service.js
const Insight = require("../models/Insight");
const fileService = require("./file.service");

/**
 * Calculate approximate reading time from summary
 */
const calculateReadTime = (text = "") => {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min`;
};

/**
 * Create Insight
 */
const createInsight = async (data, file) => {
  if (!file) {
    throw new Error("Document is required.");
  }

  // Upload document to GridFS
  const uploadedFile = await fileService.uploadFile(file);

  // Save metadata
  const insight = await Insight.create({
    title: data.title,
    category: data.category,
    summary: data.summary,
    author: data.author,
    publishedDate: data.publishedDate,
    readTime: calculateReadTime(data.summary),

    fileId: uploadedFile.fileId,
    fileName: uploadedFile.fileName,
    mimeType: uploadedFile.mimeType,

    isFeatured: data.isFeatured === "true" || data.isFeatured === true,
    isActive: true,
  });

  return insight;
};

/**
 * Get All Insights
 */
const getAllInsights = async () => {
  return await Insight.find({ isActive: true }).sort({
    createdAt: -1,
  });
};

/**
 * Get Insight By ID
 */
const getInsightById = async (id) => {
  const insight = await Insight.findById(id);

  if (!insight) {
    throw new Error("Insight not found.");
  }

  return insight;
};

/**
 * Update Insight
 */
const updateInsight = async (id, data, file) => {
  const insight = await Insight.findById(id);

  if (!insight) {
    throw new Error("Insight not found.");
  }

  // Replace document if a new one is uploaded.
  // Upload the new file FIRST, then delete the old one only after the
  // new upload succeeds, so the existing file is never lost on failure.
  if (file) {
    const uploadedFile = await fileService.uploadFile(file);
    const oldFileId = insight.fileId;

    insight.fileId = uploadedFile.fileId;
    insight.fileName = uploadedFile.fileName;
    insight.mimeType = uploadedFile.mimeType;

    await fileService.deleteFile(oldFileId);
  }

  insight.title = data.title ?? insight.title;
  insight.category = data.category ?? insight.category;
  insight.summary = data.summary ?? insight.summary;
  insight.author = data.author ?? insight.author;
  insight.publishedDate = data.publishedDate ?? insight.publishedDate;

  insight.readTime = calculateReadTime(insight.summary);

  if (typeof data.isFeatured !== "undefined") {
    insight.isFeatured = data.isFeatured === "true" || data.isFeatured === true;
  }

  await insight.save();

  return insight;
};

/**
 * Delete Insight
 */
const deleteInsight = async (id) => {
  const insight = await Insight.findById(id);

  if (!insight) {
    throw new Error("Insight not found.");
  }

  // Delete file from GridFS
  await fileService.deleteFile(insight.fileId);

  // Delete MongoDB document
  await insight.deleteOne();

  return {
    message: "Insight deleted successfully.",
  };
};

module.exports = {
  createInsight,
  getAllInsights,
  getInsightById,
  updateInsight,
  deleteInsight,
};