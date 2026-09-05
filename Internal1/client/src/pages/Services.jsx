





// // src/pages/Services.fixed.jsx
// import React, { useEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
// import {
//   Users,
//   ShieldCheck,
//   BarChart3,
//   CheckCircle2,
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   Quote,
// } from "lucide-react";

// /* -----------------------
//    Accents
//    ----------------------- */
// const GLOBAL_ACCENT = "#0AE2FF"; // teal-blue (requested)
// const SLIDE_ACCENT = "#F8BA63"; // gold (inactive tab look)
// const SLIDE_ONLY_ACCENT = GLOBAL_ACCENT; // teal-blue for slide-specific accents

// /* -----------------------
//    Services (unchanged except mgmt layout is custom)
//    ----------------------- */
// const servicesData = [
//   {
//     id: "assurance",
//     title: "Assurance & Advisory",
//     icon: <ShieldCheck className="w-6 h-6" />,
//     image: "/images/service21.jpg",
//     description:
//       "Internal Audit,  Risk Management, Controls and Process Optimisation solutions…",
//     specializations: [
//       { text: "Internal Audit, Process and Operational Audits", img: "/icons/audit.png" },
//       { text: "Enterprise Risk Management ", img: "/icons/risk.png" },
//       { text: "Internal Controls Framework", img: "/icons/controls.png" },
//       "Governance Maturity Assessments and Implementation (SMEs and Corporates)",
//       "Standard Operating Procedures and Policies",
//       "Information Technology General Controls",
//       "ERP Application Controls Assessment",
//       "Pre Audit and Concurrent Audit",
//       "Data Security and Data Privacy",
//       "Due diligence and regulatory health-checks",
//     ],
//   },
//   {
//     id: "business",
//     title: "Business Growth & Consulting",
//     icon: <BarChart3 className="w-6 h-6" />,
//     image: "/images/services22.jpg",
//     description: "Analytics, Digital Transformation and Automation Advisory….",
//     specializations: [
//       "Process Automation – Automation of business process to bring efficiency and scalability",
//       "Business Analytics – Automated business analytics scripts",
//       "Fixed Assets Management - FAR Maintenance, Verification and Reconciliation",
//       "Contract Compliance and Third Party Risk Management",
//       "Regulatory Advisory and Compliance Frameworks",
//       "Digital Transformation and Automation Advisory",
//     ],
//     elevateText: {
//       title: "Elevate • Innovate • Accelerate",
//       subtitle: "Transforming Business Through Strategic Excellence"
//     },
//   },
//   {
//     id: "management",
//     title: "Management Support",
//     icon: <Users className="w-6 h-6" />,
//     image: "/images/services23.jpg",
//     description:
//       "Leadership and Governance (Retainership), Process Outsourcing and Compliance Solutions…",
//     specializations: [],
//   },
// ];

// /* ------------------------------------------
//    Management Support — grouped sub-sections
//    (used ONLY on the 3rd slide, full-width)
//    ------------------------------------------ */
// const MGMT_GROUPS = [
//   {
//     key: "leadership",
//     title: "Leadership & Governance (Retainership)",
//     shape: "rect", // changed to RECT so it lines up with BPO
//     items: [
//       "Chief Financial Officer",
//       "Chief Risk Officer (CRO) and Internal Controls",
//       "Legal and Compliance",
//     ],
//   },
//   {
//     key: "bpo",
//     title: "Business Process Outsourcing",
//     shape: "rect",
//     items: [
//       "Accounting, Book Keeping and Management Reporting",
//       "Accounts Payable and Accounts Receivables",
//       "Hiring and Payroll",
//     ],
//   },
//   {
//     key: "setup",
//     title: "Setting up Businesses",
//     shape: "rect2x2", // 2 x 2 grid
//     items: [
//       "Incorporation and Registration",
//       "Business Valuation",
//       "Corporate law Compliances",
//       "Direct / Indirect Taxes",
//     ],
//   },
// ];

// const MGMT_FOOTNOTE =
//   "Regulatory approvals and support in handling notices, litigation, etc.";

// /* -----------------------
//    Clients (paths) - 18 logos total
//    ----------------------- */
// const clients = [
//   // "/images/affinityx.jpeg",
//   // "/images/bata.jpeg",
//   "/images/chinaclub.jpeg",
//   "/images/gawar.jpeg",
//   "/images/skh.jpeg",
//   "/images/fybros.jpeg",
//   "/images/mamapay.jpeg",
//   "/images/oxford.jpeg",
//   "/images/shareindia.png",
//   "/images/tasc.jpeg",
//   "/images/zingbus.jpeg",
//   "/images/simplc.jpeg",
//   // "/images/relaxo.jpeg",
//   "/images/ralco.jpeg",
//   "/images/intergloble.jpeg",
//   "/images/aviol.jpeg",
//   "/images/ikia.jpeg",
//   "/images/aqulite.jpeg",
//   "/images/kimbal.jpg",
// ];

// // Split 18 logos into exactly 9 and 9 for balanced tracks
// const clientRow1 = clients.slice(0, 9);
// const clientRow2 = clients.slice(9, 18);

// const testimonials = [
//   {
//     id: 1,
//     client: "",
//     name: "Satya Dev Sharma",
//     role: "Head Risk & Compliance",
//     feedback:
//       "The quality of the deliverables submitted by the PSBS team has been truly commendable, reflecting a high level of professionalism and attention to detail. PSBS Team has demonstrated outstanding on-ground performance with remarkable dedication.",
//     img: "/images/satyadev.jpeg",
//     rating: 5,
//   },
//   {
//     id: 2,
//     client: "India Government Mint, Noida",
//     name: "Project: Developing Framework for Internal Financial Controls over Financial Reporting",
//     role: "",
//     feedback:
//       "We are pleased to confirm that the project was delivered in a timely and professional manner, and the management is satisfied with the quality of work performed by PSBS. The consultant has demonstrated strong technical expertise, responsiveness and commitment throughout the engagement. We appreciate the efforts of PSBS in contributing to the strengthening of the internal control framework of the Company",
//     img: "/images/testimonial1.jpeg",
//     rating: 5,
//   },

//    {
//     id: 3,
//     client: "AVI-OIl",
//     name: "Monica Garg",
//     role: "CFO",
//     feedback:
//       "We appreciate the professionalism, technical expertise, and commitment demonstrated by the PSBS team during the Audit Trail Assessment engagement. Their structured approach, attention to detail, and practical insights added significant value to the assignment. We are pleased with the quality of work and support provided throughout the project",
//     img: "/images/aviol.jpeg",
//     rating: 5,
//   },
// ];

// /* -----------------------
//    Small helper: LogoTile
//    ----------------------- */
// function LogoTile({ src, alt }) {
//   const [failed, setFailed] = useState(false);

//   // If no src provided or loading failed, don't render anything
//   if (!src || failed) {
//     return null;
//   }

//   return (
//     <img
//       src={src}
//       alt={alt}
//       className="client-logo"
//       loading="lazy"
//       onError={() => setFailed(true)}
//     />
//   );
// }

// /* -----------------------
//    Services component
//    ----------------------- */
// export default function Services() {
//   const [active, setActive] = useState(0);
//   const tabsRef = useRef([]);
//   const intervalRef = useRef(null);
//   const pausedRef = useRef(false);
//   const reduceMotionRef = useRef(false);

//   // unified height controller for all slides
//   const panelsWrapRef = useRef(null);
//   const panelRefs = useRef([]);

//   const location = useLocation();

//   // Helper function to get service index from URL parameters
//   const getServiceIndexFromURL = () => {
//     const urlParams = new URLSearchParams(location.search);
//     const mainService = urlParams.get('main');
//     const serviceIndex = urlParams.get('serviceIndex');
    
