//server/models/Insight.js
const mongoose = require("mongoose");

const insightSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["blog", "article", "legal"],
      lowercase: true,
    },

    summary: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    publishedDate: {
      type: Date,
      required: true,
    },

    readTime: {
      type: String,
      default: "3 min",
    },

    fileId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    mimeType: {
      type: String,
      required: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Insight", insightSchema);