




// // Team.jsx
// import React, { useMemo, useState } from "react";

// const ACCENT = "#00D4F2";
// const ORANGE = "#F8BA63";
// const IMG_RADIUS = "7%";
// const PARTNER_IMG_SIZE = "w-32 h-32"; // keep advisor & partner logo sizes consistent

// /* --------------------------
//    Data (images/text taken from the provided screenshots)
//    Now supports multiple images per card via `images: [...]`
//    -------------------------- */
// const seniorLeaders = [
//   {
//     name: "Mohit Gupta",
//     role: "Managing Partner",
//     image: "/images/mohit2.jpeg",
//     intro:
//       "CA and IT Professional with 20+ Years of experience inleading risk and technology focus engagement forwide range of industries across the globe. Ex. Committee member of Delhi Branch of The Institute of Internal Auditors(IIA). Prominent speaker and author with IIA, ICAI, ICSI and ICWA.",
//     specializations: ["Internal Audit", "IFC,", "Risk management", "Process Automation"],
//   },
//   {
//     name: "Ankit Gupta",
//     role: "Managing Partner",
//     image: "/images/ankit.png",
//     intro:
//       "CA with over 17 years of experience in IT Audit, Internal Audit, SOX 404, compliance reviews, and business process controls across diverse industries including telecom, healthcare, real estate, manufacturing, FMCG, and infrastructure. Has international experience in regions such as Canada, Dubai, Qatar, and Malaysia.",
//     specializations: ["Internal Audit", "SOX/ IFC", "Risk Management"],
//   },
//   {
//     name: "Neeraj Gupta",
//     role: "Associate Partner",
//     image: "/images/niraj.jpeg",
//     intro:
//       "CA & CPA with 14+ years across finance, compliance, treasury, capital/annual budgeting and process controls, including liaison with statutory & government authorities. Led enterprise fixed-asset programs—physical verification, reconciliation, FAR sanitization and RFID tagging—and delivered statutory/ internal audits.",
//     specializations: ["Finance", "Compliance", "Fixed Assets"],
//   },
//   {
//     name: "Shilpi Sikka",
//     role: "Associate Partner",
//     image: "/images/shilpisikka.png",
//     intro:
//       "FCA & DISA-qualified CA with 18+ years specializing in banking audits—concurrent, statutory, revenue, stock, IS, credit and forensic—for PSU and private banks, including forex-authorized and corporate-finance units.",
//     specializations: ["Statutory Audit", "Taxation", "Forensic"],
//   },
//   {
//     name: "Vikas Nautiyal",
//     role: "Advocate – Supreme Court & Delhi HC",
//     image: "/images/vikas.png",
//     intro:
//       "Advocate with 16+ years of litigation experience across the Supreme Court, High Court, District Courts, Consumer Forums, and Tribunals. Skilled in drafting and arguing civil, criminal, consumer, and RERA matters.",
//     specializations: ["Litigation", "Corporate Law", "Consumer Disputes"],
//   },
//   {
//     name: "Rohit Agrawal",
//     role: "Associate Partner",
//     image: "/images/Rohit2.jpeg",
//     intro:
//       "Technology Risk leader with ~20 years' experience in IT audit, cyber risk, information security, and compliance across global financial, healthcare, and enterprise sectors.",
//     specializations: ["Cyber Security", "Data Privacy", "Cyber Risk"],
//   },
//   {
//     name: "Yukti Arora",
//     role: "Associate Partner",
//     image: "/images/yuktii.png",
//     intro:
//       "Risk and Technology Consulting Leader with 20+ years of experience in Internal Audit, ERM, Cybersecurity, Information Security, ERP Advisory, Data Analytics, RPA, Blockchain, and Digital Transformation. Extensive experience in consulting, business development, practice leadership, and delivering governance, risk, and compliance solutions across diverse industries.",
//     specializations: ["Governance, Risk & Compliance", "Cybersecurity & Privacy", "Digital Transformation, Data Analytics & RPA"],
//   },
// ];

// /* ---------- Advisors (Mentors & Advisors slide) ---------- */
// const advisors = [
//   // {
//   //   name: "Mr. Dinesh Bahl",
//   //   partnerLine: "Founding Partner, Sahni Natarajan & Bahl",
//   //   mentorTitle: "Governance and Strategic Growth Mentor",
//   //   image: "/images/dineshbhai.jpeg",
//   //   intro:
//   //     "40+ Years of auditing and management consulting. Past President of the Institute of Internal Auditors (IIA), served on Boards and Audit Committees of reputed corporations, including the Tata group.",
//   // },
//   {
//     name: "Mr. G.K. Agrawal",
//     partnerLine: "Founding Partner, Gianendra & Associates",
//     mentorTitle: "Taxation and Strategic Team Mentor",
//     image: "/images/gkagg2.jpeg",
//     intro:
//       "40+ years of Audit and Taxation for working with Government, PSU and Financial Sector. Specialized in Ind AS and Technical Reviewer with the Quality Review Board of ICAI.",
//   },
//   {
//     name: "Mr. Ashok Sikka",
//     partnerLine:
//       " Founder, Ashok Sikka & Associates, Empanel with Supreme Court",
//     mentorTitle: "Legal and Taxation Mentor",
//     image: "/images/ashoksikka.png",
//     intro:
//       "50+ years of expertise in law and taxation. Brings legal precision, strategic foresight, and ethical leadership—trusted mentor guiding our vision with clarity and confidence.",
//   },
// ];

// /* ---------- Collaborations (from Alliance & Collaborative Partnerships slide)
//    NOTE: imageSize controls the image-area size (width x height in px).
//    SARC and RISKBERG -> 250 x 188
//    gianender & BRIVAN -> 388 x 150
// */
// const collaborations = [
//   {
//     name: "SARC Global",
//     badge: "Network Partner",
//     category: "Global Network",
//     image: "/images/sarc25.jpg",
//     imageSize: { w: 300, h: 188 },
//     intro: "35+ Years, 10+ India Office, US, UK, Australia, UAE, Tanzania",
//   },
//   {
//     name: "Aumyaa Consulting",
//     badge: "Technology Risk & Cyber Security",
//     category: "Cyber and IT",
//     image: "/images/aumyaa.png",
//     imageSize: { w: 250, h: 188 },
//     intro: "500+ audits, 80+ customers, Certified Risk and IT professionals",
//   },
//   {
//     name: "gianender & associates",
//     badge: "Taxation and Strategic Team Partner",
//     category: "People and Team",
//     image: "/images/gianendraassociate2.jpg",
//     imageSize: { w: 388, h: 150 },
//     intro:
//       "40+ Years, Audit and Taxation, 100+ Team IFRS, IndAS, Audit and Taxation",
//   },
//   {
//     name: "Aout Advisors",
//     badge: "Strategic Clients and Solutions Partner",
//     category: "Strategic Solutions",
//     image: "/images/aout1.png",
//     imageSize: { w: 600, h: 180 },
//     intro:
//       "13+ Years, 100+ Team, 15+ Countries:  NRI Consulting,    Staffing, M&A, Investments",
//   },
// ];

// /* --------------------------
//    UI helpers
//    -------------------------- */
// const SpecPill = ({ children }) => (
//   <span
//     className="text-[11px] px-2 py-0.5 rounded-full border"
//     style={{
//       color: ACCENT,
//       borderColor: `${ACCENT}55`,
//       backgroundColor: `${ACCENT}10`,
//     }}
//   >
//     {children}
//   </span>
// );

