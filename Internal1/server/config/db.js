// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);

//     console.log("✅ MongoDB Connected");
//   } catch (err) {
//     console.error("❌ MongoDB Connection Failed");
//     console.error(err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");
const { initializeGridFS } = require("./gridfs");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");

    // Initialize GridFS
    initializeGridFS();

    console.log("✅ GridFS Ready");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed");
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;