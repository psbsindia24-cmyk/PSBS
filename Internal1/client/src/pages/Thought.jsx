
// //client/src/pages/Thought.jsx
// import React, { useMemo, useState, useEffect } from "react";
// import { getAllInsights, downloadInsight } from "../api/insightApi";

// /**
//  * Thought.jsx (backend-driven)
//  * - UI, spacing, typography, colors, animations, layout: UNCHANGED
//  * - Hardcoded ITEMS array removed
//  * - Data now loads from GET /api/insights via insightApi.js
//  * - Featured Insights section driven by `isFeatured`
//  * - Category filter driven by backend `category`: blog | article | legal
//  * - Cards are fixed/equal height with clamped summaries (no per-card scroll)
//  * - "View Blog / View Article / View Legal Update" triggers downloadInsight(id)
//  *   which streams the document straight from GridFS
//  */

// export default function Thought() {
//   // ==== Accent & theme helpers (unchanged) ====
//   const ACCENT = "text-cyan-400";
//   const ACCENT_BG = "bg-cyan-500/10";
//   const CARD_BASE =
//     "rounded-xl bg-neutral-900/80 backdrop-blur-sm border border-white/10 shadow-lg transition hover:shadow-[0_8px_30px_rgba(34,211,238,0.06)] hover:border-cyan-400/30";

//   // clamp helper (inline style so it works regardless of Tailwind line-clamp plugin availability)
//   const clampStyle = (lines) => ({
//     display: "-webkit-box",
//     WebkitLineClamp: lines,
//     WebkitBoxOrient: "vertical",
//     overflow: "hidden",
//   });

//   // ---- backend data state ----
//   const [insights, setInsights] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // ---- UI state ----
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all"); // all | blog | article | legal
//   const [view, setView] = useState("featured"); // featured | all

//   const loadInsights = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const res = await getAllInsights();
//       setInsights(res?.data || []);
//     } catch (err) {
//       setError("Unable to load insights.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadInsights();
//   }, []);

//   // dynamic top padding to avoid header overlap (unchanged)
//   const [topPadding, setTopPadding] = useState(24); // fallback gap

//   useEffect(() => {
//     function updatePadding() {
//       let headerHeight = 0;

//       const headerEl = document.querySelector("header");
//       if (headerEl) {
//         headerHeight = Math.ceil(headerEl.getBoundingClientRect().height || 0);
//       } else {
//         const cssVar = getComputedStyle(document.documentElement).getPropertyValue(
//           "--header-height"
//         );
//         if (cssVar) {
//           const parsed = parseInt(cssVar.replace("px", "").trim(), 10);
//           if (!Number.isNaN(parsed)) headerHeight = parsed;
//         }
//       }

//       const gap = 24;
//       setTopPadding(headerHeight + gap);
//     }

//     updatePadding();
//     window.addEventListener("resize", updatePadding);
//     const id = setTimeout(updatePadding, 300);
//     return () => {
//       window.removeEventListener("resize", updatePadding);
//       clearTimeout(id);
//     };
//   }, []);

//   // ---- helpers: category labels ----
//   const categoryLabel = (cat) => {
//     if (cat === "article") return "Article";
//     if (cat === "blog") return "Blog";
//     if (cat === "legal") return "Legal Update";
//     return String(cat || "").charAt(0).toUpperCase() + String(cat || "").slice(1);
//   };

//   const viewLabel = (cat) => {
//     if (cat === "blog") return "View Blog";
//     if (cat === "article") return "View Article";
//     if (cat === "legal") return "View Legal Update";
//     return "View More";
//   };

//   const formatDate = (item) => {
//     const raw = item.publishedDate;
//     if (!raw) return "-";
//     const d = new Date(raw);
//     return Number.isNaN(d.getTime()) ? "-" : d.toLocaleDateString();
//   };

//   // ---- derived lists ----
//   const filtered = useMemo(() => {
//     const q = searchTerm.trim().toLowerCase();
//     return insights
//       .filter((i) => {
//         const catOk = selectedCategory === "all" || i.category === selectedCategory;

//         const qOk =
//           !q ||
//           (i.title || "").toLowerCase().includes(q) ||
//           (i.summary || "").toLowerCase().includes(q) ||
//           (i.author || "").toLowerCase().includes(q);

//         return catOk && qOk;
//       })
//       .sort((a, b) => {
//         const da = new Date(a.publishedDate || a.createdAt || 0).getTime();
//         const db = new Date(b.publishedDate || b.createdAt || 0).getTime();
//         return db - da;
//       });
//   }, [insights, searchTerm, selectedCategory]);

//   const featured = useMemo(
//     () => filtered.filter((i) => i.isFeatured),
//     [filtered]
//   );
//   const allItems = filtered;

