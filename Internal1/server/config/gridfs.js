//server/config/gridfs.js
const mongoose = require("mongoose");
const { GridFSBucket } = require("mongodb");

let gridFSBucket;

/**
 * Initialize GridFS Bucket
 * Call this once after MongoDB connection is established.
 */
const initializeGridFS = () => {
  const db = mongoose.connection.db;

  if (!db) {
    throw new Error("MongoDB connection is not established.");
  }

  gridFSBucket = new GridFSBucket(db, {
    bucketName: "insights",
  });

  console.log("✅ GridFS initialized successfully.");
};

/**
 * Get GridFS Bucket instance
 */
const getGridFSBucket = () => {
  if (!gridFSBucket) {
    throw new Error("GridFS has not been initialized.");
  }

  return gridFSBucket;
};

module.exports = {
  initializeGridFS,
  getGridFSBucket,
};