// /* Reusable ImageSwitcher (unchanged) */
// function ImageSwitcher({
//   images = [],
//   alt = "",
//   kind = "advisor",
//   containerClass = "",
//   imgClass = "",
//   radius = IMG_RADIUS,
//   fallback,
// }) {
//   const [idx, setIdx] = useState(0);
//   const list = Array.isArray(images) && images.length > 0 ? images : [fallback];
//   const onErr = (e) => {
//     if (fallback && e.currentTarget.src !== window.location.origin + fallback) {
//       e.currentTarget.onerror = null;
//       e.currentTarget.src = fallback;
//     }
//   };

//   return (
//     <div className={containerClass}>
//       <div
//         className={`w-full overflow-hidden border border-neutral-700 ${imgClass}`}
//         style={{ borderRadius: radius }}
//       >
//         <img
//           src={list[idx]}
//           alt={alt}
//           className="w-full h-full object-cover"
//           onError={onErr}
//           style={{ display: "block" }}
//         />
//       </div>

//       {list.length > 1 && (
//         <div className="mt-2 flex flex-wrap gap-2 justify-center">
//           {list.map((src, i) => {
//             const active = i === idx;
//             return (
//               <button
//                 key={`${alt}-thumb-${i}`}
//                 type="button"
//                 aria-label={`Switch to image ${i + 1} for ${alt}`}
//                 onClick={() => setIdx(i)}
//                 className={`border rounded-md p-[2px] focus:outline-none transition ${
//                   active ? "scale-[1.02]" : "hover:scale-[1.02]"
//                 }`}
//                 style={{
//                   borderColor: active ? ACCENT : "rgba(255,255,255,0.12)",
//                   boxShadow: active ? `0 0 0 1px ${ACCENT}55 inset` : "none",
//                 }}
//               >
//                 <img
//                   src={src}
//                   alt=""
//                   className="w-9 h-9 object-cover rounded-[6px]"
//                   onError={onErr}
//                 />
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// /* Leader card (unchanged) */
// function LeaderCard({ leader, widthClass = "w-56" }) {
//   return (
//     <article
//       className={`${widthClass} h-full rounded-2xl bg-neutral-900/55 border border-neutral-800 p-4 flex flex-col items-center`}
//       aria-label={`Leader ${leader.name}`}
//       role="group"
//     >
//       <div
//         className="w-56 rounded-md p-2"
//         style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
//         aria-hidden
//       >
//         <div
//           className="w-full h-56 overflow-hidden border border-neutral-700"
//           style={{ borderRadius: IMG_RADIUS }}
//         >
//           <img
//             src={leader.image}
//             alt={leader.name}
//             className="w-full h-full object-cover"
//             style={{ display: "block" }}
//             onError={(e) => {
//               e.currentTarget.onerror = null;
//               e.currentTarget.src = "/images/services21.jpeg";
//             }}
//           />
//         </div>
//       </div>

//       <h3 className="mt-3 text-lg font-semibold text-white text-center">
//         {leader.name}
//       </h3>

//       <p className="text-sm mt-1 text-center" style={{ color: ACCENT }}>
//         {leader.role}
//       </p>

//       <div className="mt-3 flex flex-wrap justify-center gap-2 max-w-[14rem]">
//         {Array.isArray(leader.specializations) &&
//           leader.specializations.map((s, i) => <SpecPill key={i}>{s}</SpecPill>)}
//       </div>

//       <p className="mt-4 text-neutral-300 text-sm leading-6 tracking-[0.01em] max-w-[14rem] text-justify">
//         {leader.intro}
//       </p>
//     </article>
//   );
// }

// /* Advisor card (unchanged) */
// function AdvisorCard({ advisor }) {
//   return (
//     <article
//       className="flex-1 rounded-2xl bg-neutral-900/55 border border-neutral-800 p-6 flex flex-col items-center text-center min-w-[300px] max-w-[400px]"
//       aria-label={`Advisor ${advisor.name}`}
//       role="group"
//     >
//       <div className="mb-4">
//         <div
//           className={`${PARTNER_IMG_SIZE} overflow-hidden border border-neutral-700`}
//           style={{ borderRadius: "12px" }}
//         >
//           <img
//             src={advisor.image}
//             alt={advisor.name}
//             className="w-full h-full object-cover"
//             onError={(e) => {
//               e.currentTarget.onerror = null;
//               e.currentTarget.src = "/images/mohit2.jpeg";
//             }}
//           />
//         </div>
//       </div>

//       <h3 className="text-lg font-semibold mb-2" style={{ color: ACCENT }}>
//         {advisor.name}
//       </h3>

//       <p className="text-sm text-neutral-300 mb-3 min-h-[40px]">{advisor.partnerLine}</p>

//       <p className="text-sm font-semibold mb-4" style={{ color: ORANGE }}>
//         {advisor.mentorTitle}
//       </p>

//       <p className="text-neutral-300 text-sm leading-6 tracking-[0.01em] text-justify">
//         {advisor.intro}
//       </p>
//     </article>
//   );
// }

// /* Collaboration card - updated to respect per-item imageSize */
// function CollaborationCard({ item }) {
//   // fallback size
//   const { w = 144, h = 144 } = item.imageSize || {};

//   const imgWrapperStyle = {
//     width: "100%",
//     maxWidth: `${w}px`, // ensures we don't exceed desired width on wide screens
//     aspectRatio: `${w} / ${h}`, // keeps the requested aspect ratio
//     borderRadius: "12px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden",
//     backgroundColor: "rgba(255,255,255,0.03)",
//     border: "1px solid rgba(255,255,255,0.04)",
//     padding: "8px",
//   };

//   return (
//     <article
//       className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 overflow-hidden h-full min-h-[220px] hover:border-neutral-700 transition-all duration-300"
//       role="group"
//       aria-label={`Collaboration ${item.name}`}
//     >
//       <div className="p-5 h-full flex flex-col items-center text-center">
//         {/* Logo/Image section with item-specific size (responsive via maxWidth + aspect-ratio) */}
//         <div className="flex justify-center mb-4 w-full">
//           <div style={imgWrapperStyle}>
//             <img
//               src={item.image}
//               alt={item.name}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain",
//                 display: "block",
//                 padding: "2px",
//               }}
//               onError={(e) => {
//                 e.currentTarget.onerror = null;
//                 e.currentTarget.src = "/images/placeholder.jpg";
//               }}
//             />
//           </div>
//         </div>

//         {/* Content section */}
//         <div className="flex-1 flex flex-col items-center text-center">
//           <h3
//             className="text-xl font-bold tracking-tight mb-3 uppercase"
//             style={{ fontFamily: "Poppins, sans-serif", color: ACCENT }}
//           >
//             {item.name}
//           </h3>

//           <p
//             className="text-base font-medium text-neutral-200 mb-4 flex-1 leading-relaxed"
//             style={{ fontFamily: "Poppins, sans-serif" }}
//           >
//             {item.intro}
//           </p>

//           <div className="mt-auto">
//             <span
//               className="text-xs font-semibold px-3 py-1.5 rounded-full inline-block"
//               style={{
//                 color: ORANGE,
//                 backgroundColor: "rgba(248, 186, 99, 0.15)",
//                 border: `1px solid ${ORANGE}44`,
//               }}
//             >
//               {item.badge}
//             </span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// /* Section helper */
// const Section = ({ title, subtitle, children, className = "" }) => (
//   <section className={`mb-20 ${className}`}>
//     <h2 className="text-2xl font-semibold text-neutral-200 mb-3 text-center">{title}</h2>
//     {subtitle && (
//       <div className="text-neutral-400 max-w-3xl mx-auto mb-8 text-center">{subtitle}</div>
//     )}
//     {children}
//   </section>
// );