//   const handleView = (item) => {
//     downloadInsight(item._id);
//   };

//   // ---- UI helpers (unchanged) ----
//   const chip = (cat, label) => (
//     <button
//       key={cat}
//       onClick={() => setSelectedCategory(cat)}
//       className={`px-4 py-2 rounded-lg text-sm font-semibold border transition
//         ${
//           selectedCategory === cat
//             ? `bg-cyan-600/90 text-white border-cyan-400 shadow-[0_0_0_2px_rgba(34,211,238,0.08)]`
//             : "bg-neutral-900/70 text-neutral-300 border-neutral-800 hover:bg-neutral-800"
//         }`}
//     >
//       {label}
//     </button>
//   );

//   const Pill = ({ children }) => (
//     <span
//       className={`px-3 py-1 rounded-md ${ACCENT_BG} ${ACCENT} uppercase text-[10px] tracking-wide font-semibold`}
//     >
//       {children}
//     </span>
//   );

//   // ---- skeleton card ----
//   const SkeletonCard = ({ tall }) => (
//     <div className={`${CARD_BASE} p-5 ${tall ? "h-[280px]" : "h-[240px]"} animate-pulse`}>
//       <div className="h-4 w-24 bg-neutral-800 rounded mb-3" />
//       <div className="h-5 w-3/4 bg-neutral-800 rounded mb-4" />
//       <div className="h-3 w-full bg-neutral-800 rounded mb-2" />
//       <div className="h-3 w-full bg-neutral-800 rounded mb-2" />
//       <div className="h-3 w-2/3 bg-neutral-800 rounded" />
//     </div>
//   );

//   return (
//     <section
//       className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 space-y-8 text-neutral-200"
//       style={{
//         paddingTop: `${topPadding}px`,
//         scrollMarginTop: `${topPadding}px`,
//       }}
//     >
//       {/* Punch line / banner */}
//       <div className="w-full">
//         <div className="mx-auto max-w-5xl text-center px-4 py-3 rounded-xl border border-white/10 bg-gradient-to-r from-neutral-950 via-black to-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
//           <p className="text-sm sm:text-base text-neutral-300">
//             Stay ahead with our latest research, industry analysis, and expert
//             perspectives on the challenges shaping tomorrow’s business landscape.
//           </p>
//         </div>
//       </div>

//       {/* Page title (stronger cyan-blue theme) */}
//       <div className="text-center space-y-2">
//         <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent drop-shadow">
// Strategic Insights for Modern Business
// </h1>
//       </div>

//       {/* Search + Primary chips */}
//       <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
//         <input
//           type="text"
//           placeholder="Search insights..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="px-4 py-2 rounded-lg bg-neutral-900/90 text-neutral-200 w-full sm:w-96 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
//         />
//         <div className="flex gap-2 flex-wrap justify-center">
//           {chip("all", "All Insights")}
//           {chip("blog", "Blogs")}
//           {chip("article", "Articles")}
//           {chip("legal", "Legal Updates")}
//         </div>
//       </div>

//       {/* Secondary tabs: Featured / All */}
//       <div className="flex items-center justify-center gap-6 border-b border-neutral-900">
//         <button
//           onClick={() => setView("featured")}
//           className={`py-4 text-sm font-semibold transition ${
//             view === "featured"
//               ? "text-cyan-400 border-b-2 border-cyan-400"
//               : "text-neutral-400 hover:text-neutral-200"
//           }`}
//         >
//           Featured Insights
//         </button>
//         <button
//           onClick={() => setView("all")}
//           className={`py-4 text-sm font-semibold transition ${
//             view === "all"
//               ? "text-cyan-400 border-b-2 border-cyan-400"
//               : "text-neutral-400 hover:text-neutral-200"
//           }`}
//         >
//           All Insights
//         </button>
//       </div>

//       {/* Error state */}
//       {!loading && error && (
//         <p className="text-center text-red-400 text-sm py-8">{error}</p>
//       )}

//       {/* Loading state */}
//       {loading && (
//         <div
//           className={
//             view === "featured"
//               ? "grid gap-5 sm:grid-cols-2"
//               : "grid gap-5 sm:grid-cols-2 md:grid-cols-3"
//           }
//         >
//           {[...Array(view === "featured" ? 2 : 6)].map((_, i) => (
//             <SkeletonCard key={i} tall={view === "featured"} />
//           ))}
//         </div>
//       )}

//       {/* Content */}
//       {!loading && !error && view === "featured" && (
//         <div className="grid gap-5 sm:grid-cols-2">
//           {featured.map((f) => (
//             <article
//               key={f._id}
//               className={`${CARD_BASE} p-5 flex flex-col h-[320px]`}
//             >
//               <div className="flex-shrink-0">
//                 <div className="flex items-center gap-2 text-xs mb-2">
//                   <Pill>{categoryLabel(f.category)}</Pill>
//                   <span className="text-neutral-400">• {f.readTime}</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-white">{f.title}</h3>
//               </div>

