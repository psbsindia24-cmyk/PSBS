// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");

// const contactRoutes = require("./routes/contact.routes");

// const app = express();

// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//   })
// );

// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.get("/health", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "PSBS Backend Running",
//     environment: process.env.NODE_ENV,
//     timestamp: new Date().toISOString(),
//   });
// });

// app.use("/api/contact", contactRoutes);

// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route Not Found",
//   });
// });

// app.use((err, req, res, next) => {
//   console.error(err);

//   res.status(err.status || 500).json({
//     success: false,
//     message:
//       process.env.NODE_ENV === "production"
//         ? "Internal Server Error"
//         : err.message,
//   });
// });

// module.exports = app;

// //server/app.js
// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");

// const contactRoutes = require("./routes/contact.routes");
// const vcardRoutes = require("./routes/vcard.routes");

// const app = express();

// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//   })
// );

// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true }));

// app.get("/health", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "PSBS Backend Running",
//     environment: process.env.NODE_ENV,
//     timestamp: new Date().toISOString(),
//   });
// });

// app.use("/api/contact", contactRoutes);

// // VCard Routes
// app.use("/api/vcard", vcardRoutes);

// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route Not Found",
//   });
// });

// app.use((err, req, res, next) => {
//   console.error(err);

//   res.status(err.status || 500).json({
//     success: false,
//     message:
//       process.env.NODE_ENV === "production"
//         ? "Internal Server Error"
//         : err.message,
//   });
// });

// module.exports = app;


//server/app.js

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact.routes");
const vcardRoutes = require("./routes/vcard.routes");
const insightRoutes = require("./routes/insight.routes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PSBS Backend Running",
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/contact", contactRoutes);

app.use("/api/vcard", vcardRoutes);

app.use("/api/insights", insightRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message,
  });
});

module.exports = app;