// /* --------------------------
//    Main Team component
//    -------------------------- */
// export default function Team() {
//   const collaborationCategories = useMemo(() => {
//     const cats = Array.from(new Set(collaborations.map((c) => c.category)));
//     return ["All", ...cats];
//   }, []);

//   const [activeCollabTab, setActiveCollabTab] = useState("All");

//   const filteredCollaborations = useMemo(() => {
//     if (activeCollabTab === "All") return collaborations;
//     return collaborations.filter((c) => c.category === activeCollabTab);
//   }, [activeCollabTab]);

//   return (
//     <>
//       {/* Add Google Fonts */}
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
//         rel="stylesheet"
//       />

//       {/* Local CSS for improved justification (hyphenation + last-line justification) */}
//       <style>{`
//         .justify-paragraph {
//           text-align: justify;
//           text-justify: inter-word;
//           -webkit-hyphens: auto;
//           -moz-hyphens: auto;
//           hyphens: auto;
//           line-height: 1.6;
//           text-align-last: justify;
//         }
//         @media (min-width: 1280px) {
//           .justify-paragraph { max-width: 60ch; }
//         }
//         .two-line-clamp {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           line-height: 1.25;
//           max-height: 2.5em;
//           margin: 0;
//         }
//       `}</style>

//       <main className="relative text-white bg-black min-h-screen py-12">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center">
//             <span
//               className="inline-block px-4 py-1 rounded-full text-sm mb-4"
//               style={{
//                 color: ACCENT,
//                 backgroundColor: "rgba(255,255,255,0.02)",
//                 boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.2)",
//               }}
//             >
//               Leadership Excellence
//             </span>

//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               Our <span style={{ color: ACCENT }}>Leadership Team</span>
//             </h1>

//             <p className="text-neutral-400 max-w-3xl mx-auto mb-16 text-justify">
//               We combine decades of expertise, deep industry knowledge, and forward-thinking strategic vision to
//               deliver innovative and sustainable results that empower our clients to achieve lasting growth and success
//             </p>
//           </div>

//           {/* Senior Leadership */}
//           <Section
//             title="Senior Leadership"
//             subtitle="Bringing decades of hands-on expertise, our leaders are committed to navigate clients through every challenge, ensuring reliable outcomes and tangible growth."
//             className="mt-[75px]"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch justify-items-center">
//               {seniorLeaders.map((leader) => (
//                 <LeaderCard key={leader.name} leader={leader} widthClass="w-56" />
//               ))}
//             </div>
//           </Section>

//           {/* Mentors & Advisors */}
//           <Section
//             title="Mentors & Advisors"
//             subtitle={
//               <p
//                 aria-hidden={false}
//                 style={{
//                   display: "-webkit-box",
//                   WebkitLineClamp: 2,
//                   WebkitBoxOrient: "vertical",
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                   lineHeight: "1.25",
//                   maxHeight: "2.5em",
//                   margin: 0,
//                   textAlign: "center",
//                 }}
//               >
//                 "Guiding Leadership, Shaping Tomorrow" — Our mentors are the guiding force behind our journey — bringing decades of expertise in Legal, Risk, and Governance to navigate our vision
//               </p>
//             }
//           >
//             <div className="flex flex-wrap justify-center gap-6">
//               {advisors.map((advisor) => (
//                 <AdvisorCard key={advisor.name} advisor={advisor} />
//               ))}
//             </div>
//           </Section>

//           {/* Collaborations */}
//           <Section
//             title="Alliance & Collaborative Partnerships"
//             subtitle={
//               <p aria-hidden={false} className="two-line-clamp" style={{ textAlign: "center" }}>
//                 Our diverse partner network equips clients with innovative solutions, resilient digital capabilities, expert teams, and strategic guidance to drive growth and confidently navigate complex challenges.
//               </p>
//             }
//           >
//             <div className="mb-12 flex justify-center">
//               <div className="flex gap-1 bg-neutral-900/40 p-0.5 rounded-full border border-neutral-700/50">
//                 {collaborationCategories.map((cat) => {
//                   const active = activeCollabTab === cat;
//                   return (
//                     <button
//                       key={cat}
//                       onClick={() => setActiveCollabTab(cat)}
//                       className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none ${active ? "text-black shadow-sm" : "text-neutral-300 hover:text-white hover:bg-neutral-800/50"}`}
//                       style={{
//                         backgroundColor: active ? ACCENT : "transparent",
//                         minWidth: "auto",
//                       }}
//                     >
//                       {cat}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto items-stretch">
//               {filteredCollaborations.map((c) => (
//                 <CollaborationCard key={c.name} item={c} />
//               ))}
//             </div>
//           </Section>
//         </div>
//       </main>
//     </>
//   );
// }




// // Team.jsx
// import React, { useMemo, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ACCENT = "#00D4F2";
// const ORANGE = "#F8BA63";
// const IMG_RADIUS = "7%";
// const PARTNER_IMG_SIZE = "w-32 h-32"; // keep advisor & partner logo sizes consistent

// /* --------------------------
//    Data (images/text taken from the provided screenshots)
//    Now supports multiple images per card via `images: [...]`
//    -------------------------- */
// const seniorLeaders = [
//   {
//     name: "Mohit Gupta",
//     role: "Managing Partner",
//     image: "/images/mohit2.jpeg",
//     intro:
//       "CA and IT Professional with 20+ Years of experience inleading risk and technology focus engagement forwide range of industries across the globe. Ex. Committee member of Delhi Branch of The Institute of Internal Auditors(IIA). Prominent speaker and author with IIA, ICAI, ICSI and ICWA.",
//     specializations: ["Internal Audit", "IFC,", "Risk management", "Process Automation"],
//   },
//   {
//     name: "Ankit Gupta",
//     role: "Managing Partner",
//     image: "/images/ankit.png",
//     intro:
//       "CA with over 17 years of experience in IT Audit, Internal Audit, SOX 404, compliance reviews, and business process controls across diverse industries including telecom, healthcare, real estate, manufacturing, FMCG, and infrastructure. Has international experience in regions such as Canada, Dubai, Qatar, and Malaysia.",
//     specializations: ["Internal Audit", "SOX/ IFC", "Risk Management"],
//   },
//   {
//     name: "Neeraj Gupta",
//     role: "Associate Partner",
//     image: "/images/niraj.jpeg",
//     intro:
//       "CA & CPA with 14+ years across finance, compliance, treasury, capital/annual budgeting and process controls, including liaison with statutory & government authorities. Led enterprise fixed-asset programs—physical verification, reconciliation, FAR sanitization and RFID tagging—and delivered statutory/ internal audits.",
//     specializations: ["Finance", "Compliance", "Fixed Assets"],
//   },
//   {
//     name: "Shilpi Sikka",
//     role: "Associate Partner",
//     image: "/images/shilpisikka.png",
//     intro:
//       "FCA & DISA-qualified CA with 18+ years specializing in banking audits—concurrent, statutory, revenue, stock, IS, credit and forensic—for PSU and private banks, including forex-authorized and corporate-finance units.",
//     specializations: ["Statutory Audit", "Taxation", "Forensic"],
//   },
//   {
//   name: "Atul Gupta",
//   role: "Associate Partner",
//   image: "/images/atul4.png",
//   intro:
//     "Chartered Accountant with 14+ years advising organizations on transnational business and top management issues, including change management, vision conceptualization, and strategic planning. Skilled in tax restructuring, corporate & commercial laws, international taxation, FEMA, and setting up accounting/MIS systems.",
//   specializations: ["Tax Planning", "International Taxation", "FEMA & Compliance"],
// },
// {
//   name: "Sandeep Aggarwal",
//   role: "Associate Partner",
//   image: "/images/sandeep4.png",
//   intro:
//     "Chartered Accountant with 14+ years of experience in strategy implementation, performance enhancement, organizational restructuring, mergers & amalgamations, financial due diligence, system designing, and cost optimization. Also skilled in fixed asset management and GST/service tax compliance.",
//   specializations: ["Financial Due Diligence", "Risk Assessment", "GST Compliance"],
// },
//   {
//     name: "Rohit Agrawal",
//     role: "Associate Partner",
//     image: "/images/Rohit2.jpeg",
//     intro:
//       "Technology Risk leader with ~20 years' experience in IT audit, cyber risk, information security, and compliance across global financial, healthcare, and enterprise sectors.",
//     specializations: ["Cyber Security", "Data Privacy", "Cyber Risk"],
//   },
//   {
//     name: "Yukti Arora",
//     role: "Associate Partner",
//     image: "/images/yuktii.png",
//     intro:
//       "Risk and Technology Consulting Leader with 20+ years of experience in Internal Audit, ERM, Cybersecurity, Information Security, ERP Advisory, Data Analytics, RPA, Blockchain, and Digital Transformation. Extensive experience in consulting, business development, practice leadership, and delivering governance, risk, and compliance solutions across diverse industries.",
//     specializations: ["Governance, Risk & Compliance", "Cybersecurity & Privacy", "Digital Transformation, Data Analytics & RPA"],
//   },
// ];