//               <div className="flex-1 mt-3">
//                 <p
//                   className="text-neutral-300 leading-relaxed"
//                   style={clampStyle(4)}
//                 >
//                   {f.summary}
//                 </p>
//               </div>

//               <div className="flex-shrink-0 pt-3">
//                 <button
//                   onClick={() => handleView(f)}
//                   className={`text-sm font-semibold ${ACCENT} hover:underline`}
//                 >
//                   {viewLabel(f.category)} →
//                 </button>
//                 <div className="mt-2 text-sm text-neutral-400">
//                   {formatDate(f)} • {f.author}
//                 </div>
//               </div>
//             </article>
//           ))}
//           {featured.length === 0 && (
//             <p className="text-neutral-400 col-span-full text-center py-8">
//               No Insights Available
//             </p>
//           )}
//         </div>
//       )}

//       {!loading && !error && view === "all" && (
//         <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
//           {allItems.map((o) => (
//             <article
//               key={o._id}
//               className={`${CARD_BASE} p-5 hover:bg-neutral-900 flex flex-col h-[300px]`}
//             >
//               <div className="flex-shrink-0">
//                 <div className="flex items-center gap-2 text-xs mb-2">
//                   <Pill>{categoryLabel(o.category)}</Pill>
//                   <span className="text-neutral-400">• {o.readTime}</span>
//                 </div>
//                 <h3 className="text-lg font-bold text-white">{o.title}</h3>
//               </div>

//               <div className="flex-1 mt-3">
//                 <p
//                   className="text-neutral-300 text-sm leading-relaxed"
//                   style={clampStyle(3)}
//                 >
//                   {o.summary}
//                 </p>
//               </div>

//               <div className="flex-shrink-0 pt-2">
//                 <button
//                   onClick={() => handleView(o)}
//                   className={`text-xs font-semibold ${ACCENT} hover:underline`}
//                 >
//                   {viewLabel(o.category)} →
//                 </button>
//                 <div className="mt-2 text-xs text-neutral-400">
//                   {formatDate(o)} • {o.author}
//                 </div>
//               </div>
//             </article>
//           ))}
//           {allItems.length === 0 && (
//             <p className="text-neutral-400 col-span-full text-center py-8">
//               No Insights Available
//             </p>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }


// //client/src/pages/Thought.jsx
// import React, { useMemo, useState, useEffect } from "react";
// import { getAllInsights, downloadInsight } from "../api/insightApi";

// /**
//  * Thought.jsx (backend-driven)
//  * - UI, spacing, typography, colors, animations, layout: UNCHANGED
//  * - Hardcoded ITEMS array removed
//  * - Data now loads from GET /api/insights via insightApi.js
//  * - Featured Insights section driven by `isFeatured`
//  * - Category filter driven by backend `category`: blog | article | legal
//  * - Cards are fixed/equal height with clamped summaries (no per-card scroll)
//  * - "View Blog / View Article / View Legal Update" triggers downloadInsight(id)
//  *   which streams the document straight from GridFS
//  */

// export default function Thought() {
//   // ==== Accent & theme helpers (unchanged) ====
//   const ACCENT = "text-cyan-400";
//   const ACCENT_BG = "bg-cyan-500/10";
//   const CARD_BASE =
//     "rounded-xl bg-neutral-900/80 backdrop-blur-sm border border-white/10 shadow-lg transition hover:shadow-[0_8px_30px_rgba(34,211,238,0.06)] hover:border-cyan-400/30";

//   // ---- backend data state ----
//   const [insights, setInsights] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // ---- UI state ----
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all"); // all | blog | article | legal
//   const [view, setView] = useState("featured"); // featured | all

//   const loadInsights = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       const res = await getAllInsights();
//       setInsights(res?.data || []);
//     } catch (err) {
//       setError("Unable to load insights.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadInsights();
//   }, []);

//   // dynamic top padding to avoid header overlap (unchanged)
//   const [topPadding, setTopPadding] = useState(24); // fallback gap

//   useEffect(() => {
//     function updatePadding() {
//       let headerHeight = 0;

//       const headerEl = document.querySelector("header");
//       if (headerEl) {
//         headerHeight = Math.ceil(headerEl.getBoundingClientRect().height || 0);
//       } else {
//         const cssVar = getComputedStyle(document.documentElement).getPropertyValue(
//           "--header-height"
//         );
//         if (cssVar) {
//           const parsed = parseInt(cssVar.replace("px", "").trim(), 10);
//           if (!Number.isNaN(parsed)) headerHeight = parsed;
//         }
//       }