//     // If serviceIndex is provided, use it directly
//     if (serviceIndex !== null) {
//       const index = parseInt(serviceIndex, 10);
//       if (index >= 0 && index < servicesData.length) {
//         return index;
//       }
//     }
    
//     // If main service is provided, find the corresponding index
//     if (mainService) {
//       const serviceMap = {
//         'Assurance and Advisory': 0,
//         'Business Growth and Consulting': 1,
//         'Management Support': 2
//       };
//       return serviceMap[mainService] || 0;
//     }
    
//     return 0;
//   };

//   // Set initial active slide based on URL parameters
//   useEffect(() => {
//     const initialIndex = getServiceIndexFromURL();
//     setActive(initialIndex);
//   }, [location.search]);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       reduceMotionRef.current =
//         window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;
//     }
//   }, []);

//   function onTabKeyDown(e) {
//     const key = e.key;
//     let next = active;
//     if (key === "ArrowRight") next = (active + 1) % servicesData.length;
//     else if (key === "ArrowLeft") next = (active - 1 + servicesData.length) % servicesData.length;
//     else if (key === "Home") next = 0;
//     else if (key === "End") next = servicesData.length - 1;
//     else return;

//     e.preventDefault();
//     setActive(next);
//     tabsRef.current[next]?.focus();
//     resetAutoplay();
//   }

//   useEffect(() => {
//     tabsRef.current = tabsRef.current.slice(0, servicesData.length);
//   }, []);

//   // Autoplay 5s for tabs (kept) — respects reduced-motion and pause on hover
//   useEffect(() => {
//     function start() {
//       if (servicesData.length <= 1) return;
//       if (reduceMotionRef.current) return;
//       if (intervalRef.current) return;
//       intervalRef.current = setInterval(() => {
//         if (pausedRef.current) return;
//         setActive((prev) => (prev + 1) % servicesData.length);
//       }, 5000);
//     }
//     function stop() {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//         intervalRef.current = null;
//       }
//     }

//     function onVisibility() {
//       pausedRef.current = document.hidden;
//       if (document.hidden) stop();
//       else {
//         stop();
//         start();
//       }
//     }

//     document.addEventListener("visibilitychange", onVisibility);
//     start();
//     return () => {
//       document.removeEventListener("visibilitychange", onVisibility);
//       stop();
//     };
//   }, []);

//   function resetAutoplay() {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//     if (!reduceMotionRef.current && servicesData.length > 1 && !pausedRef.current) {
//       intervalRef.current = setInterval(() => {
//         if (pausedRef.current) return;
//         setActive((prev) => (prev + 1) % servicesData.length);
//       }, 5000);
//     }
//   }

//   function goNext() {
//     setActive((i) => (i + 1) % servicesData.length);
//     resetAutoplay();
//   }
//   function goPrev() {
//     setActive((i) => (i - 1 + servicesData.length) % servicesData.length);
//     resetAutoplay();
//   }

//   // Equalize panel heights across slides
//   useEffect(() => {
//     if (!panelsWrapRef.current) return;

//     const update = () => {
//       const max = Math.max(0, ...panelRefs.current.map((el) => (el ? el.scrollHeight : 0)));
//       panelsWrapRef.current.style.setProperty("--panel-h", `${max}px`);
//     };

//     update();
//     const ro = new ResizeObserver(update);
//     panelRefs.current.forEach((el) => el && ro.observe(el));
//     window.addEventListener("resize", update);
//     return () => {
//       ro.disconnect();
//       window.removeEventListener("resize", update);
//     };
//   }, []);

//   const iconAccentStyleSlide = { color: SLIDE_ONLY_ACCENT };

//   return (
//     <div className="page-bg text-white">
//       {/* HERO */}
//       <section className="pt-28 pb-14 px-6">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
//             <span className="block">Empowering Success</span>
//             <span className="block text-cyan-400 mt-2">Your Business, Our Solution</span>
//           </h1>
//           <p className="text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
//             Enabling business success with independent assurance, actionable risk solutions,
//             growth-focused consulting, and KPI-driven support—so organizations thrive and
//             channel energy where it matters most
//           </p>

//           {/* TAB BUTTONS */}
//           <div
//             className={`mt-12 flex flex-wrap justify-center gap-4 sm:gap-5`}
//             role="tablist"
//             aria-label="Services"
//             onKeyDown={onTabKeyDown}
//           >
//             {servicesData.map((s, i) => {
//               const isActive = active === i;
//               const accent = isActive ? GLOBAL_ACCENT : SLIDE_ACCENT;
//               return (
//                 <button
//                   key={s.id}
//                   ref={(el) => (tabsRef.current[i] = el)}
//                   role="tab"
//                   id={`tab-${s.id}`}
//                   aria-controls={`panel-${s.id}`}
//                   aria-selected={isActive}
//                   tabIndex={isActive ? 0 : -1}
//                   onClick={() => {
//                     setActive(i);
//                     resetAutoplay();
//                   }}
//                   className={`flex items-center gap-3 px-5 sm:px-7 py-4 rounded-xl min-w-[240px] w-full sm:w-auto transition-transform transform ${
//                     isActive ? "scale-100 shadow-lg" : "hover:scale-[1.02]"
//                   } card-dark`}
//                   style={{
//                     border: `1px solid ${accent}40`,
//                     boxShadow: isActive ? `0 0 14px ${accent}80` : undefined,
//                   }}
//                 >
//                   <span
//                     className="w-10 h-10 rounded-lg flex items-center justify-center"
//                     style={{ background: "rgba(255,255,255,0.04)" }}
//                   >
//                     {React.cloneElement(s.icon, { style: { color: accent } })}
//                   </span>
//                   <span className="text-left">
//                     <div className="text-sm font-semibold text-white">{s.title}</div>
//                     <div
//                       className="text-xs text-gray-400 truncate max-w-[180px] hidden sm:block"
//                       aria-hidden
//                     >
//                       {s.description}
//                     </div>
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* PANELS */}
//       <section
//         className="px-4 sm:px-6 pb-12"
//         onMouseEnter={() => {
//           pausedRef.current = true;
//         }}
//         onMouseLeave={() => {
//           pausedRef.current = false;
//           resetAutoplay();
//         }}
//       >
//         <div className="max-w-6xl mx-auto relative" ref={panelsWrapRef}>
//           {/* Arrows */}
//           {servicesData.length > 1 && (
//             <>
//               <button
//                 type="button"
//                 onClick={goPrev}
//                 aria-label="Previous service"
//                 className={`hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-20 rounded-full p-3 card-dark hover:bg-white/10 focus:outline-none`}
//                 style={{
//                   border: `1px solid ${SLIDE_ONLY_ACCENT}40`,
//                   left: '-64px' /* moved further left so it doesn't overlap text */,
//                 }}
//               >
//                 <ChevronLeft className="w-5 h-5" style={iconAccentStyleSlide} />
//               </button>
//               <button
//                 type="button"
//                 onClick={goNext}
//                 aria-label="Next service"
//                 className={`hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-20 rounded-full p-3 card-dark hover:bg-white/10 focus:outline-none`}
//                 style={{
//                   border: `1px solid ${SLIDE_ONLY_ACCENT}40`,
//                   right: '-64px' /* moved further right so it doesn't overlap text */,
//                 }}
//               >
//                 <ChevronRight className="w-5 h-5" style={iconAccentStyleSlide} />
//               </button>
//             </>
//           )}

//           {servicesData.map((s, idx) => {
//             const isActive = idx === active;

//             // default 10-slot list for slides 1 & 2
//             const MAX_SLOTS = 10;
//             const items = s.specializations.slice(0, MAX_SLOTS);
//             const placeholders = Array.from(
//               { length: Math.max(0, MAX_SLOTS - items.length) },
//               () => ({ __placeholder: true })
//             );
//             const tenSlots = [...items, ...placeholders];