// /* ---------- Advisors (Mentors & Advisors slide) ---------- */
// const advisors = [
//   // {
//   //   name: "Mr. Dinesh Bahl",
//   //   partnerLine: "Founding Partner, Sahni Natarajan & Bahl",
//   //   mentorTitle: "Governance and Strategic Growth Mentor",
//   //   image: "/images/dineshbhai.jpeg",
//   //   intro:
//   //     "40+ Years of auditing and management consulting. Past President of the Institute of Internal Auditors (IIA), served on Boards and Audit Committees of reputed corporations, including the Tata group.",
//   // },
//   {
//     name: "Mr. G.K. Agrawal",
//     partnerLine: "Founding Partner, Gianendra & Associates",
//     mentorTitle: "Taxation and Strategic Team Mentor",
//     image: "/images/gkagg2.jpeg",
//     intro:
//       "40+ years of Audit and Taxation for working with Government, PSU and Financial Sector. Specialized in Ind AS and Technical Reviewer with the Quality Review Board of ICAI.",
//   },
//   {
//     name: "Mr. Ashok Sikka",
//     partnerLine:
//       " Founder, Ashok Sikka & Associates, Empanel with Supreme Court",
//     mentorTitle: "Legal and Taxation Mentor",
//     image: "/images/ashoksikka.png",
//     intro:
//       "50+ years of expertise in law and taxation. Brings legal precision, strategic foresight, and ethical leadership—trusted mentor guiding our vision with clarity and confidence.",
//   },
// ];

// /* ---------- Collaborations (from Alliance & Collaborative Partnerships slide)
//    NOTE: imageSize controls the image-area size (width x height in px).
//    SARC and RISKBERG -> 250 x 188
//    gianender & BRIVAN -> 388 x 150
// */
// const collaborations = [
//   {
//     name: "SARC Global",
//     badge: "Network Partner",
//     category: "Global Network",
//     image: "/images/sarc25.jpg",
//     imageSize: { w: 300, h: 188 },
//     intro: "35+ Years, 10+ India Office, US, UK, Australia, UAE, Tanzania",
//   },
//   {
//     name: "Aumyaa Consulting",
//     badge: "Technology Risk & Cyber Security",
//     category: "Cyber and IT",
//     image: "/images/aumyaa.png",
//     imageSize: { w: 250, h: 188 },
//     intro: "500+ audits, 80+ customers, Certified Risk and IT professionals",
//   },
//   {
//     name: "gianender & associates",
//     badge: "Taxation and Strategic Team Partner",
//     category: "People and Team",
//     image: "/images/gianendraassociate2.jpg",
//     imageSize: { w: 388, h: 150 },
//     intro:
//       "40+ Years, Audit and Taxation, 100+ Team IFRS, IndAS, Audit and Taxation",
//   },
//   {
//     name: "Aout Advisors",
//     badge: "Strategic Clients and Solutions Partner",
//     category: "Strategic Solutions",
//     image: "/images/aout2.png",
//     imageSize: { w: 600, h: 180 },
//     intro:
//       "13+ Years, 100+ Team, 15+ Countries:  NRI Consulting,    Staffing, M&A, Investments",
//   },
// ];

// /* --------------------------
//    UI helpers
//    -------------------------- */
// const SpecPill = ({ children }) => (
//   <span
//     className="text-[11px] px-2 py-0.5 rounded-full border"
//     style={{
//       color: ACCENT,
//       borderColor: `${ACCENT}55`,
//       backgroundColor: `${ACCENT}10`,
//     }}
//   >
//     {children}
//   </span>
// );

// /* Reusable ImageSwitcher (unchanged) */
// function ImageSwitcher({
//   images = [],
//   alt = "",
//   kind = "advisor",
//   containerClass = "",
//   imgClass = "",
//   radius = IMG_RADIUS,
//   fallback,
// }) {
//   const [idx, setIdx] = useState(0);
//   const list = Array.isArray(images) && images.length > 0 ? images : [fallback];
//   const onErr = (e) => {
//     if (fallback && e.currentTarget.src !== window.location.origin + fallback) {
//       e.currentTarget.onerror = null;
//       e.currentTarget.src = fallback;
//     }
//   };

//   return (
//     <div className={containerClass}>
//       <div
//         className={`w-full overflow-hidden border border-neutral-700 ${imgClass}`}
//         style={{ borderRadius: radius }}
//       >
//         <img
//           src={list[idx]}
//           alt={alt}
//           className="w-full h-full object-cover"
//           onError={onErr}
//           style={{ display: "block" }}
//         />
//       </div>

//       {list.length > 1 && (
//         <div className="mt-2 flex flex-wrap gap-2 justify-center">
//           {list.map((src, i) => {
//             const active = i === idx;
//             return (
//               <button
//                 key={`${alt}-thumb-${i}`}
//                 type="button"
//                 aria-label={`Switch to image ${i + 1} for ${alt}`}
//                 onClick={() => setIdx(i)}
//                 className={`border rounded-md p-[2px] focus:outline-none transition ${
//                   active ? "scale-[1.02]" : "hover:scale-[1.02]"
//                 }`}
//                 style={{
//                   borderColor: active ? ACCENT : "rgba(255,255,255,0.12)",
//                   boxShadow: active ? `0 0 0 1px ${ACCENT}55 inset` : "none",
//                 }}
//               >
//                 <img
//                   src={src}
//                   alt=""
//                   className="w-9 h-9 object-cover rounded-[6px]"
//                   onError={onErr}
//                 />
//               </button>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// /* Leader card (unchanged) */
// function LeaderCard({ leader, widthClass = "w-56" }) {
//   return (
//     <article
//       className={`${widthClass} h-full rounded-2xl bg-neutral-900/55 border border-neutral-800 p-4 flex flex-col items-center`}
//       aria-label={`Leader ${leader.name}`}
//       role="group"
//     >
//       <div
//         className="w-56 rounded-md p-2"
//         style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
//         aria-hidden
//       >
//         <div
//           className="w-full h-56 overflow-hidden border border-neutral-700"
//           style={{ borderRadius: IMG_RADIUS }}
//         >
//           <img
//             src={leader.image}
//             alt={leader.name}
//             className="w-full h-full object-cover"
//             style={{ display: "block" }}
//             onError={(e) => {
//               e.currentTarget.onerror = null;
//               e.currentTarget.src = "/images/services21.jpeg";
//             }}
//           />
//         </div>
//       </div>