//       const gap = 24;
//       setTopPadding(headerHeight + gap);
//     }

//     updatePadding();
//     window.addEventListener("resize", updatePadding);
//     const id = setTimeout(updatePadding, 300);
//     return () => {
//       window.removeEventListener("resize", updatePadding);
//       clearTimeout(id);
//     };
//   }, []);

//   // ---- helpers: category labels ----
//   const categoryLabel = (cat) => {
//     if (cat === "article") return "Article";
//     if (cat === "blog") return "Blog";
//     if (cat === "legal") return "Legal Update";
//     return String(cat || "").charAt(0).toUpperCase() + String(cat || "").slice(1);
//   };

//   const viewLabel = (cat) => {
//     if (cat === "blog") return "View Blog";
//     if (cat === "article") return "View Article";
//     if (cat === "legal") return "View Legal Update";
//     return "View More";
//   };

//   const formatDate = (item) => {
//     const raw = item.publishedDate;
//     if (!raw) return "-";
//     const d = new Date(raw);
//     if (Number.isNaN(d.getTime())) return "-";
//     return d.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   // ---- derived lists ----
//   const filtered = useMemo(() => {
//     const q = searchTerm.trim().toLowerCase();
//     return insights
//       .filter((i) => {
//         const catOk = selectedCategory === "all" || i.category === selectedCategory;

//         const qOk =
//           !q ||
//           (i.title || "").toLowerCase().includes(q) ||
//           (i.summary || "").toLowerCase().includes(q) ||
//           (i.author || "").toLowerCase().includes(q);

//         return catOk && qOk;
//       })
//       .sort((a, b) => {
//         const da = new Date(a.publishedDate || a.createdAt || 0).getTime();
//         const db = new Date(b.publishedDate || b.createdAt || 0).getTime();
//         return db - da;
//       });
//   }, [insights, searchTerm, selectedCategory]);

//   const featured = useMemo(
//     () => filtered.filter((i) => i.isFeatured),
//     [filtered]
//   );
//   const allItems = filtered;

//   const handleView = (item) => {
//     downloadInsight(item._id);
//   };

//   // ---- UI helpers (unchanged) ----
//   const chip = (cat, label) => (
//     <button
//       key={cat}
//       onClick={() => setSelectedCategory(cat)}
//       className={`px-4 py-2 rounded-lg text-sm font-semibold border transition
//         ${
//           selectedCategory === cat
//             ? `bg-cyan-600/90 text-white border-cyan-400 shadow-[0_0_0_2px_rgba(34,211,238,0.08)]`
//             : "bg-neutral-900/70 text-neutral-300 border-neutral-800 hover:bg-neutral-800"
//         }`}
//     >
//       {label}
//     </button>
//   );

//   const Pill = ({ children }) => (
//     <span
//       className={`px-3 py-1 rounded-md ${ACCENT_BG} ${ACCENT} uppercase text-[10px] tracking-wide font-semibold`}
//     >
//       {children}
//     </span>
//   );

//   // ---- skeleton card ----
//   const SkeletonCard = ({ tall }) => (
//     <div className={`${CARD_BASE} p-5 ${tall ? "h-[280px]" : "h-[240px]"} animate-pulse`}>
//       <div className="h-4 w-24 bg-neutral-800 rounded mb-3" />
//       <div className="h-5 w-3/4 bg-neutral-800 rounded mb-4" />
//       <div className="h-3 w-full bg-neutral-800 rounded mb-2" />
//       <div className="h-3 w-full bg-neutral-800 rounded mb-2" />
//       <div className="h-3 w-2/3 bg-neutral-800 rounded" />
//     </div>
//   );

//   return (
//     <section
//       className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 space-y-8 text-neutral-200"
//       style={{
//         paddingTop: `${topPadding}px`,
//         scrollMarginTop: `${topPadding}px`,
//       }}
//     >
//       {/* Premium custom scrollbar for card summary areas */}
//       <style>{`
//         .insight-scroll {
//           scrollbar-width: thin;
//           scrollbar-color: rgba(34, 211, 238, 0.45) rgba(255, 255, 255, 0.04);
//           scroll-behavior: smooth;
//         }
//         .insight-scroll::-webkit-scrollbar {
//           width: 6px;
//         }
//         .insight-scroll::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.04);
//           border-radius: 9999px;
//         }
//         .insight-scroll::-webkit-scrollbar-thumb {
//           background: linear-gradient(180deg, rgba(34, 211, 238, 0.65), rgba(56, 189, 248, 0.45));
//           border-radius: 9999px;
//         }
//         .insight-scroll::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(180deg, rgba(34, 211, 238, 0.9), rgba(56, 189, 248, 0.7));
//         }
//       `}</style>