//             const isManagement = s.id === "management";

//             return (
//               <article
//                 key={s.id}
//                 id={`panel-${s.id}`}
//                 role="tabpanel"
//                 aria-labelledby={`tab-${s.id}`}
//                 aria-hidden={!isActive}
//                 className={`transition-all duration-500 ease-in-out overflow-hidden ${
//                   isActive ? "opacity-100 mt-6 sm:mt-8" : "opacity-0"
//                 }`}
//                 style={{ maxHeight: isActive ? "var(--panel-h)" : 0 }}
//               >
//                 {/* =========================
//                     CUSTOM 3RD SLIDE — MATCHING YOUR SKETCH
//                    ========================= */}
//                 {isManagement ? (
//                   <div
//                     ref={(el) => (panelRefs.current[idx] = el)}
//                     className="relative w-full"
//                   >
//                     {/* 1) Leadership (full-width row) */}
//                     <div className="mb-6">
//                       <h3 className="text-lg font-semibold mb-3 text-white">
//                         {MGMT_GROUPS[0].title}
//                       </h3>

//                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                         {MGMT_GROUPS[0].items.map((text, i) => (
//                           <div
//                             key={i}
//                             className="glossy-rect-inline rounded-xl p-4 min-h-[64px] flex items-center gap-3"
//                           >
//                             <span
//                               className="inline-flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
//                               style={{
//                                 background: "rgba(10,226,255,0.10)",
//                                 border: `1px solid ${SLIDE_ONLY_ACCENT}59`,
//                                 boxShadow: `0 0 10px ${SLIDE_ONLY_ACCENT}55`,
//                               }}
//                             >
//                               <CheckCircle2
//                                 className="w-5 h-5"
//                                 style={{
//                                   color: SLIDE_ONLY_ACCENT,
//                                   filter: `drop-shadow(0 0 6px ${SLIDE_ONLY_ACCENT}88)`,
//                                 }}
//                               />
//                             </span>
//                             <span className="text-sm text-gray-100 leading-relaxed break-words">
//                               {text}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* 2) Business Process Outsourcing (full-width row) */}
//                     <div className="mb-6">
//                       <h3 className="text-lg font-semibold mb-3 text-white">
//                         {MGMT_GROUPS[1].title}
//                       </h3>
//                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//                         {MGMT_GROUPS[1].items.map((text, i) => (
//                           <div
//                             key={i}
//                             className="glossy-rect-inline rounded-xl p-4 min-h-[64px] flex items-center gap-3"
//                           >
//                             <span
//                               className="inline-flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
//                               style={{
//                                 background: "rgba(10,226,255,0.10)",
//                                 border: `1px solid ${SLIDE_ONLY_ACCENT}59`,
//                                 boxShadow: `0 0 10px ${SLIDE_ONLY_ACCENT}55`,
//                               }}
//                             >
//                               <CheckCircle2
//                                 className="w-5 h-5"
//                                 style={{
//                                   color: SLIDE_ONLY_ACCENT,
//                                   filter: `drop-shadow(0 0 6px ${SLIDE_ONLY_ACCENT}88)`,
//                                 }}
//                               />
//                             </span>
//                             <span className="text-sm text-gray-100 leading-relaxed break-words">
//                               {text}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* 3) SETTING UP BUSINESSES + IMAGE (this row is 70% / 30% on md+) */}
//                     <div className="setting-image-grid">
//                       {/* left: 70% on md — contains 2x2 grid */}
//                       <div className="setting-left flex flex-col">
//                         <h3 className="text-lg font-semibold mb-3 text-white">{MGMT_GROUPS[2].title}</h3>

//                         <div className="flex-grow">
//                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                             {MGMT_GROUPS[2].items.map((text, i) => (
//                               <div
//                                 key={i}
//                                 className="glossy-rect-inline rounded-xl p-4 min-h-[64px] flex items-center gap-3"
//                               >
//                                 <span
//                                   className="inline-flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
//                                   style={{
//                                     background: "rgba(10,226,255,0.10)",
//                                     border: `1px solid ${SLIDE_ONLY_ACCENT}59`,
//                                     boxShadow: `0 0 10px ${SLIDE_ONLY_ACCENT}55`,
//                                   }}
//                                 >
//                                   <CheckCircle2
//                                     className="w-5 h-5"
//                                     style={{
//                                       color: SLIDE_ONLY_ACCENT,
//                                       filter: `drop-shadow(0 0 6px ${SLIDE_ONLY_ACCENT}88)`,
//                                     }}
//                                   />
//                                 </span>
//                                 <span className="text-sm text-gray-100 leading-relaxed break-words">
//                                   {text}
//                                 </span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>

//                         {/* footnote under the setting-up content */}
//                         <div
//                           className="mt-4 p-4 rounded-xl glossy-footnote-tab flex items-center gap-3"
//                           style={{ border: `1px solid ${SLIDE_ONLY_ACCENT}3d` }}
//                         >
//                           <span
//                             className="inline-flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
//                             style={{
//                               background: "rgba(10,226,255,0.10)",
//                               border: `1px solid ${SLIDE_ONLY_ACCENT}59`,
//                               boxShadow: `0 0 10px ${SLIDE_ONLY_ACCENT}55`,
//                             }}
//                           >
//                             <CheckCircle2
//                               className="w-5 h-5"
//                               style={{
//                                 color: SLIDE_ONLY_ACCENT,
//                                 filter: `drop-shadow(0 0 6px ${SLIDE_ONLY_ACCENT}88)`,
//                               }}
//                             />
//                           </span>
//                           <div className="text-sm text-gray-100">{MGMT_FOOTNOTE}</div>
//                         </div>
//                       </div>

//                       {/* right: 30% on md — image box that lines up with the setting-left and footnote */}
//                       <div className="image-col">
//                         <div
//                           className="rounded-2xl overflow-hidden glossy-img relative"
//                           style={{ border: `1px solid ${SLIDE_ONLY_ACCENT}26`, minHeight: 220 }}
//                         >
//                           <img
//                             src={s.image}
//                             alt="Management support visual"
//                             loading="lazy"
//                             className="w-full h-full object-cover"
//                             onError={(e) => (e.currentTarget.style.display = "none")}
//                           />
//                           {/* Dark overlay for better text readability */}
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//                           {/* Service title overlay */}
//                           <div className="absolute bottom-4 left-4 right-4">
//                             <div className="text-white">
//                               <div className="flex items-center gap-2 mb-2">
//                                 <div
//                                   className="w-8 h-8 rounded-lg flex items-center justify-center"
//                                   style={{ background: "rgba(255,255,255,0.08)" }}
//                                 >
//                                   {React.cloneElement(s.icon, { 
//                                     style: { color: SLIDE_ONLY_ACCENT },
//                                     className: "w-5 h-5"
//                                   })}
//                                 </div>
//                               </div>
//                               <h3 className="text-lg font-semibold">{s.title}</h3>
//                               <p className="text-sm text-gray-200 opacity-90 mt-1">{s.description}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   /* ===== Default slides (70/30) — tiles now allow wrapping to avoid truncation ===== */
//                   <div
//                     ref={(el) => (panelRefs.current[idx] = el)}
//                     className={`flex flex-col md:flex-row gap-6 sm:gap-8 items-start`}
//                   >
//                     {/* LEFT — 70% */}
//                     <div className="w-full md:w-[70%] min-w-0">
//                       {/* ====== NEW: for Business (second) slide show elevateText in the left 70% area ====== */}
//                       {s.elevateText && s.id === "business" && (
//                         <div
//                           className="rounded-2xl p-6 mb-6"
//                           style={{
//                             background: "linear-gradient(180deg, rgba(0,0,0,0.65), rgba(0,0,0,0.5))",
//                             border: `1px solid ${SLIDE_ONLY_ACCENT}26`,
//                             boxShadow: `0 10px 30px rgba(0,0,0,0.6)`,
//                             minHeight: 140,
//                             display: "flex",
//                             flexDirection: "column",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <div className="text-2xl md:text-3xl font-extrabold text-white tracking-wider">
//                             {s.elevateText.title}
//                           </div>
//                           <div className="text-sm md:text-base text-gray-200 mt-2">
//                             {s.elevateText.subtitle}
//                           </div>
//                         </div>
//                       )}

