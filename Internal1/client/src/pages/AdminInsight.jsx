// // client/src/pages/AdminInsight.jsx
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import {
//   getAllInsights,
//   createInsight,
//   deleteInsight,
//   downloadInsight,
// } from "../api/insightApi";

// /**
//  * AdminInsight.jsx
//  *
//  * Internal content-management page for PSBS.
//  * Managers upload Blogs / Articles / Legal Updates here instead of
//  * touching code. Thought.jsx will later fetch this data from
//  * GET /api/insights and render it publicly.
//  *
//  * Single-file page. Same Header/Footer as the rest of the site.
//  * Dark, corporate, minimal, premium — matches existing theme.
//  */

// const CATEGORY_OPTIONS = [
//   { label: "Blog", value: "blog" },
//   { label: "Article", value: "article" },
//   { label: "Legal Update", value: "legal" },
// ];

// const ACCENT = "text-cyan-400";
// const CARD_BASE =
//   "rounded-xl bg-neutral-900/80 backdrop-blur-sm border border-white/10 shadow-lg";

// const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];
// const ACCEPTED_MIME = [
//   "application/pdf",
//   "application/msword",
//   "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
// ];

// const EMPTY_FORM = {
//   category: "blog",
//   title: "",
//   author: "",
//   publishedDate: "",
//   summary: "",
//   isFeatured: false,
// };

// const categoryLabel = (cat) => {
//   const found = CATEGORY_OPTIONS.find((c) => c.value === cat);
//   return found ? found.label : cat;
// };

// export default function AdminInsight() {
//   // ---- list state ----
//   const [insights, setInsights] = useState([]);
//   const [listLoading, setListLoading] = useState(true);

//   // ---- form state ----
//   const [form, setForm] = useState(EMPTY_FORM);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [formError, setFormError] = useState("");
//   const fileInputRef = useRef(null);

//   // ---- delete confirmation state ----
//   const [pendingDeleteId, setPendingDeleteId] = useState(null);
//   const [deletingId, setDeletingId] = useState(null);

//   // ---- toast state ----
//   const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }
//   const toastTimerRef = useRef(null);

//   const showToast = (type, message) => {
//     if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
//     setToast({ type, message });
//     toastTimerRef.current = setTimeout(() => setToast(null), 3500);
//   };

//   useEffect(() => {
//     return () => {
//       if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
//     };
//   }, []);

//   // ---- fetch insights ----
//   const fetchInsights = async () => {
//     setListLoading(true);
//     try {
//       const res = await getAllInsights();
//       setInsights(res?.data || []);
//     } catch (err) {
//       showToast("error", "Failed to load insights.");
//     } finally {
//       setListLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchInsights();
//   }, []);

//   // ---- form helpers ----
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const isValidFile = (file) => {
//     if (!file) return false;
//     const nameOk = ACCEPTED_EXTENSIONS.some((ext) =>
//       file.name.toLowerCase().endsWith(ext)
//     );
//     const mimeOk = ACCEPTED_MIME.includes(file.type) || file.type === "";
//     return nameOk && mimeOk;
//   };

//   const applyFile = (file) => {
//     if (!file) return;
//     if (!isValidFile(file)) {
//       setFormError("Only PDF, DOC or DOCX files are supported.");
//       return;
//     }
//     setFormError("");
//     setSelectedFile(file);
//   };

//   const handleFileInput = (e) => {
//     applyFile(e.target.files?.[0]);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     applyFile(e.dataTransfer.files?.[0]);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//   };

//   const resetForm = () => {
//     setForm(EMPTY_FORM);
//     setSelectedFile(null);
//     setFormError("");
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const validateForm = () => {
//     if (!form.title.trim()) return "Title is required.";
//     if (!form.author.trim()) return "Author is required.";
//     if (!form.summary.trim()) return "Summary is required.";
//     if (!form.publishedDate) return "Published date is required.";
//     if (!selectedFile) return "Please attach a PDF, DOC or DOCX document.";
//     return "";
//   };

//   const handleSubmit = async () => {
//     const validationError = validateForm();
//     if (validationError) {
//       setFormError(validationError);
//       return;
//     }

//     setFormError("");
//     setSubmitting(true);

//     try {
//       const payload = new FormData();
//       payload.append("title", form.title.trim());
//       payload.append("category", form.category);
//       payload.append("summary", form.summary.trim());
//       payload.append("author", form.author.trim());
//       payload.append("publishedDate", form.publishedDate);
//       payload.append("isFeatured", form.isFeatured);
//       payload.append("document", selectedFile);

//       await createInsight(payload);

//       showToast("success", "Insight published successfully.");
//       resetForm();
//       fetchInsights();
//     } catch (err) {
//       const message =
//         err?.response?.data?.message || "Failed to publish insight.";
//       showToast("error", message);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // ---- delete flow ----
//   const confirmDelete = (id) => setPendingDeleteId(id);
//   const cancelDelete = () => setPendingDeleteId(null);

//   const handleDelete = async () => {
//     if (!pendingDeleteId) return;
//     const id = pendingDeleteId;
//     setDeletingId(id);
//     try {
//       await deleteInsight(id);
//       showToast("success", "Insight deleted.");
//       setInsights((prev) => prev.filter((i) => i._id !== id));
//     } catch (err) {
//       showToast("error", "Failed to delete insight.");
//     } finally {
//       setDeletingId(null);
//       setPendingDeleteId(null);
//     }
//   };

//   const handleDownload = (id) => {
//     downloadInsight(id);
//   };

//   const displayDate = (item) => {
//     const raw = item.publishedDate || item.createdAt;
//     if (!raw) return "-";
//     const d = new Date(raw);
//     return Number.isNaN(d.getTime()) ? "-" : d.toLocaleDateString();
//   };

//   const sortedInsights = useMemo(
//     () =>
//       [...insights].sort((a, b) => {
//         const da = new Date(a.createdAt || 0).getTime();
//         const db = new Date(b.createdAt || 0).getTime();
//         return db - da;
//       }),
//     [insights]
//   );

//   return (
//     <div className="min-h-screen bg-neutral-950 text-neutral-200">
//       <Header />

//       <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-28 pb-16 space-y-10">
//         {/* Hero */}
//         <div className="text-center space-y-3">
//           <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent drop-shadow">
//             Content Management
//           </h1>
//           <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
//             Publish Blogs, Articles and Legal Updates directly to the PSBS
//             insights feed — no code changes required.
//           </p>
//         </div>

//         {/* Upload form */}
//         <div className={`${CARD_BASE} p-5 sm:p-8 space-y-6`}>
//           <h2 className="text-lg font-bold text-white">Publish New Insight</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {/* Category */}
//             <div>
//               <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
//                 Category
//               </label>
//               <select
//                 name="category"
//                 value={form.category}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
//               >
//                 {CATEGORY_OPTIONS.map((opt) => (
//                   <option key={opt.value} value={opt.value}>
//                     {opt.label}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Title */}
//             <div>
//               <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={form.title}
//                 onChange={handleChange}
//                 placeholder="Enter insight title"
//                 className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
//               />
//             </div>

//             {/* Author */}
//             <div>
//               <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
//                 Author
//               </label>
//               <input
//                 type="text"
//                 name="author"
//                 value={form.author}
//                 onChange={handleChange}
//                 placeholder="Enter author name"
//                 className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
//               />
//             </div>

//             {/* Published Date */}
//             <div>
//               <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
//                 Published Date
//               </label>
//               <input
//                 type="date"
//                 name="publishedDate"
//                 value={form.publishedDate}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 [color-scheme:dark]"
//               />
//             </div>

//             {/* Summary */}
//             <div className="sm:col-span-2">
//               <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
//                 Summary
//               </label>
//               <textarea
//                 name="summary"
//                 value={form.summary}
//                 onChange={handleChange}
//                 rows={5}
//                 placeholder="Write a short summary of this insight"
//                 className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none"
//               />
//             </div>

//             {/* Feature checkbox */}
//             <div className="sm:col-span-2 flex items-center gap-2">
//               <input
//                 id="isFeatured"
//                 type="checkbox"
//                 name="isFeatured"
//                 checked={form.isFeatured}
//                 onChange={handleChange}
//                 className="w-4 h-4 rounded border-neutral-700 bg-neutral-900 accent-cyan-500"
//               />
//               <label htmlFor="isFeatured" className="text-sm text-neutral-300">
//                 Feature on Homepage
//               </label>
//             </div>

//             {/* Upload document */}
//             <div className="sm:col-span-2">
//               <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
//                 Upload Document
//               </label>
//               <div
//                 onDrop={handleDrop}
//                 onDragOver={handleDragOver}
//                 onDragLeave={handleDragLeave}
//                 onClick={() => fileInputRef.current?.click()}
//                 className={`cursor-pointer rounded-lg border-2 border-dashed px-6 py-8 text-center transition
//                   ${
//                     isDragging
//                       ? "border-cyan-400 bg-cyan-500/5"
//                       : "border-neutral-800 bg-neutral-900 hover:border-neutral-700"
//                   }`}
//               >
//                 <input
//                   ref={fileInputRef}
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   onChange={handleFileInput}
//                   className="hidden"
//                 />
//                 <p className="text-sm text-neutral-300">
//                   Drag &amp; drop your file here, or{" "}
//                   <span className={`${ACCENT} font-semibold`}>browse</span>
//                 </p>
//                 <p className="text-xs text-neutral-500 mt-1">
//                   Supports PDF, DOC, DOCX
//                 </p>
//                 {selectedFile && (
//                   <p className="mt-3 text-sm font-semibold text-cyan-400">
//                     Selected: {selectedFile.name}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>

//           {formError && (
//             <p className="text-sm text-red-400 font-medium">{formError}</p>
//           )}

//           <button
//             onClick={handleSubmit}
//             disabled={submitting}
//             className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/10 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
//           >
//             {submitting && (
//               <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
//             )}
//             {submitting ? "Publishing..." : "Publish"}
//           </button>
//         </div>

//         {/* Recently uploaded */}
//         <div className={`${CARD_BASE} p-5 sm:p-8`}>
//           <h2 className="text-lg font-bold text-white mb-5">
//             Recently Uploaded Insights
//           </h2>

//           {listLoading ? (
//             <div className="space-y-3">
//               {[...Array(4)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-12 rounded-lg bg-neutral-900 animate-pulse"
//                 />
//               ))}
//             </div>
//           ) : sortedInsights.length === 0 ? (
//             <p className="text-neutral-400 text-sm py-6 text-center">
//               No insights published yet.
//             </p>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full text-left text-sm min-w-[720px]">
//                 <thead>
//                   <tr className="text-neutral-400 border-b border-neutral-800">
//                     <th className="py-3 pr-4 font-semibold">Category</th>
//                     <th className="py-3 pr-4 font-semibold">Title</th>
//                     <th className="py-3 pr-4 font-semibold">Author</th>
//                     <th className="py-3 pr-4 font-semibold">Published Date</th>
//                     <th className="py-3 pr-4 font-semibold">Filename</th>
//                     <th className="py-3 pr-4 font-semibold text-right">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {sortedInsights.map((item) => (
//                     <tr
//                       key={item._id}
//                       className="border-b border-neutral-900 hover:bg-neutral-900/60 transition"
//                     >
//                       <td className="py-3 pr-4">
//                         <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 uppercase text-[10px] tracking-wide font-semibold">
//                           {categoryLabel(item.category)}
//                         </span>
//                       </td>
//                       <td className="py-3 pr-4 text-neutral-200 font-medium">
//                         {item.title}
//                       </td>
//                       <td className="py-3 pr-4 text-neutral-400">
//                         {item.author}
//                       </td>
//                       <td className="py-3 pr-4 text-neutral-400">
//                         {displayDate(item)}
//                       </td>
//                       <td className="py-3 pr-4 text-neutral-400 truncate max-w-[180px]">
//                         {item.fileName}
//                       </td>
//                       <td className="py-3 pr-4">
//                         <div className="flex items-center justify-end gap-3">
//                           <button
//                             onClick={() => handleDownload(item._id)}
//                             className="text-cyan-400 hover:underline font-semibold"
//                           >
//                             Download
//                           </button>
//                           <button
//                             onClick={() => confirmDelete(item._id)}
//                             disabled={deletingId === item._id}
//                             className="text-red-400 hover:underline font-semibold disabled:opacity-50"
//                           >
//                             {deletingId === item._id ? "Deleting..." : "Delete"}
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Delete confirmation modal */}
//       {pendingDeleteId && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
//           onClick={cancelDelete}
//         >
//           <div
//             className="w-full max-w-sm rounded-xl bg-neutral-950 border border-white/10 shadow-2xl p-6 space-y-5"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h3 className="text-lg font-bold text-white">Are you sure?</h3>
//             <p className="text-sm text-neutral-400">
//               This insight will be permanently deleted. This action cannot be
//               undone.
//             </p>
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={cancelDelete}
//                 className="px-4 py-2 rounded-lg text-sm font-semibold bg-neutral-900 text-neutral-300 border border-neutral-800 hover:bg-neutral-800"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-500"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Toast */}
//       {toast && (
//         <div
//           className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-lg shadow-2xl border text-sm font-semibold
//             ${
//               toast.type === "success"
//                 ? "bg-neutral-900 border-cyan-500/40 text-cyan-400"
//                 : "bg-neutral-900 border-red-500/40 text-red-400"
//             }`}
//         >
//           {toast.message}
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// }


// client/src/pages/AdminInsight.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  getAllInsights,
  createInsight,
  updateInsight,
  deleteInsight,
  downloadInsight,
} from "../api/insightApi";
import { Helmet } from "react-helmet-async";

/**
 * AdminInsight.jsx
 *
 * Internal content-management page for PSBS.
 * Managers upload Blogs / Articles / Legal Updates here instead of
 * touching code. Thought.jsx will later fetch this data from
 * GET /api/insights and render it publicly.
 *
 * Single-file page. Header/Footer are provided globally by App.jsx
 * and must NOT be imported or rendered here.
 * Dark, corporate, minimal, premium — matches existing theme.
 */

const CATEGORY_OPTIONS = [
  { label: "Blog", value: "blog" },
  { label: "Article", value: "article" },
  { label: "Legal Update", value: "legal" },
];

const ACCENT = "text-cyan-400";
const CARD_BASE =
  "rounded-xl bg-neutral-900/80 backdrop-blur-sm border border-white/10 shadow-lg";

const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const ACCEPTED_MIME = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const EMPTY_FORM = {
  category: "blog",
  title: "",
  author: "",
  publishedDate: "",
  summary: "",
  isFeatured: false,
};

const categoryLabel = (cat) => {
  const found = CATEGORY_OPTIONS.find((c) => c.value === cat);
  return found ? found.label : cat;
};

export default function AdminInsight() {
  // ---- list state ----
  const [insights, setInsights] = useState([]);
  const [listLoading, setListLoading] = useState(true);

  // ---- form state ----
  const [form, setForm] = useState(EMPTY_FORM);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const fileInputRef = useRef(null);

  // ---- edit mode state ----
  const [editingId, setEditingId] = useState(null);
  const formSectionRef = useRef(null);

  // ---- delete confirmation state ----
  const [pendingDeleteId, setPendingDeleteId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  // ---- toast state ----
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }
  const toastTimerRef = useRef(null);

  const showToast = (type, message) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ type, message });
    toastTimerRef.current = setTimeout(() => setToast(null), 3500);
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  // ---- fetch insights ----
  const fetchInsights = async () => {
    setListLoading(true);
    try {
      const res = await getAllInsights();
      setInsights(res?.data || []);
    } catch (err) {
      showToast("error", "Failed to load insights.");
    } finally {
      setListLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  // ---- form helpers ----
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isValidFile = (file) => {
    if (!file) return false;
    const nameOk = ACCEPTED_EXTENSIONS.some((ext) =>
      file.name.toLowerCase().endsWith(ext)
    );
    const mimeOk = ACCEPTED_MIME.includes(file.type) || file.type === "";
    return nameOk && mimeOk;
  };

  const applyFile = (file) => {
    if (!file) return;
    if (!isValidFile(file)) {
      setFormError("Only PDF, DOC or DOCX files are supported.");
      return;
    }
    setFormError("");
    setSelectedFile(file);
  };

  const handleFileInput = (e) => {
    applyFile(e.target.files?.[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    applyFile(e.dataTransfer.files?.[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setSelectedFile(null);
    setFormError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validateForm = () => {
    if (!form.title.trim()) return "Title is required.";
    if (!form.author.trim()) return "Author is required.";
    if (!form.summary.trim()) return "Summary is required.";
    if (!form.publishedDate) return "Published date is required.";
    // Document is required for new insights only. During edit, the
    // existing document stays unless the manager selects a new one.
    if (!editingId && !selectedFile) {
      return "Please attach a PDF, DOC or DOCX document.";
    }
    return "";
  };

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      setFormError(validationError);
      return;
    }

    setFormError("");
    setSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("title", form.title.trim());
      payload.append("category", form.category);
      payload.append("summary", form.summary.trim());
      payload.append("author", form.author.trim());
      payload.append("publishedDate", form.publishedDate);
      payload.append("isFeatured", form.isFeatured);

      // Only attach a document if one was actually selected. During
      // edit this is optional — the backend keeps the existing file
      // untouched when no "document" field is sent.
      if (selectedFile) {
        payload.append("document", selectedFile);
      }

      if (editingId) {
        await updateInsight(editingId, payload);
        showToast("success", "Insight updated successfully.");
      } else {
        await createInsight(payload);
        showToast("success", "Insight published successfully.");
      }

      resetForm();
      setEditingId(null);
      fetchInsights();
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        (editingId ? "Failed to update insight." : "Failed to publish insight.");
      showToast("error", message);
    } finally {
      setSubmitting(false);
    }
  };

  // ---- edit flow ----
  const handleEditClick = (item) => {
    setEditingId(item._id);
    setForm({
      category: item.category || "blog",
      title: item.title || "",
      author: item.author || "",
      // <input type="date"> needs "YYYY-MM-DD"; publishedDate/createdAt
      // come back from the API as full ISO strings.
      publishedDate: (item.publishedDate || item.createdAt || "").slice(0, 10),
      summary: item.summary || "",
      isFeatured: !!item.isFeatured,
    });
    setSelectedFile(null);
    setFormError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    resetForm();
  };

  // ---- delete flow ----
  const confirmDelete = (id) => setPendingDeleteId(id);
  const cancelDelete = () => setPendingDeleteId(null);

  const handleDelete = async () => {
    if (!pendingDeleteId) return;
    const id = pendingDeleteId;
    setDeletingId(id);
    try {
      await deleteInsight(id);
      showToast("success", "Insight deleted.");
      setInsights((prev) => prev.filter((i) => i._id !== id));
    } catch (err) {
      showToast("error", "Failed to delete insight.");
    } finally {
      setDeletingId(null);
      setPendingDeleteId(null);
    }
  };

  const handleDownload = (id) => {
    downloadInsight(id);
  };

  const displayDate = (item) => {
    const raw = item.publishedDate || item.createdAt;
    if (!raw) return "-";
    const d = new Date(raw);
    return Number.isNaN(d.getTime()) ? "-" : d.toLocaleDateString();
  };

  const sortedInsights = useMemo(
    () =>
      [...insights].sort((a, b) => {
        const da = new Date(a.createdAt || 0).getTime();
        const db = new Date(b.createdAt || 0).getTime();
        return db - da;
      }),
    [insights]
  );

  return (
    <>
  <Helmet>
    <title>PSBS Admin Insight</title>

    <meta
      name="robots"
      content="noindex, nofollow"
    />
    </Helmet>
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-28 pb-16 space-y-10">
        {/* Hero */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent drop-shadow">
            Content Management
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            Publish Blogs, Articles and Legal Updates directly to the PSBS
            insights feed — no code changes required.
          </p>
        </div>

        {/* Upload form */}
        <div ref={formSectionRef} className={`${CARD_BASE} p-5 sm:p-8 space-y-6`}>
          <h2 className="text-lg font-bold text-white">
            {editingId ? "Edit Insight" : "Publish New Insight"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Category */}
            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
                Category
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              >
                {CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter insight title"
                className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
                Author
              </label>
              <input
                type="text"
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Enter author name"
                className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
              />
            </div>

            {/* Published Date */}
            <div>
              <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
                Published Date
              </label>
              <input
                type="date"
                name="publishedDate"
                value={form.publishedDate}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 [color-scheme:dark]"
              />
            </div>

            {/* Summary */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
                Summary
              </label>
              <textarea
                name="summary"
                value={form.summary}
                onChange={handleChange}
                rows={5}
                placeholder="Write a short summary of this insight"
                className="w-full px-4 py-2.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 resize-none"
              />
            </div>

            {/* Feature checkbox */}
            <div className="sm:col-span-2 flex items-center gap-2">
              <input
                id="isFeatured"
                type="checkbox"
                name="isFeatured"
                checked={form.isFeatured}
                onChange={handleChange}
                className="w-4 h-4 rounded border-neutral-700 bg-neutral-900 accent-cyan-500"
              />
              <label htmlFor="isFeatured" className="text-sm text-neutral-300">
                Feature on Homepage
              </label>
            </div>

            {/* Upload document */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-neutral-400 mb-1.5">
                Upload Document
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={`cursor-pointer rounded-lg border-2 border-dashed px-6 py-8 text-center transition
                  ${
                    isDragging
                      ? "border-cyan-400 bg-cyan-500/5"
                      : "border-neutral-800 bg-neutral-900 hover:border-neutral-700"
                  }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileInput}
                  className="hidden"
                />
                <p className="text-sm text-neutral-300">
                  Drag &amp; drop your file here, or{" "}
                  <span className={`${ACCENT} font-semibold`}>browse</span>
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Supports PDF, DOC, DOCX
                  {editingId ? " — leave empty to keep the current file" : ""}
                </p>
                {selectedFile && (
                  <p className="mt-3 text-sm font-semibold text-cyan-400">
                    Selected: {selectedFile.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          {formError && (
            <p className="text-sm text-red-400 font-medium">{formError}</p>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/10 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
            >
              {submitting && (
                <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              )}
              {submitting
                ? editingId
                  ? "Updating..."
                  : "Publishing..."
                : editingId
                ? "Update Insight"
                : "Publish"}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold text-neutral-300 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </div>

        {/* Recently uploaded */}
        <div className={`${CARD_BASE} p-5 sm:p-8`}>
          <h2 className="text-lg font-bold text-white mb-5">
            Recently Uploaded Insights
          </h2>

          {listLoading ? (
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-12 rounded-lg bg-neutral-900 animate-pulse"
                />
              ))}
            </div>
          ) : sortedInsights.length === 0 ? (
            <p className="text-neutral-400 text-sm py-6 text-center">
              No insights published yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm min-w-[720px]">
                <thead>
                  <tr className="text-neutral-400 border-b border-neutral-800">
                    <th className="py-3 pr-4 font-semibold">Category</th>
                    <th className="py-3 pr-4 font-semibold">Title</th>
                    <th className="py-3 pr-4 font-semibold">Author</th>
                    <th className="py-3 pr-4 font-semibold">Published Date</th>
                    <th className="py-3 pr-4 font-semibold">Filename</th>
                    <th className="py-3 pr-4 font-semibold text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedInsights.map((item) => (
                    <tr
                      key={item._id}
                      className="border-b border-neutral-900 hover:bg-neutral-900/60 transition"
                    >
                      <td className="py-3 pr-4">
                        <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 uppercase text-[10px] tracking-wide font-semibold">
                          {categoryLabel(item.category)}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-neutral-200 font-medium">
                        {item.title}
                      </td>
                      <td className="py-3 pr-4 text-neutral-400">
                        {item.author}
                      </td>
                      <td className="py-3 pr-4 text-neutral-400">
                        {displayDate(item)}
                      </td>
                      <td className="py-3 pr-4 text-neutral-400 truncate max-w-[180px]">
                        {item.fileName}
                      </td>
                      <td className="py-3 pr-4">
                        <div className="flex items-center justify-end gap-3">
                          <button
                            onClick={() => handleEditClick(item)}
                            className="text-neutral-200 hover:underline font-semibold"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDownload(item._id)}
                            className="text-cyan-400 hover:underline font-semibold"
                          >
                            Download
                          </button>
                          <button
                            onClick={() => confirmDelete(item._id)}
                            disabled={deletingId === item._id}
                            className="text-red-400 hover:underline font-semibold disabled:opacity-50"
                          >
                            {deletingId === item._id ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Delete confirmation modal */}
      {pendingDeleteId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={cancelDelete}
        >
          <div
            className="w-full max-w-sm rounded-xl bg-neutral-950 border border-white/10 shadow-2xl p-6 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-white">Are you sure?</h3>
            <p className="text-sm text-neutral-400">
              This insight will be permanently deleted. This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-neutral-900 text-neutral-300 border border-neutral-800 hover:bg-neutral-800"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-lg shadow-2xl border text-sm font-semibold
            ${
              toast.type === "success"
                ? "bg-neutral-900 border-cyan-500/40 text-cyan-400"
                : "bg-neutral-900 border-red-500/40 text-red-400"
            }`}
        >
          {toast.message}
        </div>
        
      )}
    </div>
  </>
  );
}