//       {/* Punch line / banner */}
//       <div className="w-full">
//         <div className="mx-auto max-w-5xl text-center px-4 py-3 rounded-xl border border-white/10 bg-gradient-to-r from-neutral-950 via-black to-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
//           <p className="text-sm sm:text-base text-neutral-300">
//             Stay ahead with our latest research, industry analysis, and expert
//             perspectives on the challenges shaping tomorrow’s business landscape.
//           </p>
//         </div>
//       </div>

//       {/* Page title (stronger cyan-blue theme) */}
//       <div className="text-center space-y-2">
//         <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent drop-shadow">
// Strategic Insights for Modern Business
// </h1>
//       </div>

//       {/* Search + Primary chips */}
//       <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
//         <input
//           type="text"
//           placeholder="Search insights..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="px-4 py-2 rounded-lg bg-neutral-900/90 text-neutral-200 w-full sm:w-96 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
//         />
//         <div className="flex gap-2 flex-wrap justify-center">
//           {chip("all", "All Insights")}
//           {chip("blog", "Blogs")}
//           {chip("article", "Articles")}
//           {chip("legal", "Legal Updates")}
//         </div>
//       </div>

//       {/* Secondary tabs: Featured / All */}
//       <div className="flex items-center justify-center gap-6 border-b border-neutral-900">
//         <button
//           onClick={() => setView("featured")}
//           className={`py-4 text-sm font-semibold transition ${
//             view === "featured"
//               ? "text-cyan-400 border-b-2 border-cyan-400"
//               : "text-neutral-400 hover:text-neutral-200"
//           }`}
//         >
//           Featured Insights
//         </button>
//         <button
//           onClick={() => setView("all")}
//           className={`py-4 text-sm font-semibold transition ${
//             view === "all"
//               ? "text-cyan-400 border-b-2 border-cyan-400"
//               : "text-neutral-400 hover:text-neutral-200"
//           }`}
//         >
//           All Insights
//         </button>
//       </div>

//       {/* Error state */}
//       {!loading && error && (
//         <p className="text-center text-red-400 text-sm py-8">{error}</p>
//       )}

//       {/* Loading state */}
//       {loading && (
//         <div
//           className={
//             view === "featured"
//               ? "grid gap-5 sm:grid-cols-2"
//               : "grid gap-5 sm:grid-cols-2 md:grid-cols-3"
//           }
//         >
//           {[...Array(view === "featured" ? 2 : 6)].map((_, i) => (
//             <SkeletonCard key={i} tall={view === "featured"} />
//           ))}
//         </div>
//       )}

//       {/* Content */}
//       {!loading && !error && view === "featured" && (
//         <div className="grid gap-5 sm:grid-cols-2">
//           {featured.map((f) => (
//             <article
//               key={f._id}
//               className={`${CARD_BASE} p-5 flex flex-col h-[320px]`}
//             >
//               <div className="flex-shrink-0">
//                 <div className="flex items-center gap-2 text-xs mb-2">
//                   <Pill>{categoryLabel(f.category)}</Pill>
//                   <span className="text-neutral-400">• {formatDate(f)}</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-white">{f.title}</h3>
//               </div>

//               <div className="flex-1 min-h-0 mt-3">
//                 <div className="insight-scroll h-full overflow-y-auto pr-3">
//                   <p className="text-neutral-300 leading-relaxed whitespace-pre-line">
//                     {f.summary}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex-shrink-0 pt-3">
//                 <button
//                   onClick={() => handleView(f)}
//                   className={`text-sm font-semibold ${ACCENT} hover:underline`}
//                 >
//                   {viewLabel(f.category)} →
//                 </button>
//                 <div className="mt-2 text-sm text-neutral-400">{f.author}</div>
//               </div>
//             </article>
//           ))}
//           {featured.length === 0 && (
//             <p className="text-neutral-400 col-span-full text-center py-8">
//               No Insights Available
//             </p>
//           )}
//         </div>
//       )}

//       {!loading && !error && view === "all" && (
//         <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
//           {allItems.map((o) => (
//             <article
//               key={o._id}
//               className={`${CARD_BASE} p-5 hover:bg-neutral-900 flex flex-col h-[300px]`}
//             >
//               <div className="flex-shrink-0">
//                 <div className="flex items-center gap-2 text-xs mb-2">
//                   <Pill>{categoryLabel(o.category)}</Pill>
//                   <span className="text-neutral-400">• {formatDate(o)}</span>
//                 </div>
//                 <h3 className="text-lg font-bold text-white">{o.title}</h3>
//               </div>