//                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                         {tenSlots.map((spec, i2) => {
//                           const placeholder = spec.__placeholder;
//                           const text = placeholder
//                             ? "placeholder"
//                             : typeof spec === "string"
//                             ? spec
//                             : spec.text;
//                           const img =
//                             placeholder || typeof spec === "string" ? null : spec.img;

//                           return (
//                             <li
//                               key={i2}
//                               className={`flex gap-3 items-center p-4 rounded-xl card-dark ${
//                                 placeholder ? "invisible" : ""
//                               }`}
//                               style={{
//                                 border: `1px solid ${SLIDE_ONLY_ACCENT}26`,
//                                 minHeight: "64px",
//                               }}
//                             >
//                               <span
//                                 className="inline-flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0"
//                                 style={{
//                                   background: "rgba(10,226,255,0.10)",
//                                   border: `1px solid ${SLIDE_ONLY_ACCENT}59`,
//                                   boxShadow: `0 0 10px ${SLIDE_ONLY_ACCENT}55`,
//                                 }}
//                               >
//                                 <CheckCircle2
//                                   className="w-5 h-5"
//                                   style={{
//                                     color: SLIDE_ONLY_ACCENT,
//                                     filter: `drop-shadow(0 0 6px ${SLIDE_ONLY_ACCENT}88)`,
//                                   }}
//                                 />
//                               </span>
//                               <span className="text-gray-100 text-sm leading-relaxed min-w-0 break-words">
//                                 {text}
//                                 {img && (
//                                   <img
//                                     src={img}
//                                     alt=""
//                                     className="w-4 h-4 object-contain opacity-70 inline-block ml-2"
//                                     loading="lazy"
//                                     onError={(e) =>
//                                       (e.currentTarget.style.display = "none")
//                                     }
//                                   />
//                                 )}
//                               </span>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </div>

//                     {/* RIGHT — 30% (image card) */}
//                     <div
//                       className="relative rounded-2xl overflow-hidden card-dark w-full md:w-[30%] min-w-0"
//                       style={{ border: `1px solid ${SLIDE_ONLY_ACCENT}26`, height: "auto", minHeight: "220px" }}
//                     >
//                       <img
//                         src={s.image}
//                         alt={s.title}
//                         loading="lazy"
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.currentTarget.style.display = "none";
//                         }}
//                       />
//                       {/* Dark overlay for better text readability */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//                       <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:px-6">
//                         {/* Icon */}
//                         <div
//                           className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-md mb-3"
//                           style={{ background: "rgba(255,255,255,0.08)" }}
//                         >
//                           {React.cloneElement(s.icon, { style: iconAccentStyleSlide })}
//                         </div>

//                         {/* Title */}
//                         <h2 className="text-2xl sm:text-3xl font-semibold text-white drop-shadow-lg text-center">
//                           {s.title}
//                         </h2>

//                         {/* NOTE: removed showing s.elevateText in the image for the business slide.
//                             We only show elevateText in the left 70% (above). For all other slides
//                             where s.elevateText might exist and is NOT business, we keep the previous behavior. */}
//                         {s.elevateText && s.id !== "business" ? (
//                           <div className="mt-4 text-center">
//                             <div className="text-lg font-bold text-cyan-400 mb-1 tracking-wider">
//                               {s.elevateText.title}
//                             </div>
//                             <div className="text-sm text-gray-200 drop-shadow-md">
//                               {s.elevateText.subtitle}
//                             </div>
//                           </div>
//                         ) : (
//                           /* Regular description for other slides or business (business will now show left) */
//                           <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-200 max-w-lg mx-auto hidden md:block drop-shadow-md text-center">
//                             {s.description}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       {/* ===========================
//            OUR CLIENTS — LIGHT TILES
//          =========================== */}
//       <section
//         id="our-clients"
//         className="bg-black py-14 sm:py-16 px-4 border-t border-neutral-800"
//       >
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">
//             Clients Thrived Through{" "}
//             <span className="text-cyan-400">Our Collaborative Leadership</span>
//           </h2>

//           {/* Track 1 - 9 logos */}
//           <div className="overflow-hidden relative w-full mb-6 sm:mb-8 client-track">
//             <div className="flex animate-slide-left gap-4 sm:gap-6 w-max items-center">
//               {clientRow1.concat(clientRow1).map((logo, i) => (
//                 <div
//                   key={`row1-${i}`}
//                   className="w-32 sm:w-40 h-20 sm:h-24 rounded-xl client-tile-light grid place-items-center transition"
//                 >
//                   <div className="logo-frame w-full h-full flex items-center justify-center px-3">
//                     <LogoTile src={logo} alt={`Client ${Math.floor(i % clientRow1.length) + 1}`} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Track 2 - 9 logos */}
//           <div className="overflow-hidden relative w-full">
//             <div className="flex animate-slide-right gap-4 sm:gap-6 w-max items-center">
//               {clientRow2.concat(clientRow2).map((logo, i) => (
//                 <div
//                   key={`row2-${i}`}
//                   className="w-32 sm:w-40 h-20 sm:h-24 rounded-xl client-tile-light grid place-items-center transition"
//                 >
//                   <div className="logo-frame w-full h-full flex items-center justify-center px-3">
//                     <LogoTile src={logo} alt={`Client ${Math.floor(i % clientRow2.length) + 10}`} />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Animations & client logo CSS (scoped) */}
//         <style jsx>{`
//           @keyframes slide-left {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-50%);
//             }
//           }
//           @keyframes slide-right {
//             0% {
//               transform: translateX(-50%);
//             }
//             100% {
//               transform: translateX(0);
//             }
//           }
//           .animate-slide-left {
//             animation: slide-left 36s linear infinite;
//           }
//           .animate-slide-right {
//             animation: slide-right 36s linear infinite;
//           }
//           .animate-slide-left:hover,
//           .animate-slide-right:hover {
//             animation-play-state: paused;
//           }
//           @media (prefers-reduced-motion: reduce) {
//             .animate-slide-left,
//             .animate-slide-right {
//               animation: none !important;
//             }
//           }

//           /* Light client tile EXACT color requested */
//           .client-tile-light {
//             background: #f8feff; /* exact */
//             border: 1px solid rgba(0, 0, 0, 0.06);
//             box-shadow: 0 6px 18px rgba(9, 10, 12, 0.35),
//               inset 0 1px 0 rgba(255, 255, 255, 0.6);
//             backdrop-filter: none;
//             transition: transform 220ms ease, box-shadow 220ms ease,
//               background 220ms ease;
//             overflow: visible;
//           }
//           .client-tile-light:hover {
//             transform: translateY(-3px);
//             box-shadow: 0 12px 24px rgba(9, 10, 12, 0.45),
//               inset 0 1px 0 rgba(255, 255, 255, 0.7);
//           }

//           .logo-frame {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             width: 100%;
//             height: 100%;
//             padding: 0.375rem;
//             overflow: visible;
//           }

//           .client-logo {
//             max-width: calc(100% - 12px);
//             max-height: calc(100% - 12px);
//             width: auto;
//             height: auto;
//             object-fit: contain;
//             object-position: center;
//             display: block;
//             vertical-align: middle;
//             transition: transform 220ms ease, opacity 220ms ease;
//             filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.08));
//           }
//           .client-logo:hover {
//             transform: scale(1.04);
//           }