//       <h3 className="mt-3 text-lg font-semibold text-white text-center">
//         {leader.name}
//       </h3>

//       <p className="text-sm mt-1 text-center" style={{ color: ACCENT }}>
//         {leader.role}
//       </p>

//       <div className="mt-3 flex flex-wrap justify-center gap-2 max-w-[14rem]">
//         {Array.isArray(leader.specializations) &&
//           leader.specializations.map((s, i) => <SpecPill key={i}>{s}</SpecPill>)}
//       </div>

//       <p className="mt-4 text-neutral-300 text-sm leading-6 tracking-[0.01em] max-w-[14rem] text-justify">
//         {leader.intro}
//       </p>
//     </article>
//   );
// }

// /* Advisor card (unchanged) */
// function AdvisorCard({ advisor }) {
//   return (
//     <article
//       className="flex-1 rounded-2xl bg-neutral-900/55 border border-neutral-800 p-6 flex flex-col items-center text-center min-w-[300px] max-w-[400px]"
//       aria-label={`Advisor ${advisor.name}`}
//       role="group"
//     >
//       <div className="mb-4">
//         <div
//           className={`${PARTNER_IMG_SIZE} overflow-hidden border border-neutral-700`}
//           style={{ borderRadius: "12px" }}
//         >
//           <img
//             src={advisor.image}
//             alt={advisor.name}
//             className="w-full h-full object-cover"
//             onError={(e) => {
//               e.currentTarget.onerror = null;
//               e.currentTarget.src = "/images/mohit2.jpeg";
//             }}
//           />
//         </div>
//       </div>

//       <h3 className="text-lg font-semibold mb-2" style={{ color: ACCENT }}>
//         {advisor.name}
//       </h3>

//       <p className="text-sm text-neutral-300 mb-3 min-h-[40px]">{advisor.partnerLine}</p>

//       <p className="text-sm font-semibold mb-4" style={{ color: ORANGE }}>
//         {advisor.mentorTitle}
//       </p>

//       <p className="text-neutral-300 text-sm leading-6 tracking-[0.01em] text-justify">
//         {advisor.intro}
//       </p>
//     </article>
//   );
// }

// /* Collaboration card - updated to respect per-item imageSize */
// function CollaborationCard({ item }) {
//   // fallback size
//   const { w = 144, h = 144 } = item.imageSize || {};

//   const imgWrapperStyle = {
//     width: "100%",
//     maxWidth: `${w}px`, // ensures we don't exceed desired width on wide screens
//     aspectRatio: `${w} / ${h}`, // keeps the requested aspect ratio
//     borderRadius: "12px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden",
//     backgroundColor: "rgba(255,255,255,0.03)",
//     border: "1px solid rgba(255,255,255,0.04)",
//     padding: "8px",
//   };

//   return (
//     <article
//       className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 overflow-hidden h-full min-h-[220px] hover:border-neutral-700 transition-all duration-300"
//       role="group"
//       aria-label={`Collaboration ${item.name}`}
//     >
//       <div className="p-5 h-full flex flex-col items-center text-center">
//         {/* Logo/Image section with item-specific size (responsive via maxWidth + aspect-ratio) */}
//         <div className="flex justify-center mb-4 w-full">
//           <div style={imgWrapperStyle}>
//             <img
//               src={item.image}
//               alt={item.name}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain",
//                 display: "block",
//                 padding: "2px",
//               }}
//               onError={(e) => {
//                 e.currentTarget.onerror = null;
//                 e.currentTarget.src = "/images/placeholder.jpg";
//               }}
//             />
//           </div>
//         </div>

//         {/* Content section */}
//         <div className="flex-1 flex flex-col items-center text-center">
//           <h3
//             className="text-xl font-bold tracking-tight mb-3 uppercase"
//             style={{ fontFamily: "Poppins, sans-serif", color: ACCENT }}
//           >
//             {item.name}
//           </h3>

//           <p
//             className="text-base font-medium text-neutral-200 mb-4 flex-1 leading-relaxed"
//             style={{ fontFamily: "Poppins, sans-serif" }}
//           >
//             {item.intro}
//           </p>

//           <div className="mt-auto">
//             <span
//               className="text-xs font-semibold px-3 py-1.5 rounded-full inline-block"
//               style={{
//                 color: ORANGE,
//                 backgroundColor: "rgba(248, 186, 99, 0.15)",
//                 border: `1px solid ${ORANGE}44`,
//               }}
//             >
//               {item.badge}
//             </span>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// /* Section helper — added `id` prop to support scroll targeting */
// const Section = ({ id, title, subtitle, children, className = "" }) => (
//   <section id={id} className={`mb-20 ${className}`}>
//     <h2 className="text-2xl font-semibold text-neutral-200 mb-3 text-center">{title}</h2>
//     {subtitle && (
//       <div className="text-neutral-400 max-w-3xl mx-auto mb-8 text-center">{subtitle}</div>
//     )}
//     {children}
//   </section>
// );

// /* --------------------------
//    Main Team component
//    -------------------------- */
// export default function Team() {
//   const collaborationCategories = useMemo(() => {
//     const cats = Array.from(new Set(collaborations.map((c) => c.category)));
//     return ["All", ...cats];
//   }, []);

//   const [activeCollabTab, setActiveCollabTab] = useState("All");

//   // ── ADDED: read ?section param and scroll to the matching section ──
//   const location = useLocation();

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const section = params.get("section");

//     if (!section) return;

//     const sectionMap = {
//       senior: "section-senior",
//       advisors: "section-advisors",
//       collaborations: "section-collaborations",
//     };

//     const targetId = sectionMap[section];
//     if (!targetId) return;

//     // Delay lets the page finish rendering before we attempt to scroll
//     const timer = setTimeout(() => {
//       const el = document.getElementById(targetId);
//       if (el) {
//         const headerOffset = 90;
//         const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
//         window.scrollTo({ top, behavior: "smooth" });
//       }
//     }, 150);

//     return () => clearTimeout(timer);
//   }, [location.search]);
//   // ──────────────────────────────────────────────────────────────────

//   const filteredCollaborations = useMemo(() => {
//     if (activeCollabTab === "All") return collaborations;
//     return collaborations.filter((c) => c.category === activeCollabTab);
//   }, [activeCollabTab]);

//   return (
//     <>
//       {/* Add Google Fonts */}
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
//         rel="stylesheet"
//       />

//       {/* Local CSS for improved justification (hyphenation + last-line justification) */}
//       <style>{`
//         .justify-paragraph {
//           text-align: justify;
//           text-justify: inter-word;
//           -webkit-hyphens: auto;
//           -moz-hyphens: auto;
//           hyphens: auto;
//           line-height: 1.6;
//           text-align-last: justify;
//         }
//         @media (min-width: 1280px) {
//           .justify-paragraph { max-width: 60ch; }
//         }
//         .two-line-clamp {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           line-height: 1.25;
//           max-height: 2.5em;
//           margin: 0;
//         }
//       `}</style>

//       <main className="relative text-white bg-black min-h-screen py-12">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center">
//             <span
//               className="inline-block px-4 py-1 rounded-full text-sm mb-4"
//               style={{
//                 color: ACCENT,
//                 backgroundColor: "rgba(255,255,255,0.02)",
//                 boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.2)",
//               }}
//             >
//               Leadership Excellence
//             </span>

