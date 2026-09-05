// const generateVCard = (employee) => {
//   return `BEGIN:VCARD
// VERSION:3.0
// FN:${employee.name}
// ORG:${employee.company}
// TEL:${employee.phone}
// EMAIL:${employee.email}
// END:VCARD`;
// };

// module.exports = {
//   generateVCard,
// };



// src/services/vcard.service.js

/**
 * Escapes a single vCard property value per RFC 6350 §3.4.
 * Backslashes, commas, and semicolons must be escaped; embedded
 * newlines become literal "\n" sequences (not real CRLF, which
 * would break line-unfolding on the receiving device).
 */
function escapeVCardValue(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r\n|\r|\n/g, "\\n");
}

/**
 * Folds a single logical vCard line to comply with the RFC 6350 §3.2
 * recommendation that lines SHOULD NOT exceed 75 octets. Continuation
 * lines start with a single space, per spec. Defensive measure for
 * long company names / titles / URLs.
 */
function foldLine(line) {
  const MAX_OCTETS = 75;
  const bytes = Buffer.from(line, "utf8");

  if (bytes.length <= MAX_OCTETS) return line;

  const chunks = [];
  let start = 0;

  while (start < bytes.length) {
    const limit = start === 0 ? MAX_OCTETS : MAX_OCTETS - 1;
    let end = Math.min(start + limit, bytes.length);

    // Never split in the middle of a multi-byte UTF-8 sequence.
    while (end < bytes.length && (bytes[end] & 0xc0) === 0x80) {
      end -= 1;
    }

    chunks.push(bytes.slice(start, end).toString("utf8"));
    start = end;
  }

  return chunks.join("\r\n ");
}

/**
 * Builds a single "PROPERTY:value" line and folds it.
 * Returns null for empty/undefined values so optional fields
 * are cleanly omitted rather than emitted blank.
 */
function buildLine(propertyWithParams, rawValue) {
  if (!rawValue) return null;
  const escaped = escapeVCardValue(rawValue);
  return foldLine(`${propertyWithParams}:${escaped}`);
}

/**
 * Splits a single "name" string into vCard N components
 * (Family;Given;Additional;Prefix;Suffix). Only Family/Given
 * are populated — this model stores just a full name, so we
 * do a best-effort split rather than assuming structure that
 * doesn't exist in the schema.
 */
function splitName(fullName) {
  const parts = String(fullName || "").trim().split(/\s+/);
  if (parts.length === 0 || (parts.length === 1 && parts[0] === "")) {
    return { given: "", family: "" };
  }
  if (parts.length === 1) {
    return { given: parts[0], family: "" };
  }
  const family = parts[parts.length - 1];
  const given = parts.slice(0, -1).join(" ");
  return { given, family };
}

/**
 * Generates an RFC 6350-compliant vCard (version 3.0) for an employee.
 *
 * Reads only the fields that actually exist on the current Employee
 * model: name, company, phone, email. `title` and `website` are read
 * defensively (employee.title / employee.website) and simply omitted
 * if not present — no schema change required either way.
 *
 * WHY VERSION 3.0 (not 4.0):
 * Native "Add Contact" flows in iOS Contacts, Android Contacts, and
 * Samsung Contacts still parse 3.0-style TEL/ORG syntax most reliably.
 * UTF-8 is used directly with no CHARSET param (that's a 2.1-only
 * construct), which gives the broadest real-world compatibility.
 */
function generateVCard(employee) {
  const fullName = employee.name || "Unknown";
  const { given, family } = splitName(fullName);

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    buildLine("FN", fullName),
    `N:${escapeVCardValue(family)};${escapeVCardValue(given)};;;`,
    buildLine("ORG", employee.company),
    buildLine("TITLE", employee.title), // omitted if not present on the doc
    buildLine("TEL;TYPE=WORK,VOICE", employee.phone),
    buildLine("EMAIL;TYPE=INTERNET", employee.email),
    buildLine("URL", employee.website), // omitted if not present on the doc
    employee._id ? buildLine("UID", String(employee._id)) : null,
    buildLine("REV", new Date().toISOString()),
    "END:VCARD",
  ].filter(Boolean);

  // RFC 6350 §3.1 mandates CRLF line endings, regardless of host OS.
  return lines.join("\r\n") + "\r\n";
}

module.exports = { generateVCard };