//               <div className="flex-1 min-h-0 mt-3">
//                 <div className="insight-scroll h-full overflow-y-auto pr-3">
//                   <p className="text-neutral-300 text-sm leading-relaxed whitespace-pre-line">
//                     {o.summary}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex-shrink-0 pt-2">
//                 <button
//                   onClick={() => handleView(o)}
//                   className={`text-xs font-semibold ${ACCENT} hover:underline`}
//                 >
//                   {viewLabel(o.category)} →
//                 </button>
//                 <div className="mt-2 text-xs text-neutral-400">{o.author}</div>
//               </div>
//             </article>
//           ))}
//           {allItems.length === 0 && (
//             <p className="text-neutral-400 col-span-full text-center py-8">
//               No Insights Available
//             </p>
//           )}
//         </div>
//       )}
//     </section>
//   );
// }



//client/src/pages/Thought.jsx
import React, { useMemo, useState, useEffect } from "react";
import { getAllInsights, downloadInsight } from "../api/insightApi";
import { Helmet } from "react-helmet-async";
/**
 * Thought.jsx (backend-driven, premium card refresh)
 * - Hero, title, search box, category chips, Featured/All tabs: UNCHANGED
 * - Data loads from GET /api/insights via insightApi.js
 * - Featured Insights driven by `isFeatured`; category filter by
 *   backend `category`: blog | article | legal
 * - Cards fixed to a professional, identical height per section
 *   (560px featured / 500px all insights) — content never stretches them
 * - Only the summary body scrolls (~250-350 comfortable reading words
 *   visible before scroll), paragraphs preserved and spaced individually
 * - Custom scrollbar: thin, cyan, rounded, hidden until hover
 * - publishedDate always preferred; falls back to createdAt only if
 *   publishedDate is missing (see NOTE below on the real root cause)
 * - Footer redesigned into "Published on / date / author / View →"
 *   hierarchy without changing the overall layout
 * - Featured cards get a subtle cyan glow + larger type to read as
 *   more important, without introducing a new design language
 * - Search, category filtering, useMemo, and downloadInsight() logic:
 *   UNCHANGED
 *
 * NOTE ON PUBLISHED DATE (Problem 6):
 * This component already reads item.publishedDate correctly and now
 * falls back to item.createdAt if it's absent. If dates are still
 * showing as "-" in production, the root cause is upstream, not here:
 * the Insight schema/service must actually persist `publishedDate`
 * from the AdminInsight.jsx upload and return it from GET /api/insights.
 * A frontend fallback cannot recover data the backend never saved.
 */

