// // src/controllers/vcard.controller.js

// const Employee = require("../models/Employee");
// const { generateVCard } = require("../services/vcard.service");

// const downloadVCard = async (req, res, next) => {
//   try {
//     const { slug } = req.params;

//     const employee = await Employee.findOne({
//       slug,
//       active: true,
//     });

//     if (!employee) {
//       return res.status(404).json({
//         success: false,
//         message: "Employee not found",
//       });
//     }

//     const vCard = generateVCard(employee);

//     // Return VCF with proper headers
//     res.setHeader("Content-Type", "text/vcard; charset=utf-8");

//     // Allow compatible browsers/devices to open the contact directly
//     res.setHeader(
//       "Content-Disposition",
//       `inline; filename="${employee.slug}.vcf"`
//     );

//     // Prevent caching so updated contact details are always served
//     res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
//     res.setHeader("Pragma", "no-cache");
//     res.setHeader("Expires", "0");

//     return res.status(200).send(vCard);
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = {
//   downloadVCard,
// };



// src/controllers/vcard.controller.js

const Employee = require("../models/Employee");
const { generateVCard } = require("../services/vcard.service");

const downloadVCard = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const employee = await Employee.findOne({
      slug,
      active: true,
    });

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    const vCard = generateVCard(employee);

    // IANA-registered MIME type for vCard, explicit UTF-8 so names/company
    // names with accented characters render correctly everywhere.
    res.setHeader("Content-Type", "text/vcard; charset=utf-8");

    // "attachment" (not "inline") is the more reliable choice across
    // mobile browsers for triggering the native contact-save UI:
    //  - iOS Safari: intercepts .vcf and opens "Add Contact" regardless
    //    of inline/attachment — already worked fine either way.
    //  - Android Chrome / Samsung Internet: with "inline", some versions
    //    render the raw vCard text as a plain-text page instead of
    //    downloading it. "attachment" forces a real file download, which
    //    Android then lets the user open with Contacts via the download
    //    notification — the best behavior these browsers support.
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${employee.slug}.vcf"`
    );

    // Ensures updated employee details are never served from a stale
    // browser/proxy cache.
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.setHeader("Pragma", "no-cache"); // HTTP/1.0 proxy compatibility
    res.setHeader("Expires", "0");       // legacy proxy compatibility

    // Stops browsers/older Android WebViews from MIME-sniffing the body
    // and treating it as text/plain instead of respecting Content-Type.
    res.setHeader("X-Content-Type-Options", "nosniff");

    // Lets mobile "save contact" handlers/download managers show accurate
    // progress instead of guessing the size.
    res.setHeader("Content-Length", Buffer.byteLength(vCard, "utf8"));

    return res.status(200).send(vCard);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  downloadVCard,
};