//           @media (max-width: 639px) {
//             .w-40 { width: 86px; }
//             .h-24 { height: 56px; }
//           }
//         `}</style>
//       </section>

//       {/* ===========================
//            TESTIMONIALS — static (no autoplay, only the two provided)
//          =========================== */}
//       <TestimonialsSection />

//       {/* Page-level styles */}
//       <style jsx>{`
//         .page-bg {
//           min-height: 100%;
//           background: linear-gradient(
//             180deg,
//             #050608 0%,
//             #0a0c0e 45%,
//             #07090b 100%
//           );
//         }
//         .card-dark {
//           background: linear-gradient(
//             180deg,
//             rgba(255, 255, 255, 0.02),
//             rgba(0, 0, 0, 0.45)
//           );
//           border: 1px solid rgba(255, 255, 255, 0.03);
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
//           backdrop-filter: blur(6px);
//         }
//         article[role="tabpanel"] {
//           transition: opacity 420ms ease, max-height 440ms ease;
//         }

//         /* ===== Glossy shapes for Management slide ===== */
//         .glossy-pill-inline,
//         .glossy-rect-inline {
//           background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.35));
//           border: 1px solid rgba(10, 226, 255, 0.22);
//           box-shadow: 0 8px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);
//         }
//         .glossy-pill-inline { border-radius: 9999px; }
//         .glossy-rect-inline { border-radius: 12px; }

//         .glossy-img { box-shadow: 0 10px 28px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06); }

//         /* Make sure text wraps and doesn't get truncated in management blocks */
//         .glossy-pill-inline span, .glossy-rect-inline span {
//           white-space: normal;
//           word-break: break-word;
//         }

//         /* SETTING-UP + IMAGE layout:
//            - leadership & BPO are full width (stacked)
//            - the 'setting-image-grid' becomes a 70% / 30% grid on md+
//            - the image aligns to the top of the setting-up area and stretches down to include the footnote
//         */
//         .setting-image-grid { display: block; gap: 1rem; }
//         .setting-left { width: 100%; }
//         .image-col { margin-top: 16px; }

//         @media (min-width: 768px) {
//           .setting-image-grid {
//             display: grid;
//             grid-template-columns: 70% 30%;
//             gap: 24px;
//             align-items: start;
//           }
//           .image-col { margin-top: 0; align-self: stretch; }
//           .image-col .glossy-img { height: 100%; min-height: 240px; max-height: 320px; }
//           .image-col .glossy-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
//         }

//         /* FOOTNOTE tab style */
//         .glossy-footnote-tab {
//           background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.36));
//         }

//       `}</style>
//     </div>
//   );
// }

// /* ===========================
//    TESTIMONIALS SECTION COMPONENTS (updated: static, no autoplay)
//    =========================== */
// function TestimonialsSection() {
//   return (
//     <section id="testimonials" className="max-w-6xl mx-auto px-4 py-14 sm:py-16">
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
//         <div className="flex items-center gap-3">
//           <div className="w-9 h-9 rounded-lg grid place-items-center card-dark">
//             <Quote style={{ color: GLOBAL_ACCENT }} className="w-5 h-5" />
//           </div>
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold text-white">
//               What Our Clients Say
//             </h2>
//             <p className="text-sm text-gray-400">Trusted by industry leaders worldwide</p>
//           </div>
//         </div>
//         {/* Removed autoplay/revolving controls per request */}
//       </div>

//       {/* Static presentation of provided testimonials (only the two entries) */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {testimonials.map((t) => (
//           <TestimonialCard key={t.id} t={t} />
//         ))}
//       </div>

//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//         .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
//       `}</style>
//     </section>
//   );
// }

// /* ===========================
//    Testimonial card
//    =========================== */
// function TestimonialCard({ t }) {
//   return (
//     <div className="min-h-[220px] snap-start bg-neutral-900/80 backdrop-blur-md border border-white/10 p-5 sm:p-6 rounded-2xl shadow-lg flex flex-col justify-between">
//       <div className="flex items-center gap-2 mb-3">
//         {Array.from({ length: t.rating || 5 }).map((_, i) => (
//           <Star key={i} className="w-4 h-4" style={{ color: GLOBAL_ACCENT }} />
//         ))}
//       </div>

//       <div className="flex-1">
//         <p className="text-neutral-200 leading-relaxed italic text-sm" style={{ lineHeight: 1.6 }}>
//           "{t.feedback}"
//         </p>
//       </div>

//       <div className="flex items-center gap-3 mt-6">
//         <img
//           src={t.img}
//           alt={t.client}
//           className="w-14 h-14 rounded-full object-cover ring-2 ring-white/10 flex-shrink-0"
//           loading="lazy"
//           onError={(e) => (e.currentTarget.style.display = "none")}
//         />
//         <div className="min-w-0">
//           <div className="text-white font-semibold text-sm truncate">{t.name}</div>
//           {t.role && <div className="text-xs text-gray-400 truncate">{t.role}</div>}
//           <div className="text-xs" style={{ color: GLOBAL_ACCENT }}>
//             {t.client}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// src/pages/Services.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Users,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

const GLOBAL_ACCENT = "#0AE2FF";
const SLIDE_ACCENT = "#F8BA63";
const SLIDE_ONLY_ACCENT = GLOBAL_ACCENT;

const servicesData = [
  {
    id: "assurance",
    title: "Assurance & Advisory",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/images/service21.jpg",
    description:
      "Internal Audit,  Risk Management, Controls and Process Optimisation solutions…",
    specializations: [
      { text: "Internal Audit, Process and Operational Audits", img: "/icons/audit.png" },
      { text: "Enterprise Risk Management ", img: "/icons/risk.png" },
      { text: "Internal Controls Framework", img: "/icons/controls.png" },
      "Governance Maturity Assessments and Implementation (SMEs and Corporates)",
      "Standard Operating Procedures and Policies",
      "Information Technology General Controls",
      "ERP Application Controls Assessment",
      "Pre Audit and Concurrent Audit",
      "Data Security and Data Privacy",
      "Due diligence and regulatory health-checks",
    ],
  },
  {
    id: "business",
    title: "Management Consulting & Business Advisory",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/images/services22.jpg",
    description: "Analytics, Digital Transformation and Automation Advisory….",
    specializations: [
      "Process Automation – Automation of business process to bring efficiency and scalability",
      "Business Analytics – Automated business analytics scripts",
      "Fixed Assets Management - FAR Maintenance, Verification and Reconciliation",
      "Contract Compliance and Third Party Risk Management",
      "Regulatory Advisory and Compliance Frameworks",
      "Digital Transformation and Automation Advisory",
    ],
    elevateText: {
      title: "Elevate • Innovate • Accelerate",
      subtitle: "Transforming Business Through Strategic Excellence",
    },
  },
  {
    id: "management",
    title: "Accounting & Management Support",
    icon: <Users className="w-6 h-6" />,
    image: "/images/services23.jpg",
    description:
      "Leadership and Governance (Retainership), Process Outsourcing and Compliance Solutions…",
    specializations: [],
  },
];

const MGMT_GROUPS = [
  {
    key: "leadership",
    title: "Leadership & Governance (Retainership)",
    shape: "rect",
    items: [
      "Chief Financial Officer",
      "Chief Risk Officer (CRO) and Internal Controls",
      "Legal and Compliance",
    ],
  },
  {
    key: "bpo",
    title: "Business Process Outsourcing",
    shape: "rect",
    items: [
      "Accounting, Book Keeping and Management Reporting",
      "Accounts Payable and Accounts Receivables",
      "Hiring and Payroll",
    ],
  },
  {
    key: "setup",
    title: "Setting up Businesses",
    shape: "rect2x2",
    items: [
      "Incorporation and Registration",
      "Business Valuation",
      "Corporate law Compliances",
      "Direct / Indirect Taxes",
    ],
  },
];