//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               Our <span style={{ color: ACCENT }}>Leadership Team</span>
//             </h1>

//             <p className="text-neutral-400 max-w-3xl mx-auto mb-16 text-justify">
//               We combine decades of expertise, deep industry knowledge, and forward-thinking strategic vision to
//               deliver innovative and sustainable results that empower our clients to achieve lasting growth and success
//             </p>
//           </div>

//           {/* Senior Leadership — id added for scroll targeting */}
//           <Section
//             id="section-senior"
//             title="Senior Leadership"
//             subtitle="Bringing decades of hands-on expertise, our leaders are committed to navigate clients through every challenge, ensuring reliable outcomes and tangible growth."
//             className="mt-[75px]"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch justify-items-center">
//               {seniorLeaders.map((leader) => (
//                 <LeaderCard key={leader.name} leader={leader} widthClass="w-56" />
//               ))}
//             </div>
//           </Section>

//           {/* Mentors & Advisors — id added for scroll targeting */}
//           <Section
//             id="section-advisors"
//             title="Mentors & Advisors"
//             subtitle={
//               <p
//                 aria-hidden={false}
//                 style={{
//                   display: "-webkit-box",
//                   WebkitLineClamp: 2,
//                   WebkitBoxOrient: "vertical",
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                   lineHeight: "1.25",
//                   maxHeight: "2.5em",
//                   margin: 0,
//                   textAlign: "center",
//                 }}
//               >
//                 "Guiding Leadership, Shaping Tomorrow" — Our mentors are the guiding force behind our journey — bringing decades of expertise in Legal, Risk, and Governance to navigate our vision
//               </p>
//             }
//           >
//             <div className="flex flex-wrap justify-center gap-6">
//               {advisors.map((advisor) => (
//                 <AdvisorCard key={advisor.name} advisor={advisor} />
//               ))}
//             </div>
//           </Section>

//           {/* Collaborations — id added for scroll targeting */}
//           <Section
//             id="section-collaborations"
//             title="Alliance & Collaborative Partnerships"
//             subtitle={
//               <p aria-hidden={false} className="two-line-clamp" style={{ textAlign: "center" }}>
//                 Our diverse partner network equips clients with innovative solutions, resilient digital capabilities, expert teams, and strategic guidance to drive growth and confidently navigate complex challenges.
//               </p>
//             }
//           >
//             <div className="mb-12 flex justify-center">
//               <div className="flex gap-1 bg-neutral-900/40 p-0.5 rounded-full border border-neutral-700/50">
//                 {collaborationCategories.map((cat) => {
//                   const active = activeCollabTab === cat;
//                   return (
//                     <button
//                       key={cat}
//                       onClick={() => setActiveCollabTab(cat)}
//                       className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none ${active ? "text-black shadow-sm" : "text-neutral-300 hover:text-white hover:bg-neutral-800/50"}`}
//                       style={{
//                         backgroundColor: active ? ACCENT : "transparent",
//                         minWidth: "auto",
//                       }}
//                     >
//                       {cat}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto items-stretch">
//               {filteredCollaborations.map((c) => (
//                 <CollaborationCard key={c.name} item={c} />
//               ))}
//             </div>
//           </Section>
//         </div>
//       </main>
//     </>
//   );
// }


