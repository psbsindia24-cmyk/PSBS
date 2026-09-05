const multer = require("multer");

// Store file in memory before uploading to GridFS
const storage = multer.memoryStorage();

// Allowed MIME types
const allowedMimeTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

// File filter
const fileFilter = (req, file, cb) => {
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only PDF (.pdf), Word (.doc), and Word (.docx) files are allowed."
      ),
      false
    );
  }
};

// Multer upload middleware
const upload = multer({
  storage,

  fileFilter,

  limits: {
    fileSize: 15 * 1024 * 1024, // 15 MB
  },
});

module.exports = upload;