export default function Thought() {
  // ==== Accent & theme helpers (unchanged) ====
  const ACCENT = "text-cyan-400";
  const ACCENT_BG = "bg-cyan-500/10";
  const CARD_BASE =
    "rounded-xl bg-neutral-900/80 backdrop-blur-sm border border-white/10 shadow-lg transition hover:shadow-[0_8px_30px_rgba(34,211,238,0.06)] hover:border-cyan-400/30";

  // ---- backend data state ----
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ---- UI state ----
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all"); // all | blog | article | legal
  const [view, setView] = useState("featured"); // featured | all

  const loadInsights = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await getAllInsights();
      setInsights(res?.data || []);
    } catch (err) {
      setError("Unable to load insights.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInsights();
  }, []);

  // dynamic top padding to avoid header overlap (unchanged)
  const [topPadding, setTopPadding] = useState(24); // fallback gap

  useEffect(() => {
    function updatePadding() {
      let headerHeight = 0;

      const headerEl = document.querySelector("header");
      if (headerEl) {
        headerHeight = Math.ceil(headerEl.getBoundingClientRect().height || 0);
      } else {
        const cssVar = getComputedStyle(document.documentElement).getPropertyValue(
          "--header-height"
        );
        if (cssVar) {
          const parsed = parseInt(cssVar.replace("px", "").trim(), 10);
          if (!Number.isNaN(parsed)) headerHeight = parsed;
        }
      }

      const gap = 24;
      setTopPadding(headerHeight + gap);
    }

    updatePadding();
    window.addEventListener("resize", updatePadding);
    const id = setTimeout(updatePadding, 300);
    return () => {
      window.removeEventListener("resize", updatePadding);
      clearTimeout(id);
    };
  }, []);

  // ---- helpers: category labels ----
  const categoryLabel = (cat) => {
    if (cat === "article") return "Article";
    if (cat === "blog") return "Blog";
    if (cat === "legal") return "Legal Update";
    return String(cat || "").charAt(0).toUpperCase() + String(cat || "").slice(1);
  };

  const viewLabel = (cat) => {
    if (cat === "blog") return "View Blog";
    if (cat === "article") return "View Article";
    if (cat === "legal") return "View Legal Update";
    return "View More";
  };

  const formatDate = (item) => {
    // Always prefer publishedDate; fall back to createdAt only if missing.
    const raw = item.publishedDate || item.createdAt;
    if (!raw) return "-";
    const d = new Date(raw);
    if (Number.isNaN(d.getTime())) return "-";
    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // splits a summary into paragraphs on blank lines so admin-authored
  // paragraph breaks are preserved with proper spacing between them
  const renderParagraphs = (text, textClass) => {
    if (!text) return null;
    const paragraphs = text.split(/\n{2,}/).filter(Boolean);
    const list = paragraphs.length ? paragraphs : [text];
    return list.map((para, idx) => (
      <p key={idx} className={`${textClass} whitespace-pre-line mb-4 last:mb-0`}>
        {para}
      </p>
    ));
  };

  // ---- derived lists ----
  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return insights
      .filter((i) => {
        const catOk = selectedCategory === "all" || i.category === selectedCategory;

        const qOk =
          !q ||
          (i.title || "").toLowerCase().includes(q) ||
          (i.summary || "").toLowerCase().includes(q) ||
          (i.author || "").toLowerCase().includes(q);

        return catOk && qOk;
      })
      .sort((a, b) => {
        const da = new Date(a.publishedDate || a.createdAt || 0).getTime();
        const db = new Date(b.publishedDate || b.createdAt || 0).getTime();
        return db - da;
      });
  }, [insights, searchTerm, selectedCategory]);

  const featured = useMemo(
    () => filtered.filter((i) => i.isFeatured),
    [filtered]
  );
  const allItems = filtered;

  const handleView = (item) => {
    downloadInsight(item._id);
  };

  // ---- UI helpers (unchanged) ----
  const chip = (cat, label) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`px-4 py-2 rounded-lg text-sm font-semibold border transition
        ${
          selectedCategory === cat
            ? `bg-cyan-600/90 text-white border-cyan-400 shadow-[0_0_0_2px_rgba(34,211,238,0.08)]`
            : "bg-neutral-900/70 text-neutral-300 border-neutral-800 hover:bg-neutral-800"
        }`}
    >
      {label}
    </button>
  );

  const Pill = ({ children }) => (
    <span
      className={`px-3 py-1 rounded-md ${ACCENT_BG} ${ACCENT} uppercase text-[10px] tracking-wide font-semibold`}
    >
      {children}
    </span>
  );

  // ---- skeleton card ----
  const SkeletonCard = ({ tall }) => (
    <div className={`${CARD_BASE} p-6 ${tall ? "h-[560px]" : "h-[500px]"} animate-pulse`}>
      <div className="h-4 w-24 bg-neutral-800 rounded mb-4" />
      <div className="h-6 w-3/4 bg-neutral-800 rounded mb-6" />
      <div className="h-3 w-full bg-neutral-800 rounded mb-2.5" />
      <div className="h-3 w-full bg-neutral-800 rounded mb-2.5" />
      <div className="h-3 w-full bg-neutral-800 rounded mb-2.5" />
      <div className="h-3 w-5/6 bg-neutral-800 rounded mb-2.5" />
      <div className="h-3 w-2/3 bg-neutral-800 rounded" />
    </div>
  );

  return (
        <>
    <Helmet>
      <title>Business Insights & Articles | PSBS India</title>

      <meta
        name="description"
        content="Read expert business insights, articles, legal updates and consulting knowledge from PSBS India."
      />

     <meta
  name= "keywords"
  content="
  business insights,
  business articles,
  industry insights,
  management articles,
  leadership insights,
  corporate strategy,
  PSBS insights"
/>

      <link
        rel="canonical"
        href="https://psbsindia.com/thought"
      />
    </Helmet>

  
    <section
      className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 space-y-8 text-neutral-200"
      style={{
        paddingTop: `${topPadding}px`,
        scrollMarginTop: `${topPadding}px`,
      }}
    >
      {/* Premium custom scrollbar for card summary areas — hidden until hover */}
      <style>{`
        .insight-scroll {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
          scroll-behavior: smooth;
          transition: scrollbar-color 0.2s ease;
        }
        .insight-scroll:hover {
          scrollbar-color: rgba(34, 211, 238, 0.5) transparent;
        }
        .insight-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .insight-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .insight-scroll::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 9999px;
        }
        .insight-scroll:hover::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(34, 211, 238, 0.7), rgba(56, 189, 248, 0.4));
        }
        .insight-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, rgba(34, 211, 238, 0.95), rgba(56, 189, 248, 0.65));
        }
      `}</style>

      {/* Punch line / banner */}
      <div className="w-full">
        <div className="mx-auto max-w-5xl text-center px-4 py-3 rounded-xl border border-white/10 bg-gradient-to-r from-neutral-950 via-black to-neutral-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <p className="text-sm sm:text-base text-neutral-300">
            Stay ahead with our latest research, industry analysis, and expert
            perspectives on the challenges shaping tomorrow’s business landscape.
          </p>
        </div>
      </div>

      {/* Page title (stronger cyan-blue theme) */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent drop-shadow">
Strategic Insights for Modern Business
</h1>
      </div>

      {/* Search + Primary chips */}
      <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
        <input
          type="text"
          placeholder="Search insights..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg bg-neutral-900/90 text-neutral-200 w-full sm:w-96 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
        />
        <div className="flex gap-2 flex-wrap justify-center">
          {chip("all", "All Insights")}
          {chip("blog", "Blogs")}
          {chip("article", "Articles")}
          {chip("legal", "Legal Updates")}
        </div>
      </div>

      {/* Secondary tabs: Featured / All */}
      <div className="flex items-center justify-center gap-6 border-b border-neutral-900">
        <button
          onClick={() => setView("featured")}
          className={`py-4 text-sm font-semibold transition ${
            view === "featured"
              ? "text-cyan-400 border-b-2 border-cyan-400"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
        >
          Featured Insights
        </button>
        <button
          onClick={() => setView("all")}
          className={`py-4 text-sm font-semibold transition ${
            view === "all"
              ? "text-cyan-400 border-b-2 border-cyan-400"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
        >
          All Insights
        </button>
      </div>

      {/* Error state */}
      {!loading && error && (
        <p className="text-center text-red-400 text-sm py-8">{error}</p>
      )}

      {/* Loading state */}
      {loading && (
        <div
          className={
            view === "featured"
              ? "grid gap-5 sm:grid-cols-2"
              : "grid gap-5 sm:grid-cols-2 md:grid-cols-3"
          }
        >
          {[...Array(view === "featured" ? 2 : 6)].map((_, i) => (
            <SkeletonCard key={i} tall={view === "featured"} />
          ))}
        </div>
      )}

      {/* Content */}
      {!loading && !error && view === "featured" && (
        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((f) => (
            <article
              key={f._id}
              className={`${CARD_BASE} p-6 flex flex-col h-[560px] border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.07)]`}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2 text-xs mb-3">
                  <Pill>{categoryLabel(f.category)}</Pill>
                </div>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {f.title}
                </h3>
              </div>

              <div className="flex-1 min-h-0 mt-4">
                <div className="insight-scroll h-full overflow-y-auto pr-4">
                  {renderParagraphs(
                    f.summary,
                    "text-neutral-300 text-[15px] leading-[1.8]"
                  )}
                </div>
              </div>

              <div className="flex-shrink-0 pt-5 mt-1 border-t border-white/5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-neutral-500 mb-1">
                    Published on
                  </p>
                  <p className="text-sm font-semibold text-neutral-200">
                    {formatDate(f)}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">{f.author}</p>
                </div>
                <button
                  onClick={() => handleView(f)}
                  className={`text-sm font-semibold ${ACCENT} hover:underline whitespace-nowrap`}
                >
                  {viewLabel(f.category)} →
                </button>
              </div>
            </article>
          ))}
          {featured.length === 0 && (
            <p className="text-neutral-400 col-span-full text-center py-8">
              No Insights Available
            </p>
          )}
        </div>
      )}

      {!loading && !error && view === "all" && (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {allItems.map((o) => (
            <article
              key={o._id}
              className={`${CARD_BASE} p-6 hover:bg-neutral-900 flex flex-col h-[500px]`}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2 text-xs mb-3">
                  <Pill>{categoryLabel(o.category)}</Pill>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {o.title}
                </h3>
              </div>

              <div className="flex-1 min-h-0 mt-4">
                <div className="insight-scroll h-full overflow-y-auto pr-4">
                  {renderParagraphs(
                    o.summary,
                    "text-neutral-300 text-sm leading-[1.75]"
                  )}
                </div>
              </div>

              <div className="flex-shrink-0 pt-4 mt-1 border-t border-white/5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-neutral-500 mb-1">
                    Published on
                  </p>
                  <p className="text-xs font-semibold text-neutral-200">
                    {formatDate(o)}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">{o.author}</p>
                </div>
                <button
                  onClick={() => handleView(o)}
                  className={`text-xs font-semibold ${ACCENT} hover:underline whitespace-nowrap`}
                >
                  {viewLabel(o.category)} →
                </button>
              </div>
            </article>
          ))}
          {allItems.length === 0 && (
            <p className="text-neutral-400 col-span-full text-center py-8">
              No Insights Available
            </p>
          )}
        </div>
      )}
    </section>
    </>
  );
}