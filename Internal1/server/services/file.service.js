//server/services/file.service.js
const { ObjectId } = require("mongodb");
const { getGridFSBucket } = require("../config/gridfs");

/**
 * Upload file to GridFS
 */
const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    try {
      const bucket = getGridFSBucket();

      const uploadStream = bucket.openUploadStream(file.originalname, {
        contentType: file.mimetype,
      });

      uploadStream.end(file.buffer);

      uploadStream.on("finish", () => {
        resolve({
          fileId: uploadStream.id,
          fileName: uploadStream.filename,
          mimeType: file.mimetype,
        });
      });

      uploadStream.on("error", (err) => reject(err));
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Download file from GridFS
 */
const downloadFile = async (fileId) => {
  const bucket = getGridFSBucket();

  return bucket.openDownloadStream(new ObjectId(fileId));
};

/**
 * Delete file from GridFS
 */
const deleteFile = async (fileId) => {
  const bucket = getGridFSBucket();

  return bucket.delete(new ObjectId(fileId));
};

module.exports = {
  uploadFile,
  downloadFile,
  deleteFile,
};