const MGMT_FOOTNOTE =
  "Regulatory approvals and support in handling notices, litigation, etc.";

const clients = [
  "/images/chinaclub.jpeg",
  "/images/gawar.jpeg",
  "/images/skh.jpeg",
  "/images/fybros.jpeg",
  "/images/mamapay.jpeg",
  "/images/oxford.jpeg",
  "/images/shareindia.png",
  "/images/tasc.jpeg",
  "/images/zingbus.jpeg",
  "/images/simplc.jpeg",
  "/images/ralco.jpeg",
  "/images/intergloble.jpeg",
  "/images/aviol.jpeg",
  "/images/ikia.jpeg",
  "/images/aqulite.jpeg",
  "/images/kimbal.jpg",
];

const clientRow1 = clients.slice(0, 9);
const clientRow2 = clients.slice(9, 18);

const testimonials = [
  {
    id: 1,
    client: "",
    name: "Satya Dev Sharma",
    role: "Head Risk & Compliance",
    feedback:
      "The quality of the deliverables submitted by the PSBS team has been truly commendable, reflecting a high level of professionalism and attention to detail. PSBS Team has demonstrated outstanding on-ground performance with remarkable dedication.",
    img: "/images/satyadev.jpeg",
    rating: 5,
  },
  {
    id: 2,
    client: "India Government Mint, Noida",
    name: "Project: Developing Framework for Internal Financial Controls over Financial Reporting",
    role: "",
    feedback:
      "We are pleased to confirm that the project was delivered in a timely and professional manner, and the management is satisfied with the quality of work performed by PSBS. The consultant has demonstrated strong technical expertise, responsiveness and commitment throughout the engagement. We appreciate the efforts of PSBS in contributing to the strengthening of the internal control framework of the Company",
    img: "/images/testimonial1.jpeg",
    rating: 5,
  },
  {
    id: 3,
    client: "AVI-OIL INDIA [P] LTD",
    name: "Monica Garg",
    role: "CFO",
    feedback:
      "We appreciate the professionalism, technical expertise, and commitment demonstrated by the PSBS team during the Audit Trail Assessment engagement. Their structured approach, attention to detail, and practical insights added significant value to the assignment. We are pleased with the quality of work and support provided throughout the project.They not only completed the assignment within the defined timelines but also mentored the teams on process enhancements, resulting in superior deliverables",
    img: "/images/aviol.jpeg",
    rating: 5,
  },
];

