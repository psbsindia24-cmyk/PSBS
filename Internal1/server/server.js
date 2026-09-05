// //server/server.js
// require("dotenv").config();

// const app = require("./app");
// const { verifyMailer } = require("./config/mail");

// const PORT = process.env.PORT || 5000;

// (async () => {
//     try {

//         await verifyMailer();

//         app.listen(PORT, () => {
//             console.log(`🚀 Server running on port ${PORT}`);
//         });

//     } catch (err) {

//         console.error("Server Startup Failed");
//         console.error(err);

//         process.exit(1);

//     }
// })();



require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");
const { verifyMailer } = require("./config/mail");

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB();

    await verifyMailer();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Server Startup Failed");
    console.error(err);

    process.exit(1);
  }
})();