//client/src/pages/Team.jsx
import React, { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ACCENT = "#00D4F2";
const ORANGE = "#F8BA63";
const IMG_RADIUS = "7%";
const PARTNER_IMG_SIZE = "w-40 h-40"; // keep advisor & partner logo sizes consistent

/* --------------------------
   Data (images/text taken from the provided screenshots)
   Now supports multiple images per card via `images: [...]`
   -------------------------- */
const seniorLeaders = [
  {
    name: "Mohit Gupta",
    role: "Managing Partner",
    image: "/images/mohit2.jpeg",
    intro:
      "CA and IT Professional with 20+ Years of experience inleading risk and technology focus engagement forwide range of industries across the globe. Ex. Committee member of Delhi Branch of The Institute of Internal Auditors(IIA). Prominent speaker and author with IIA, ICAI, ICSI and ICWA.",
    specializations: ["Internal Audit", "IFC,", "Risk management", "Process Automation"],
    
  },
  {
    name: "Ankit Gupta",
    role: "Managing Partner",
    image: "/images/ankit.png",
    intro:
      "CA with over 17 years of experience in IT Audit, Internal Audit, SOX 404, compliance reviews, and business process controls across diverse industries including telecom, healthcare, real estate, manufacturing, FMCG, and infrastructure. Has international experience in regions such as Canada, Dubai, Qatar, and Malaysia.",
    specializations: ["Internal Audit", "SOX/ IFC", "Risk Management"],
    
  },
  {
    name: "Neeraj Gupta",
    role: "Associate Partner",
    image: "/images/niraj.jpeg",
    intro:
      "CA & CPA with 14+ years across finance, compliance, treasury, capital/annual budgeting and process controls, including liaison with statutory & government authorities. Led enterprise fixed-asset programs—physical verification, reconciliation, FAR sanitization and RFID tagging—and delivered statutory/ internal audits.",
    specializations: ["Finance", "Compliance", "Fixed Assets"],
  },
  {
    name: "Shilpi Sikka",
    role: "Associate Partner",
    image: "/images/shilpisikka.png",
    intro:
      "FCA & DISA-qualified CA with 18+ years specializing in banking audits—concurrent, statutory, revenue, stock, IS, credit and forensic—for PSU and private banks, including forex-authorized and corporate-finance units.",
    specializations: ["Statutory Audit", "Taxation", "Forensic"],
  },
  {
  name: "Atul Gupta",
  role: "Associate Partner",
  image: "/images/atul4.png",
  intro:
    "Chartered Accountant with 14+ years advising organizations on transnational business and top management issues, including change management, vision conceptualization, and strategic planning. Skilled in tax restructuring, corporate & commercial laws, international taxation, FEMA, and setting up accounting/MIS systems.",
  specializations: ["Tax Planning", "International Taxation", "FEMA & Compliance"],
},
{
  name: "Sandeep Aggarwal",
  role: "Associate Partner",
  image: "/images/sandeep4.png",
  intro:
    "Chartered Accountant with 14+ years of experience in strategy implementation, performance enhancement, organizational restructuring, mergers & amalgamations, financial due diligence, system designing, and cost optimization. Also skilled in fixed asset management and GST/service tax compliance.",
  specializations: ["Financial Due Diligence", "Risk Assessment", "GST Compliance"],
},
  {
    name: "Rohit Agrawal",
    role: "Associate Partner",
    image: "/images/Rohit2.jpeg",
    intro:
      "Technology Risk leader with ~20 years' experience in IT audit, cyber risk, information security, and compliance across global financial, healthcare, and enterprise sectors.",
    specializations: ["Cyber Security", "Data Privacy", "Cyber Risk"],
  },
  {
    name: "Yukti Arora",
    role: "Associate Partner",
    image: "/images/yuktii.png",
    intro:
      "Risk and Technology Consulting Leader with 20+ years of experience in Internal Audit, ERM, Cybersecurity, Information Security, ERP Advisory, Data Analytics, RPA, Blockchain, and Digital Transformation. Extensive experience in consulting, business development, practice leadership, and delivering governance, risk, and compliance solutions across diverse industries.",
    specializations: ["Governance, Risk & Compliance", "Cybersecurity & Privacy", "Digital Transformation, Data Analytics & RPA"],
  },
];

/* ---------- Advisors (Mentors & Advisors slide) ---------- */
const advisors = [
  // {
  //   name: "Mr. Dinesh Bahl",
  //   partnerLine: "Founding Partner, Sahni Natarajan & Bahl",
  //   mentorTitle: "Governance and Strategic Growth Mentor",
  //   image: "/images/dineshbhai.jpeg",
  //   intro:
  //     "40+ Years of auditing and management consulting. Past President of the Institute of Internal Auditors (IIA), served on Boards and Audit Committees of reputed corporations, including the Tata group.",
  // },
  {
    name: "Mr. G.K. Agrawal",
    partnerLine: "Founding Partner, Gianendra & Associates",
    mentorTitle: "Taxation and Strategic Team Mentor",
    image: "/images/gkagg2.jpeg",
    intro:
      "40+ years of Audit and Taxation for working with Government, PSU and Financial Sector. Specialized in Ind AS and Technical Reviewer with the Quality Review Board of ICAI.",
  },
  {
    name: "Mr. Ashok Sikka",
    partnerLine:
      " Founder, Ashok Sikka & Associates, Empanel with Supreme Court",
    mentorTitle: "Legal and Taxation Mentor",
    image: "/images/ashoksikka.png",
    intro:
      "50+ years of expertise in law and taxation. Brings legal precision, strategic foresight, and ethical leadership—trusted mentor guiding our vision with clarity and confidence.",
  },
];

/* ---------- Collaborations (from Alliance & Collaborative Partnerships slide)
   NOTE: imageSize controls the image-area size (width x height in px).
   SARC and RISKBERG -> 250 x 188
   gianender & BRIVAN -> 388 x 150
*/
const collaborations = [
  {
    name: "SARC Global",
    badge: "Network Partner",
    category: "Global Network",
    image: "/images/sarc25.jpg",
    imageSize: { w: 300, h: 188 },
    intro: "35+ Years, 10+ India Office, US, UK, Australia, UAE, Tanzania",
  },
  {
    name: "Aumyaa Consulting",
    badge: "Technology Risk & Cyber Security",
    category: "Cyber and IT",
    image: "/images/aumyaa.png",
    imageSize: { w: 250, h: 188 },
    intro: "500+ audits, 80+ customers, Certified Risk and IT professionals",
  },
  {
    name: "gianender & associates",
    badge: "Taxation and Strategic Team Partner",
    category: "People and Team",
    image: "/images/gianendraassociate2.jpg",
    imageSize: { w: 388, h: 150 },
    intro:
      "40+ Years, Audit and Taxation, 100+ Team IFRS, IndAS, Audit and Taxation",
  },
  {
    name: "Aout Advisors",
    badge: "Strategic Clients and Solutions Partner",
    category: "Strategic Solutions",
    image: "/images/aout2.png",
    imageSize: { w: 600, h: 180 },
    intro:
      "13+ Years, 100+ Team, 15+ Countries:  NRI Consulting,    Staffing, M&A, Investments",
  },
];

/* --------------------------
   UI helpers
   -------------------------- */
const SpecPill = ({ children }) => (
  <span
    className="text-[11px] px-2 py-0.5 rounded-full border"
    style={{
      color: ACCENT,
      borderColor: `${ACCENT}55`,
      backgroundColor: `${ACCENT}10`,
    }}
  >
    {children}
  </span>
);

/* Reusable ImageSwitcher (unchanged) */
function ImageSwitcher({
  images = [],
  alt = "",
  kind = "advisor",
  containerClass = "",
  imgClass = "",
  radius = IMG_RADIUS,
  fallback,
}) {
  const [idx, setIdx] = useState(0);
  const list = Array.isArray(images) && images.length > 0 ? images : [fallback];
  const onErr = (e) => {
    if (fallback && e.currentTarget.src !== window.location.origin + fallback) {
      e.currentTarget.onerror = null;
      e.currentTarget.src = fallback;
    }
  };

  return (
    
    
    <div className={containerClass}>
      <div
        className={`w-full overflow-hidden border border-neutral-700 ${imgClass}`}
        style={{ borderRadius: radius }}
      >
        <img
          src={list[idx]}
          alt={alt}
          className="w-full h-full object-cover"
          onError={onErr}
          style={{ display: "block" }}
        />
      </div>

      {list.length > 1 && (
        <div className="mt-2 flex flex-wrap gap-2 justify-center">
          {list.map((src, i) => {
            const active = i === idx;
            return (
              <button
                key={`${alt}-thumb-${i}`}
                type="button"
                aria-label={`Switch to image ${i + 1} for ${alt}`}
                onClick={() => setIdx(i)}
                className={`border rounded-md p-[2px] focus:outline-none transition ${
                  active ? "scale-[1.02]" : "hover:scale-[1.02]"
                }`}
                style={{
                  borderColor: active ? ACCENT : "rgba(255,255,255,0.12)",
                  boxShadow: active ? `0 0 0 1px ${ACCENT}55 inset` : "none",
                }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-9 h-9 object-cover rounded-[6px]"
                  onError={onErr}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* Leader card — now clickable when a `vcard` URL is present on the leader.
   Clicking anywhere on the card navigates to the relative vCard endpoint,
   which triggers the browser's native file download (handled by the
   backend's Content-Disposition header). No new buttons/icons are added;
   only cursor + keyboard accessibility are layered on top of the
   existing markup. */
function LeaderCard({ leader, widthClass = "w-56" }) {
  const isDownloadable = Boolean(leader.vcard);

  const handleActivate = () => {
    if (!isDownloadable) return;
    window.location.href = leader.vcard;
  };

  const handleKeyDown = (e) => {
    if (!isDownloadable) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleActivate();
    }
  };

  return (
    <article
      className={`${widthClass} h-full rounded-2xl bg-neutral-900/55 border border-neutral-800 p-4 flex flex-col items-center${
        isDownloadable ? " cursor-pointer" : ""
      }`}
      aria-label={
        isDownloadable
          ? `Download contact card for ${leader.name}`
          : `Leader ${leader.name}`
      }
      role={isDownloadable ? "button" : "group"}
      tabIndex={isDownloadable ? 0 : undefined}
      onClick={isDownloadable ? handleActivate : undefined}
      onKeyDown={isDownloadable ? handleKeyDown : undefined}
    >
      <div
        className="w-56 rounded-md p-2"
        style={{ backgroundColor: "rgba(255,255,255,0.01)" }}
        aria-hidden
      >
        <div
          className="w-full h-56 overflow-hidden border border-neutral-700"
          style={{ borderRadius: IMG_RADIUS }}
        >
          <img
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover"
            style={{ display: "block" }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/services21.jpeg";
            }}
          />
        </div>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-white text-center">
        {leader.name}
      </h3>

      <p className="text-sm mt-1 text-center" style={{ color: ACCENT }}>
        {leader.role}
      </p>

      <div className="mt-3 flex flex-wrap justify-center gap-2 max-w-[14rem]">
        {Array.isArray(leader.specializations) &&
          leader.specializations.map((s, i) => <SpecPill key={i}>{s}</SpecPill>)}
      </div>

      <p className="mt-4 text-neutral-300 text-sm leading-6 tracking-[0.01em] max-w-[14rem] text-justify">
        {leader.intro}
      </p>
    </article>
  );
}

/* Advisor card (unchanged) */
function AdvisorCard({ advisor }) {
  return (
    <article
  className="flex-1 rounded-2xl bg-neutral-900/55 border border-neutral-800 p-8 flex flex-col items-center text-center min-w-[350px] max-w-[500px]"
      aria-label={`Advisor ${advisor.name}`}
      role="group"
    >
      <div className="mb-4">
        <div
          className={`${PARTNER_IMG_SIZE} overflow-hidden border border-neutral-700`}
          style={{ borderRadius: "12px" }}
        >
          <img
            src={advisor.image}
            alt={advisor.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/images/mohit2.jpeg";
            }}
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2" style={{ color: ACCENT }}>
        {advisor.name}
      </h3>

      <p className="text-sm text-neutral-300 mb-3 min-h-[40px]">{advisor.partnerLine}</p>

      <p className="text-sm font-semibold mb-4" style={{ color: ORANGE }}>
        {advisor.mentorTitle}
      </p>

      <p className="text-neutral-300 text-sm leading-6 tracking-[0.01em] text-justify">
        {advisor.intro}
      </p>
    </article>
  );
}

/* Collaboration card - updated to respect per-item imageSize */
function CollaborationCard({ item }) {
  // fallback size
  const { w = 144, h = 144 } = item.imageSize || {};

  const imgWrapperStyle = {
    width: "100%",
    maxWidth: `${w}px`, // ensures we don't exceed desired width on wide screens
    aspectRatio: `${w} / ${h}`, // keeps the requested aspect ratio
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.04)",
    padding: "8px",
  };

  return (
    <article
      className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 overflow-hidden h-full min-h-[220px] hover:border-neutral-700 transition-all duration-300"
      role="group"
      aria-label={`Collaboration ${item.name}`}
    >
      <div className="p-5 h-full flex flex-col items-center text-center">
        {/* Logo/Image section with item-specific size (responsive via maxWidth + aspect-ratio) */}
        <div className="flex justify-center mb-4 w-full">
          <div style={imgWrapperStyle}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                padding: "2px",
              }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/placeholder.jpg";
              }}
            />
          </div>
        </div>

        {/* Content section */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h3
            className="text-xl font-bold tracking-tight mb-3 uppercase"
            style={{ fontFamily: "Poppins, sans-serif", color: ACCENT }}
          >
            {item.name}
          </h3>

          <p
            className="text-base font-medium text-neutral-200 mb-4 flex-1 leading-relaxed"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {item.intro}
          </p>

          <div className="mt-auto">
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full inline-block"
              style={{
                color: ORANGE,
                backgroundColor: "rgba(248, 186, 99, 0.15)",
                border: `1px solid ${ORANGE}44`,
              }}
            >
              {item.badge}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* Section helper — added `id` prop to support scroll targeting */
const Section = ({ id, title, subtitle, children, className = "" }) => (
  <section id={id} className={`mb-20 ${className}`}>
    <h2 className="text-2xl font-semibold text-neutral-200 mb-3 text-center">{title}</h2>
    {subtitle && (
      <div className="text-neutral-400 max-w-3xl mx-auto mb-8 text-center">{subtitle}</div>
    )}
    {children}
  </section>
);

/* --------------------------
   Main Team component
   -------------------------- */
export default function Team() {
  const collaborationCategories = useMemo(() => {
    const cats = Array.from(new Set(collaborations.map((c) => c.category)));
    return ["All", ...cats];
  }, []);

  const [activeCollabTab, setActiveCollabTab] = useState("All");

  // ── ADDED: read ?section param and scroll to the matching section ──
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (!section) return;

    const sectionMap = {
      senior: "section-senior",
      advisors: "section-advisors",
      collaborations: "section-collaborations",
    };

    const targetId = sectionMap[section];
    if (!targetId) return;

    // Delay lets the page finish rendering before we attempt to scroll
    const timer = setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const headerOffset = 90;
        const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [location.search]);
  // ──────────────────────────────────────────────────────────────────

  const filteredCollaborations = useMemo(() => {
    if (activeCollabTab === "All") return collaborations;
    return collaborations.filter((c) => c.category === activeCollabTab);
  }, [activeCollabTab]);

  return (
    <>
      {/* Add Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
        rel="stylesheet"
      />

      {/* Local CSS for improved justification (hyphenation + last-line justification) */}
      <style>{`
        .justify-paragraph {
          text-align: justify;
          text-justify: inter-word;
          -webkit-hyphens: auto;
          -moz-hyphens: auto;
          hyphens: auto;
          line-height: 1.6;
          text-align-last: justify;
        }
        @media (min-width: 1280px) {
          .justify-paragraph { max-width: 60ch; }
        }
        .two-line-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.25;
          max-height: 2.5em;
          margin: 0;
        }
      `}</style>
  {/*SEO optimization with React Helmet for the Team page, including title, description, keywords, and canonical link.*/}
    <Helmet>
      <title>Leadership Team | PSBS India</title>

      <meta
        name="description"
        content="Meet the experienced leadership team, mentors and strategic partners of PSBS India."
      />

<meta
  name="keywords"
  content="
  leadership team,
  management team,
  consulting experts,
  business advisors,
  strategic leadership,
  PSBS leadership"
/>

      <link
        rel="canonical"
        href="https://psbsindia.com/team"
      />
    </Helmet>
      <main className="relative text-white bg-black min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span
              className="inline-block px-4 py-1 rounded-full text-sm mb-4"
              style={{
                color: ACCENT,
                backgroundColor: "rgba(255,255,255,0.02)",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.2)",
              }}
            >
              Leadership Excellence
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span style={{ color: ACCENT }}>Leadership Team</span>
            </h1>

            <p className="text-neutral-400 max-w-3xl mx-auto mb-16 text-justify">
              We combine decades of expertise, deep industry knowledge, and forward-thinking strategic vision to
              deliver innovative and sustainable results that empower our clients to achieve lasting growth and success
            </p>
          </div>

          {/* Senior Leadership — id added for scroll targeting */}
          <Section
            id="section-senior"
            title="Senior Leadership"
            subtitle="Bringing decades of hands-on expertise, our leaders are committed to navigate clients through every challenge, ensuring reliable outcomes and tangible growth."
            className="mt-[75px]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch justify-items-center">
              {seniorLeaders.map((leader) => (
                <LeaderCard key={leader.name} leader={leader} widthClass="w-56" />
              ))}
            </div>
          </Section>

          {/* Mentors & Advisors — id added for scroll targeting */}
          <Section
            id="section-advisors"
            title="Mentors & Advisors"
            subtitle={
              <p
                aria-hidden={false}
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "1.25",
                  maxHeight: "2.5em",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                "Guiding Leadership, Shaping Tomorrow" — Our mentors are the guiding force behind our journey — bringing decades of expertise in Legal, Risk, and Governance to navigate our vision
              </p>
            }
          >
            <div className="flex flex-wrap justify-center gap-6">
              {advisors.map((advisor) => (
                <AdvisorCard key={advisor.name} advisor={advisor} />
              ))}
            </div>
          </Section>

          {/* Collaborations — id added for scroll targeting */}
          <Section
            id="section-collaborations"
            title="Alliance & Collaborative Partnerships"
            subtitle={
              <p aria-hidden={false} className="two-line-clamp" style={{ textAlign: "center" }}>
                Our diverse partner network equips clients with innovative solutions, resilient digital capabilities, expert teams, and strategic guidance to drive growth and confidently navigate complex challenges.
              </p>
            }
          >
            <div className="mb-12 flex justify-center">
              <div className="flex gap-1 bg-neutral-900/40 p-0.5 rounded-full border border-neutral-700/50">
                {collaborationCategories.map((cat) => {
                  const active = activeCollabTab === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCollabTab(cat)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none ${active ? "text-black shadow-sm" : "text-neutral-300 hover:text-white hover:bg-neutral-800/50"}`}
                      style={{
                        backgroundColor: active ? ACCENT : "transparent",
                        minWidth: "auto",
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto items-stretch">
              {filteredCollaborations.map((c) => (
                <CollaborationCard key={c.name} item={c} />
              ))}
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}