function LogoTile({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      className="client-logo"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef([]);
  const intervalRef = useRef(null);
  const pausedRef = useRef(false);
  const reduceMotionRef = useRef(false);
  const panelsWrapRef = useRef(null);
  const panelRefs = useRef([]);
  const location = useLocation();

  const getServiceIndexFromURL = () => {
    const urlParams = new URLSearchParams(location.search);
    const mainService = urlParams.get("main");
    const serviceIndex = urlParams.get("serviceIndex");
    if (serviceIndex !== null) {
      const index = parseInt(serviceIndex, 10);
      if (index >= 0 && index < servicesData.length) return index;
    }
    if (mainService) {
      const serviceMap = {
        "Assurance and Advisory": 0,
        "Management Consulting and Business Advisory": 1,
        "Accounting & Management Support": 2,
      };
      return serviceMap[mainService] || 0;
    }
    return 0;
  };

  useEffect(() => {
    const initialIndex = getServiceIndexFromURL();
    setActive(initialIndex);
  }, [location.search]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      reduceMotionRef.current =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || false;
    }
  }, []);

  function onTabKeyDown(e) {
    const key = e.key;
    let next = active;
    if (key === "ArrowRight") next = (active + 1) % servicesData.length;
    else if (key === "ArrowLeft") next = (active - 1 + servicesData.length) % servicesData.length;
    else if (key === "Home") next = 0;
    else if (key === "End") next = servicesData.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
    resetAutoplay();
  }

  useEffect(() => {
    tabsRef.current = tabsRef.current.slice(0, servicesData.length);
  }, []);

  useEffect(() => {
    function start() {
      if (servicesData.length <= 1) return;
      if (reduceMotionRef.current) return;
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        if (pausedRef.current) return;
        setActive((prev) => (prev + 1) % servicesData.length);
      }, 5000);
    }
    function stop() {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    function onVisibility() {
      pausedRef.current = document.hidden;
      if (document.hidden) stop();
      else { stop(); start(); }
    }
    document.addEventListener("visibilitychange", onVisibility);
    start();
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      stop();
    };
  }, []);

  function resetAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (!reduceMotionRef.current && servicesData.length > 1 && !pausedRef.current) {
      intervalRef.current = setInterval(() => {
        if (pausedRef.current) return;
        setActive((prev) => (prev + 1) % servicesData.length);
      }, 5000);
    }
  }

  function goNext() { setActive((i) => (i + 1) % servicesData.length); resetAutoplay(); }
  function goPrev() { setActive((i) => (i - 1 + servicesData.length) % servicesData.length); resetAutoplay(); }

  useEffect(() => {
    if (!panelsWrapRef.current) return;
    const update = () => {
      const max = Math.max(0, ...panelRefs.current.map((el) => (el ? el.scrollHeight : 0)));
      panelsWrapRef.current.style.setProperty("--panel-h", `${max}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    panelRefs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", update);
    return () => { ro.disconnect(); window.removeEventListener("resize", update); };
  }, []);

  const iconAccentStyleSlide = { color: SLIDE_ONLY_ACCENT };

  return (
    
    <div className="page-bg text-white">

    <Helmet>
      <title>Business Consulting Services | PSBS India</title>

      <meta
        name="description"
content="PSBS (Process Sage Business Solutions) provides management consulting,
internal audit, business growth consulting and risk advisory across India."
      />
      <meta
  name="keywords"
  content="
  business consulting services,
  management consulting,
  internal audit,
  business advisory,
  compliance services,
  financial advisory,
  risk management,
  PSBS services,
  Empowering Success , Your Business, Our Solution"
/>

      <link
        rel="canonical"
        href="https://psbsindia.com/"
      />
    </Helmet>
      {/* HERO */}
      <section className="pt-28 pb-14 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="block">Empowering Success</span>
            <span className="block text-cyan-400 mt-2">Your Business, Our Solution</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            Enabling business success with independent assurance, actionable risk solutions,
            growth-focused consulting, and KPI-driven support—so organizations thrive and
            channel energy where it matters most
          </p>

          <div
            className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-5"
            role="tablist"
            aria-label="Services"
            onKeyDown={onTabKeyDown}
          >
            {servicesData.map((s, i) => {
              const isActive = active === i;
              const accent = isActive ? GLOBAL_ACCENT : SLIDE_ACCENT;
              return (
                <button
                  key={s.id}
                  ref={(el) => (tabsRef.current[i] = el)}
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-controls={`panel-${s.id}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => { setActive(i); resetAutoplay(); }}
                  className={`flex items-center gap-3 px-5 sm:px-7 py-4 rounded-xl min-w-[240px] w-full sm:w-auto transition-transform transform ${
                    isActive ? "scale-100 shadow-lg" : "hover:scale-[1.02]"
                  } card-dark`}
                  style={{
                    border: `1px solid ${accent}40`,
                    boxShadow: isActive ? `0 0 14px ${accent}80` : undefined,
                  }}
                >
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    {React.cloneElement(s.icon, { style: { color: accent } })}
                  </span>
                  <span className="text-left">
                    <div className="text-sm font-semibold text-white">{s.title}</div>
                    <div className="text-xs text-gray-400 truncate max-w-[180px] hidden sm:block" aria-hidden>
                      {s.description}
                    </div>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PANELS */}
      <section
        className="px-4 sm:px-6 pb-12"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; resetAutoplay(); }}
      >
        <div className="max-w-6xl mx-auto relative" ref={panelsWrapRef}>
          {servicesData.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous service"
                className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-20 rounded-full p-3 card-dark hover:bg-white/10 focus:outline-none"
                style={{ border: `1px solid ${SLIDE_ONLY_ACCENT}40`, left: "-64px" }}
              >
                <ChevronLeft className="w-5 h-5" style={iconAccentStyleSlide} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next service"
                className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-20 rounded-full p-3 card-dark hover:bg-white/10 focus:outline-none"
                style={{ border: `1px solid ${SLIDE_ONLY_ACCENT}40`, right: "-64px" }}
              >
                <ChevronRight className="w-5 h-5" style={iconAccentStyleSlide} />
              </button>
            </>
          )}

          {servicesData.map((s, idx) => {
            const isActive = idx === active;
            const MAX_SLOTS = 10;
            const items = s.specializations.slice(0, MAX_SLOTS);
            const placeholders = Array.from(
              { length: Math.max(0, MAX_SLOTS - items.length) },
              () => ({ __placeholder: true })
            );
            const tenSlots = [...items, ...placeholders];
            const isManagement = s.id === "management";

            return (
              <article
                key={s.id}
                id={`panel-${s.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${s.id}`}
                aria-hidden={!isActive}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isActive ? "opacity-100 mt-6 sm:mt-8" : "opacity-0"
                }`}
                style={{ maxHeight: isActive ? "var(--panel-h)" : 0 }}
              >
                {isManagement ? (
                  <div ref={(el) => (panelRefs.current[idx] = el)} className="relative w-full">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-white">{MGMT_GROUPS[0].title}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {MGMT_GROUPS[0].items.map((text, i) => (
                          <div key={i} className="glossy-rect-inline rounded-xl p-4 min-h-[64px] flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0" style={{ background: "rgba(10,226,255,0.10)", border: `1px solid ${SLIDE_ONLY_ACCENT}59`, boxShadow: `0 0 10px ${SLIDE_ONLY_ACCENT}55` }}>
                              <CheckCircle2 className="w-5 h-5" style={{ color: SLIDE_ONLY_ACCENT, filter: `drop-shadow(0 0 6px ${SLIDE_ONLY_ACCENT}88)` }} />
                            </span>
                            <span className="text-sm text-gray-100 leading-relaxed break-words">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-white">{MGMT_GROUPS[1].title}</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {MGMT_GROUPS[1].items.map((text, i) => (
                          <div key={i} className="glossy-rect-inline rounded-xl p-4 min-h-[64px] flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0" style={{ background: "rgba(10,226,255,0.10)", border: `1px solid ${SLIDE_ONLY_ACCENT}59`, boxShadow: `0 0 10px ${SLIDE_ONLY_ACCENT}55` }}>
                              <CheckCircle2 className="w-5 h-5" style={{ color: SLIDE_ONLY_ACCENT, filter: `drop-shadow(0 0 6px ${SLIDE_ONLY_ACCENT}88)` }} />
                            </span>
                            <span className="text-sm text-gray-100 leading-relaxed break-words">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="setting-image-grid">
                      <div className="setting-left flex flex-col">
                        <h3 className="text-lg font-semibold mb-3 text-white">{MGMT_GROUPS[2].title}</h3>
                        <div className="flex-grow">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {MGMT_GROUPS[2].items.map((text, i) => (
                              <div key={i} className="glossy-rect-inline rounded-xl p-4 min-h-[64px] flex items-center gap-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0" style={{ background: "rgba(10,226,255,0.10)", border: `1px solid ${SLIDE_ONLY_ACCENT}59`, boxShadow: `0 0 10px ${SLIDE_ONLY_ACCENT}55` }}>
                                  <CheckCircle2 className="w-5 h-5" style={{ color: SLIDE_ONLY_ACCENT, filter: `drop-shadow(0 0 6px ${SLIDE_ONLY_ACCENT}88)` }} />
                                </span>
                                <span className="text-sm text-gray-100 leading-relaxed break-words">{text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 p-4 rounded-xl glossy-footnote-tab flex items-center gap-3" style={{ border: `1px solid ${SLIDE_ONLY_ACCENT}3d` }}>
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0" style={{ background: "rgba(10,226,255,0.10)", border: `1px solid ${SLIDE_ONLY_ACCENT}59`, boxShadow: `0 0 10px ${SLIDE_ONLY_ACCENT}55` }}>
                            <CheckCircle2 className="w-5 h-5" style={{ color: SLIDE_ONLY_ACCENT, filter: `drop-shadow(0 0 6px ${SLIDE_ONLY_ACCENT}88)` }} />
                          </span>
                          <div className="text-sm text-gray-100">{MGMT_FOOTNOTE}</div>
                        </div>
                      </div>

                      <div className="image-col">
                        <div className="rounded-2xl overflow-hidden glossy-img relative" style={{ border: `1px solid ${SLIDE_ONLY_ACCENT}26`, minHeight: 220 }}>
                          <img src={s.image} alt="Management support visual" loading="lazy" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="text-white">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)" }}>
                                  {React.cloneElement(s.icon, { style: { color: SLIDE_ONLY_ACCENT }, className: "w-5 h-5" })}
                                </div>
                              </div>
                              <h3 className="text-lg font-semibold">{s.title}</h3>
                              <p className="text-sm text-gray-200 opacity-90 mt-1">{s.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div ref={(el) => (panelRefs.current[idx] = el)} className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                    <div className="w-full md:w-[70%] min-w-0">
                      {s.elevateText && s.id === "business" && (
                        <div className="rounded-2xl p-6 mb-6" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.65), rgba(0,0,0,0.5))", border: `1px solid ${SLIDE_ONLY_ACCENT}26`, boxShadow: `0 10px 30px rgba(0,0,0,0.6)`, minHeight: 140, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                          <div className="text-2xl md:text-3xl font-extrabold text-white tracking-wider">{s.elevateText.title}</div>
                          <div className="text-sm md:text-base text-gray-200 mt-2">{s.elevateText.subtitle}</div>
                        </div>
                      )}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tenSlots.map((spec, i2) => {
                          const placeholder = spec.__placeholder;
                          const text = placeholder ? "placeholder" : typeof spec === "string" ? spec : spec.text;
                          const img = placeholder || typeof spec === "string" ? null : spec.img;
                          return (
                            <li key={i2} className={`flex gap-3 items-center p-4 rounded-xl card-dark ${placeholder ? "invisible" : ""}`} style={{ border: `1px solid ${SLIDE_ONLY_ACCENT}26`, minHeight: "64px" }}>
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0" style={{ background: "rgba(10,226,255,0.10)", border: `1px solid ${SLIDE_ONLY_ACCENT}59`, boxShadow: `0 0 10px ${SLIDE_ONLY_ACCENT}55` }}>
                                <CheckCircle2 className="w-5 h-5" style={{ color: SLIDE_ONLY_ACCENT, filter: `drop-shadow(0 0 6px ${SLIDE_ONLY_ACCENT}88)` }} />
                              </span>
                              <span className="text-gray-100 text-sm leading-relaxed min-w-0 break-words">
                                {text}
                                {img && <img src={img} alt="" className="w-4 h-4 object-contain opacity-70 inline-block ml-2" loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden card-dark w-full md:w-[30%] min-w-0" style={{ border: `1px solid ${SLIDE_ONLY_ACCENT}26`, height: "auto", minHeight: "220px" }}>
                      <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:px-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-md mb-3" style={{ background: "rgba(255,255,255,0.08)" }}>
                          {React.cloneElement(s.icon, { style: iconAccentStyleSlide })}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white drop-shadow-lg text-center">{s.title}</h3>
                        {s.elevateText && s.id !== "business" ? (
                          <div className="mt-4 text-center">
                            <div className="text-lg font-bold text-cyan-400 mb-1 tracking-wider">{s.elevateText.title}</div>
                            <div className="text-sm text-gray-200 drop-shadow-md">{s.elevateText.subtitle}</div>
                          </div>
                        ) : (
                          <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-200 max-w-lg mx-auto hidden md:block drop-shadow-md text-center">{s.description}</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* OUR CLIENTS */}
      <section id="our-clients" className="bg-black py-14 sm:py-16 px-4 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">
            Clients Thrived Through{" "}
            <span className="text-cyan-400">Our Collaborative Leadership</span>
          </h2>

          <div className="overflow-hidden relative w-full mb-6 sm:mb-8 client-track">
            <div className="flex animate-slide-left gap-4 sm:gap-6 w-max items-center">
              {clientRow1.concat(clientRow1).map((logo, i) => (
                <div key={`row1-${i}`} className="w-32 sm:w-40 h-20 sm:h-24 rounded-xl client-tile-light grid place-items-center transition">
                  <div className="logo-frame w-full h-full flex items-center justify-center px-3">
                    <LogoTile src={logo} alt={`Client ${Math.floor(i % clientRow1.length) + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden relative w-full">
            <div className="flex animate-slide-right gap-4 sm:gap-6 w-max items-center">
              {clientRow2.concat(clientRow2).map((logo, i) => (
                <div key={`row2-${i}`} className="w-32 sm:w-40 h-20 sm:h-24 rounded-xl client-tile-light grid place-items-center transition">
                  <div className="logo-frame w-full h-full flex items-center justify-center px-3">
                    <LogoTile src={logo} alt={`Client ${Math.floor(i % clientRow2.length) + 10}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style >{`
          @keyframes slide-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes slide-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          .animate-slide-left { animation: slide-left 36s linear infinite; }
          .animate-slide-right { animation: slide-right 36s linear infinite; }
          .animate-slide-left:hover, .animate-slide-right:hover { animation-play-state: paused; }
          @media (prefers-reduced-motion: reduce) { .animate-slide-left, .animate-slide-right { animation: none !important; } }
          .client-tile-light { background: #f8feff; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 6px 18px rgba(9,10,12,0.35), inset 0 1px 0 rgba(255,255,255,0.6); backdrop-filter: none; transition: transform 220ms ease, box-shadow 220ms ease, background 220ms ease; overflow: visible; }
          .client-tile-light:hover { transform: translateY(-3px); box-shadow: 0 12px 24px rgba(9,10,12,0.45), inset 0 1px 0 rgba(255,255,255,0.7); }
          .logo-frame { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; padding: 0.375rem; overflow: visible; }
          .client-logo { max-width: calc(100% - 12px); max-height: calc(100% - 12px); width: auto; height: auto; object-fit: contain; object-position: center; display: block; vertical-align: middle; transition: transform 220ms ease, opacity 220ms ease; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.08)); }
          .client-logo:hover { transform: scale(1.04); }
          @media (max-width: 639px) { .w-40 { width: 86px; } .h-24 { height: 56px; } }
        `}</style>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      <style >{`
        .page-bg { min-height: 100%; background: linear-gradient(180deg, #050608 0%, #0a0c0e 45%, #07090b 100%); }
        .card-dark { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.45)); border: 1px solid rgba(255,255,255,0.03); box-shadow: 0 10px 30px rgba(0,0,0,0.6); backdrop-filter: blur(6px); }
        article[role="tabpanel"] { transition: opacity 420ms ease, max-height 440ms ease; }
        .glossy-pill-inline, .glossy-rect-inline { background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.35)); border: 1px solid rgba(10,226,255,0.22); box-shadow: 0 8px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05); }
        .glossy-pill-inline { border-radius: 9999px; }
        .glossy-rect-inline { border-radius: 12px; }
        .glossy-img { box-shadow: 0 10px 28px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06); }
        .glossy-pill-inline span, .glossy-rect-inline span { white-space: normal; word-break: break-word; }
        .setting-image-grid { display: block; gap: 1rem; }
        .setting-left { width: 100%; }
        .image-col { margin-top: 16px; }
        @media (min-width: 768px) {
          .setting-image-grid { display: grid; grid-template-columns: 70% 30%; gap: 24px; align-items: start; }
          .image-col { margin-top: 0; align-self: stretch; }
          .image-col .glossy-img { height: 100%; min-height: 240px; max-height: 320px; }
          .image-col .glossy-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        }
        .glossy-footnote-tab { background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.36)); }
      `}</style>
    </div>
  );
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 px-4" style={{ background: "linear-gradient(180deg, #07090b 0%, #050608 100%)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(10,226,255,0.08)", border: "1px solid rgba(10,226,255,0.2)" }}>
            <Quote className="w-3.5 h-3.5" style={{ color: GLOBAL_ACCENT }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: GLOBAL_ACCENT }}>Client Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Trusted by industry leaders across audit, finance, and compliance
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={t.id} t={t} idx={idx} />
          ))}
        </div>
      </div>
      
    </section>
  );
}
/* ─── Testimonial Card ─── */
function TestimonialCard({ t, idx }) {
  const isFeatured = idx === 1;

  return (
    <div
      className="relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: isFeatured
          ? "linear-gradient(160deg, rgba(10,226,255,0.07) 0%, rgba(0,0,0,0.6) 100%)"
          : "linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.55) 100%)",
        border: isFeatured
          ? "1px solid rgba(10,226,255,0.3)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: isFeatured
          ? "0 0 32px rgba(10,226,255,0.08), 0 16px 40px rgba(0,0,0,0.5)"
          : "0 16px 40px rgba(0,0,0,0.4)",
      }}
    >
      {/* Top Accent Bar */}
      <div
        className="h-[2px] w-full"
        style={{
          background: isFeatured
            ? `linear-gradient(90deg, transparent, ${GLOBAL_ACCENT}, transparent)`
            : "linear-gradient(90deg, transparent, rgba(248,186,99,0.5), transparent)",
        }}
      />

      <div className="p-6">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: t.rating || 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5"
              style={{
                color: isFeatured ? GLOBAL_ACCENT : "#F8BA63",
                fill: isFeatured ? GLOBAL_ACCENT : "#F8BA63",
              }}
            />
          ))}
        </div>

        {/* Feedback */}
        <p className="text-gray-300 text-sm leading-relaxed italic mb-5">
          {t.feedback}
        </p>

        {/* Author Row */}
        <div className="flex items-center gap-2.5">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div
              className="w-10 h-10 rounded-full overflow-hidden"
              style={{
                border: isFeatured
                  ? `2px solid ${GLOBAL_ACCENT}60`
                  : "2px solid rgba(248,186,99,0.4)",
              }}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.style.background =
                    "rgba(255,255,255,0.06)";
                }}
              />
            </div>

            <span
              className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-black"
              style={{
                background: isFeatured ? GLOBAL_ACCENT : "#F8BA63",
              }}
            />
          </div>

          {/* Name / Role / Company */}
          <div className="min-w-0 flex-1">
            <div className="text-white font-semibold text-sm truncate">
              {t.name}
            </div>

            {t.role && (
              <div className="text-xs text-gray-400 mt-0.5 truncate">
                {t.role}
              </div>
            )}

            {t.client && (
              <div
                className="text-xs font-medium mt-0.5 truncate"
                style={{
                  color: isFeatured ? GLOBAL_ACCENT : "#F8BA63",
                }}
              >
                {t.client}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}