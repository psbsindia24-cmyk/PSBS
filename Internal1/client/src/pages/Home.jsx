

// import React, { useEffect, useState } from 'react';
// import api from '..//axios';
// import { useNavigate } from 'react-router-dom';
// import { CheckCircle, Settings, MapPin } from 'lucide-react';

// // Fallback services with images (kept for API/data continuity)
// const defaultServices = [
//   {
//     _id: 'service1',
//     title: 'Risk Advisory',
//     description:
//       'Helping businesses identify, assess, and mitigate risks to ensure long-term stability and compliance.',
//     details:
//       'Our experts provide tailored compliance frameworks, risk mitigation strategies, and governance models to strengthen business resilience.',
//     img: '/images/services1.jpg',
//   },
//   {
//     _id: 'static-2',
//     title: 'Outsourcing / Manual Support',
//     description:
//       'Streamline operations and reduce costs by outsourcing key functions to our experienced team.',
//     details:
//       'We offer skilled manpower and outsourcing solutions across finance, compliance, and operations so you can focus on growth.',
//     img: '/images/services2.jpg',
//   },
//   {
//     _id: 'static-3',
//     title: 'Product & Packages',
//     description:
//       'Custom-tailored service packages designed to meet your unique business needs, from startups to enterprises.',
//     details:
//       'Choose from flexible service bundles covering risk, compliance, and advisory, ensuring maximum value for your investment.',
//     img: '/images/services3.jpg',
//   },
//   {
//     _id: 'static-4',
//     title: 'Setting Up Business',
//     description:
//       'Guidance from registration to regulatory compliance for launching a successful business in India or abroad.',
//     details:
//       'From entity incorporation to tax registrations, we help entrepreneurs set up strong foundations for scalable businesses.',
//     img: '/images/services4.jpg',
//   },
//   {
//     _id: 'static-5',
//     title: 'Transaction & IPO',
//     description:
//       'Expert support for mergers, acquisitions, fundraising, and IPO preparation for smooth execution.',
//     details:
//       'Our advisory covers due diligence, structuring, and regulatory compliance to simplify complex corporate transactions.',
//     img: '/images/services5.jpg',
//   },
//   {
//     _id: 'static-6',
//     title: 'Retainership Services',
//     description:
//       'Ongoing advisory and compliance support through monthly or yearly retainership plans.',
//     details:
//       'Stay compliant and informed with continuous advisory support, regular updates, and dedicated consultant access.',
//     img: '/images/services6.jpg',
//   },
// ];

// // Fallback testimonials
// const defaultTestimonials = [
//   {
//     _id: 't-1',
//     name: 'Aarav Sharma',
//     role: 'Entrepreneur',
//     feedback:
//       'PSBS provided exceptional support in setting up my business. Their professionalism and clarity made the process seamless.',
//   },
//   {
//     _id: 't-2',
//     name: 'Neha Kapoor',
//     role: 'CFO',
//     feedback:
//       'The Risk Advisory team at PSBS guided us through complex compliance requirements with ease. Highly recommend their services!',
//   },
//   {
//     _id: 't-3',
//     name: 'Rohit Mehta',
//     role: 'Startup Founder',
//     feedback:
//       'Their Retainership Services are a game-changer. We now have peace of mind knowing compliance is always taken care of.',
//   },
// ];

// export default function Home() {
//   const [services, setServices] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const navigate = useNavigate();

//   // Address and coordinates for the exact location
//   const officeAddress = "903, New Delhi House, 27, Barakhamba Road, Connaught Place, New Delhi – 110 001";
//   const googleMapsUrl = "https://www.google.com/maps/place/New+Delhi+House,+27,+Barakhamba+Rd,+Connaught+Place,+New+Delhi,+Delhi+110001/@28.6301,77.2201,17z";
  
//   // Embedded map URL with the specific address
//   const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6737398318243!2d77.21734731504622!3d28.630078382426298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd372fb0a6c3%3A0x7e5e5a6e5c1e5b9e!2sNew%20Delhi%20House%2C%2027%2C%20Barakhamba%20Rd%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1693920000000!5m2!1sen!2sin";

//   const handleMapClick = () => {
//     window.open(googleMapsUrl, '_blank');
//   };

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const s = await api.get('/api/services');
//         const items = Array.isArray(s?.data) ? s.data.slice(0, 6) : [];
//         setServices(items.length ? items : defaultServices);
//       } catch {
//         setServices(defaultServices);
//       }

//       try {
//         const t = await api.get('/api/testimonials');
//         const items = Array.isArray(t?.data) ? t.data.slice(0, 5) : [];
//         setTestimonials(items.length ? items : defaultTestimonials);
//       } catch {
//         setTestimonials(defaultTestimonials);
//       }
//     };
//     load();
//   }, []);

//   // Static, screenshot-matching 3-card layout content (enhanced glassmorphism look)
//   const silkServices = [
//     {
//       slug: 'assurance-advisory',
//       title: 'Assurance & Advisory',
//       serviceIndex: 0, // Maps to first service in Services.jsx
//       desc:
//         'Our Assurance and Advisory services are focused on providing independent assurance on effectiveness of business process and provide your smart and workable solutions to management risks',
//       points: [
//         'Internal Audit & Controls',
//         'Risk Management',
//         'IT General Controls',
//         'Due diligence and regulatory health-checks',
//       ],
//     },
//     {
//       slug: 'business-growth-consulting',
//       title: 'Business Growth & Consulting',
//       serviceIndex: 1, // Maps to second service in Services.jsx
//       desc:
//         'Our Business Growth and Consulting services are tailor made to ensure all-round satisfaction of clients and provide the best solutions which act as catalyst in your business growth.',
//       points: [
//         'Process Automation',
//         'Business Analytics',
//         'Regulatory and Compliance Frameworks',
//         'Third Party Risk Management',
//       ],
//     },
//     {
//       slug: 'management-support',
//       title: 'Management Support',
//       serviceIndex: 2, // Maps to third service in Services.jsx
//       desc:
//         'Our Management Support services are KPI and SLA driven solutions to take all your pain in managing routine affairs and support activities so that you could channelize your energy in your core business.',
//       points: [
//         'Leadership and Governance (Retainership)',
//         'Business Process  Outsourcing',
//         'Setting up Businesses',
//         'Regulatory approvals',
//       ],
//     },
//   ];

//   // Service icons matching the image design
//   const serviceIcons = [
//     // Shield icon for Assurance & Advisory
//     (
//       <svg
//         key="shield"
//         width="28"
//         height="28"
//         viewBox="0 0 24 24"
//         fill="none"
//         className="text-cyan-400"
//         aria-hidden="true"
//       >
//         <path
//           d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"
//           stroke="currentColor"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     // Trending up icon for Business Growth & Consulting
//     (
//       <svg
//         key="trending"
//         width="28"
//         height="28"
//         viewBox="0 0 24 24"
//         fill="none"
//         className="text-cyan-400"
//         aria-hidden="true"
//       >
//         <path
//           d="M3 17l6-6 4 4 7-7"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M17 7h4v4"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     // Users icon for Management Support
//     (
//       <svg
//     key="users"
//     width="28"
//     height="28"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="text-cyan-400"
//     aria-hidden="true"
//   >
//     <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
//     <circle cx="9" cy="7" r="4" />
//     <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//   </svg>
//     ),
//   ];

//   const handleServiceClick = (service) => {
//     // Navigate to services page with serviceIndex parameter to show specific service
//     navigate(`/services?serviceIndex=${service.serviceIndex}`);
    
//     // Scroll to top after navigation
//     setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 100);
//   };

//   // Handle services button click from hero section
//   const handleServicesButtonClick = () => {
//     navigate('/services');
//     setTimeout(() => {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }, 100);
//   };

//   // === KEY ALIGNMENT CHANGE ===
//   const descMinClass = 'min-h-[92px] md:min-h-[140px]';

//   return (
//     <>
//       {/* ============ ENHANCED HERO ============ */}
//       <section
//         id="hero"
//         className="relative bg-black text-white min-h-[90vh] flex items-center overflow-hidden"
//       >
//         {/* Enhanced Background with Multiple Layers */}
//         <div className="absolute inset-0">
//           {/* Base Image */}
//           <img
//             src="/images/hero1.jpeg"
//             alt="Boardroom background"
//             className="w-full h-full object-cover"
//           />

//           {/* Shine and Glass Effect Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/75" />

//           {/* Professional Blue Tint */}
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-cyan-800/25" />

//           {/* Subtle Shine Effect */}
//           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent" />

//           {/* Additional Professional Glow */}
//           <div className="absolute inset-0">
//             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-950/20 via-transparent to-gray-900/30" />
//             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(14,165,233,0.08),transparent_50%)]" />
//           </div>
//         </div>

//         {/* Content with Enhanced Typography */}
//         <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
//           {/* Main Heading - Matching Image Style */}
//           <div className="mb-8">
//             <h1 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-tight text-white">
//               Professional
//             </h1>
//             <h1 className="text-6xl md:text-8xl font-normal leading-[0.95] tracking-tight text-cyan-400 mt-2">
//               Excellence
//             </h1>
//           </div>

//           {/* Subtitle */}
//           <p className="mt-8 text-lg md:text-xl font-light text-gray-200 max-w-4xl leading-relaxed">
//             Empowering organizations through strategic consulting,
//             <br className="hidden md:block" />
//             comprehensive risk management, and intelligent business solutions
//             <br className="hidden md:block" />
//             to drive sustainable growth.
//           </p>

//           {/* CTA Buttons */}
//           <div className="mt-12 flex flex-col sm:flex-row gap-4">
//             <button
//               onClick={handleServicesButtonClick}
//               className="px-8 py-4 rounded-lg font-medium bg-cyan-500 text-black hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
//             >
//               Explore Services →
//             </button>
//             <a
//               href="#contact"
//               className="px-8 py-4 rounded-lg font-medium bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
//             >
//               Schedule Consultation
//             </a>
//           </div>
//         </div>

//         {/* Enhanced Floating Elements for Professional Look */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-1000" />
//         </div>
//       </section>

//       {/* ============ ENHANCED ABOUT WITH BLUE THEME ============ */}
//       <section className="bg-black py-20 px-4 border-t border-neutral-800">
//         <div className="max-w-6xl mx-auto">
//           {/* Enhanced description with blue gradient theme */}
//           <div className="relative mb-12">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-blue-600/10 rounded-2xl blur-xl"></div>
//             <div className="relative bg-gradient-to-r from-blue-900/20 via-blue-800/10 to-blue-900/20 rounded-2xl p-8 border border-blue-500/20">
//               <p className="text-lg text-neutral-200 leading-relaxed text-center max-w-4xl mx-auto">
//                 At <span className="font-semibold text-cyan-400">PSBS</span>, we create strategic consulting solutions that help businesses adapt, grow, and thrive.
//                 <br />
//                 Our approach blends innovation, technology, and deep industry knowledge to deliver measurable impact.
//               </p>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//             <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300">
//               <h3 className="text-4xl font-bold text-cyan-400 mb-2">100+</h3>
//               <p className="text-neutral-300">Years of Collective Leadership Experience</p>
//             </div>
//             <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300">
//               <h3 className="text-4xl font-bold text-cyan-400 mb-2">25+</h3>
//               <p className="text-neutral-300">Extend Network of Clients</p>
//             </div>
//             <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300">
//               <h3 className="text-4xl font-bold text-cyan-400 mb-2">150+</h3>
//               <p className="text-neutral-300">Extended Team Network</p>
//             </div>
//             <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300">
//               <h3 className="text-4xl font-bold text-cyan-400 mb-2">95%</h3>
//               <p className="text-neutral-300">Client Satisfaction</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============ WHY CHOOSE US (3 features - removed 4th) ============ */}
//       <section id="why-choose-psbs" className="bg-black py-20 px-6 border-t border-neutral-800">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
//           {/* Left: Title + 3 feature blocks */}
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
//               Why Choose <span className="text-cyan-400">Our Expertise?</span>
//             </h2>

//             <div className="space-y-6">
//               {/* Feature 1 */}
//               <div className="flex gap-4 p-5 rounded-xl bg-neutral-900/70 ring-1 ring-white/10">
//                 <div className="shrink-0 mt-1 text-cyan-400">
//                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                     <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.5" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-white text-xl font-semibold mb-1">Dynamic Leadership & Depth of Experience</h3>
//                   <p className="text-neutral-300 text-sm">
//                     Our dynamic leadership brings decades of expertise in Governance, Risk Management, Finance, Technology, and Compliance, providing robust strategic guidance and forward-thinking solutions for complex business challenges.
//                   </p>
//                 </div>
//               </div>

//               {/* Feature 2 */}
//               <div className="flex gap-4 p-5 rounded-xl bg-neutral-900/70 ring-1 ring-white/10">
//                 <div className="shrink-0 mt-1 text-cyan-400">
//                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                     <path
//                       d="M12 3l8 4-8 4-8-4 8-4zm0 14l8-4m-16 0l8 4"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-white text-xl font-semibold mb-1">Integrated Expertise for Tailored Solutions</h3>
//                   <p className="text-neutral-300 text-sm">
//                     With professionals from varied fields, we craft consulting solutions that fit each client's context, delivering personalized strategies, proven methodologies, and actionable execution across industries.
//                   </p>
//                 </div>
//               </div>

//               {/* Feature 3 */}
//               <div className="flex gap-4 p-5 rounded-xl bg-neutral-900/70 ring-1 ring-white/10">
//                 <div className="shrink-0 mt-1 text-cyan-400">
//                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                     <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
//                     <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-white text-xl font-semibold mb-1">Operational Excellence & Client Partnership</h3>
//                   <p className="text-neutral-300 text-sm">
//                     We prioritizes operational excellence through technology-driven solutions while fostering strong client partnerships. Our clients' satisfaction is driven by our senior leadership's involvement, integrity, and measurable results.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right: Advanced Solutions panel with gold accent */}
//           <div className="bg-neutral-900/80 rounded-2xl shadow-xl ring-1 ring-white/10 relative overflow-hidden">
//             <div className="absolute inset-y-0 left-0 w-1 bg-[#EAA038]" />
//             <div className="p-8">
//               <h3 className="text-2xl font-bold text-white mb-4">Advanced Solutions</h3>
//               <p className="text-neutral-300 mb-6">We leverage cutting-edge technology and proven methodologies to deliver:</p>
//               <ul className="space-y-3">
//                 {[
//                   'Enhanced risk assessment and monitoring',
//                   'Deep process insights leveraging intelligent analytics',
//                   'Smart process and controls optimization',
//                   'Automated Employee Life Cycle Management',
//                   'Automated Asset Management Solutions',
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       aria-hidden="true"
//                       className="mt-1 text-cyan-400"
//                     >
//                       <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                     <span className="text-neutral-200">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============ ENHANCED SERVICES (Professional glassmorphism cards with hover effects) ============ */}
//       <section id="services" className="bg-neutral-900 py-20 border-t border-neutral-800 relative overflow-hidden">
//         {/* Background overlay to match the image */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-neutral-900/90 to-black/85" />
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.03),transparent_70%)]" />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6">
//           {/* Section heading - matching image typography with two lines */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-2 leading-tight">
//               Comprehensive <span className="text-cyan-400">Management</span>
//             </h2>
//             <h2 className="text-4xl md:text-6xl font-light tracking-tight text-cyan-400 mb-6 leading-tight">
//               Consulting
//             </h2>
//             <p className="text-neutral-300 text-lg max-w-4xl mx-auto leading-relaxed">
//               From assurance and advisory to business growth and management support, we deliver sophisticated solutions tailored to your organizational needs.
//             </p>
//           </div>

//           {/* Services grid with glassmorphism cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
//             {silkServices.map((service, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleServiceClick(service)}
//                 className="group relative rounded-2xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 flex flex-col h-full"
//                 style={{
//                   background: 'rgba(255, 255, 255, 0.01)',
//                   backdropFilter: 'blur(20px) saturate(180%)',
//                   WebkitBackdropFilter: 'blur(20px) saturate(180%)',
//                   border: '1px solid rgba(255, 255, 255, 0.08)',
//                   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
//                   minHeight: '420px',
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
//                   e.currentTarget.style.border = '1px solid rgba(14, 165, 233, 0.3)';
//                   e.currentTarget.style.boxShadow = '0 20px 60px rgba(14, 165, 233, 0.15), 0 0 0 1px rgba(14, 165, 233, 0.1)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
//                   e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.08)';
//                   e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
//                 }}
//               >
//                 {/* Professional glassmorphism inner glow effect */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] via-white/[0.005] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 {/* Icon and Title */}
//                 <div className="relative flex items-start gap-4 mb-4">
//                   <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-500/15 group-hover:border-cyan-400/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
//                     {serviceIcons[index]}
//                   </div>
//                   <h3 className="text-xl font-medium text-white leading-tight group-hover:text-cyan-50 transition-colors duration-300">
//                     {service.title}
//                   </h3>
//                 </div>

//                 {/* Content block grows to align cards */}
//                 <div className="flex-1 flex flex-col">
//                   {/* Description */}
//                   <p className={`text-neutral-400 text-sm leading-relaxed mb-4 ${descMinClass}`}>
//                     {service.desc}
//                   </p>

//                   {/* Service Points with CheckCircle icons */}
//                   <div className="space-y-3">
//                     {service.points.map((point, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300"
//                         style={{ transitionDelay: `${idx * 50}ms` }}
//                       >
//                         <CheckCircle className="w-5 h-5 mt-[2px] text-emerald-400" aria-hidden="true" />
//                         <span className="text-neutral-200 text-sm group-hover:text-white transition-colors duration-300">
//                           {point}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Static "See More" indicator */}
//                 <div className="mt-6 flex items-center gap-2 text-cyan-400 text-sm font-medium">
//                   <span>See More</span>
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//                     <path d="M7 17l10-10M17 7H7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </div>

//                 {/* Hover glow */}
//                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ OUR MISSION & VALUES ============ */}
//       <section id="our-mission-and-values" className="bg-neutral-950 py-16 px-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-white mb-10">Our Mission and Values</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
//             <div>
//               {/* UPDATED per request: #F8BA63 */}
//               <h3 className="text-2xl font-semibold mb-4" style={{ color: '#F8BA63' }}>
//                 Our Mission
//               </h3>
//               <p className="text-neutral-300 leading-relaxed">
//                 "Our mission is to empower businesses to unlock their full potential and achieve sustainable growth and targeted goals by leveraging our tailor-made solution offerings."
//               </p>
//             </div>
//             <div>
//               {/* UPDATED per request: #F8BA63 */}
//               <h3 className="text-2xl font-semibold mb-4" style={{ color: '#F8BA63' }}>
//                 Our Values
//               </h3>
//               <p className="text-neutral-300 leading-relaxed">
//                 "At Process Sage, we are guided by our purpose and core values of building trust and professional integrity to drive excellence."
//               </p>
//             </div>
//           </div>

//           {/* Values grid with Settings icon replacing emojis */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//             {[
//               [
//                 'CLIENT',
//                 "For us, our clients come first. We focus on building trust that lasts, based on excellence in delivery and professional integrity.",
//               ],
//               [
//                 'PEOPLE',
//                 'Our people are our strength. People care, growth, and knowledge form the basis of our organization.',
//               ],
//               [
//                 'INTEGRITY',
//                 'We work with integrity. Values are the most important requirement for professionals.',
//               ],
//               [
//                 'QUALITY',
//                 "We provide quality services to our clients with continued focus on knowledge growth , deep understanding of clients' requirements.",
//               ],
//             ].map(([title, desc]) => (
//               <div key={title} className="flex flex-col items-center text-center">
//                 {/* UPDATED per request: circle in cyan blue */}
//                 <div
//                   className="w-24 h-24 rounded-full border-4 border-cyan-400 flex items-center justify-center mb-4"
//                   aria-hidden="true"
//                 >
//                   <Settings className="w-10 h-10 text-white" />
//                 </div>
//                 <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
//                 <p className="text-neutral-300 text-sm leading-relaxed">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============ CONTACT WITH INTERACTIVE MAP ============ */}
//       <section className="bg-black py-16 px-4 border-neutral-800 border-t" id="contact">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
//           {/* Left: text + interactive map */}
//           <div>
//             <h2 className="text-4xl font-bold text-white mb-4">
//               Contact <span className="text-cyan-400">Us</span>
//             </h2>
//             <p className="text-neutral-300 mb-6">
//               Have questions or need assistance? We'd love to hear from you. Reach out using the form or through our direct contact details below.
//             </p>

//             <div className="space-y-3 text-neutral-300 mb-6">
//               <p>
//                 <span className="font-semibold">Address:</span> {officeAddress}
//               </p>
//               <p>
//                 📞 <span className="font-semibold">Phone:</span> +91 92500 17481
//               </p>
//               <p>
//                 ✉️ <span className="font-semibold">Email:</span> contact@psbsindia.com
//               </p>
//             </div>

//             {/* Interactive Map Section */}
//             <div className="relative">
//               <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
//                 <MapPin className="w-5 h-5 text-cyan-400" />
//                 Our Location
//               </h3>
              
//               {/* Map Container with Click Handler */}
//               <div 
//                 className="relative overflow-hidden rounded-xl border border-neutral-700 cursor-pointer group hover:border-cyan-400 transition-all duration-300"
//                 onClick={handleMapClick}
//                 title="Click to open in Google Maps"
//               >
//                 {/* Embedded Google Map */}
//                 <iframe
//                   title="PSBS Office Location"
//                   src={embedMapUrl}
//                   className="w-full h-64 md:h-72 block"
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   allowFullScreen
//                   style={{ pointerEvents: 'none' }}
//                 />
                
//                 {/* Overlay with Map Pin Icon */}
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
//                   <div className="bg-white/90 group-hover:bg-white rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-all duration-300">
//                     <MapPin className="w-8 h-8 text-red-500" />
//                   </div>
//                 </div>
                
//                 {/* Click to Open Indicator */}
//                 <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   Click to open in Maps
//                 </div>
                
//                 {/* Address Overlay */}
//                 <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-2 rounded-lg max-w-[280px]">
//                   <p className="text-xs font-medium">New Delhi House</p>
//                   <p className="text-xs text-gray-300">Connaught Place, New Delhi</p>
//                 </div>
//               </div>
              
//               {/* Additional Map Info */}
//               <div className="mt-3 flex items-center justify-between text-sm text-neutral-400">
//                 <span>📍 Connaught Place, Central Delhi</span>
//                 <button
//                   onClick={handleMapClick}
//                   className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
//                 >
//                   <span>Get Directions</span>
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//                     <path d="M7 17l10-10M17 7H7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right: contact form */}
//           <div className="bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-lg border border-neutral-800 text-neutral-100">
//             <form className="space-y-4">
//               {/* Name */}
//               <div>
//                 <label className="block text-sm font-medium text-neutral-300 mb-1">Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:border-cyan-400 focus:ring focus:ring-cyan-500/30 outline-none"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-neutral-300 mb-1">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:border-cyan-400 focus:ring focus:ring-cyan-500/30 outline-none"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-sm font-medium text-neutral-300 mb-1">Message</label>
//                 <textarea
//                   rows="5"
//                   placeholder="Write your message..."
//                   className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:border-cyan-400 focus:ring focus:ring-cyan-500/30 outline-none resize-none"
//                 />
//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="w-full py-2 px-4 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* ============ LEGAL & POLICY ============ */}
//       <section className="bg-neutral-900 py-12 px-4 border-t border-neutral-800">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Legal & Policy</h2>
//           <p className="text-neutral-400 max-w-3xl mx-auto mb-6">
//             PSBS is committed to operating with transparency, integrity, and in compliance with applicable laws and regulations.
//           </p>
//           <div className="flex justify-center gap-6">
//             <a href="/terms-and-conditions" className="text-cyan-400 hover:text-[#EAA038] transition-colors">
//               Terms & Conditions
//             </a>
//             <a href="/privacy-policy" className="text-cyan-400 hover:text-[#EAA038] transition-colors">
//               Privacy Policy
//             </a>
//             <a href="/disclaimer" className="text-cyan-400 hover:text-[#EAA038] transition-colors">
//               Disclaimer
//             </a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


//client/src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Settings, MapPin } from 'lucide-react';
import { sendContact } from "../api/contactApi";
import { Helmet } from "react-helmet-async";

// Fallback services with images (kept for API/data continuity)
const defaultServices = [
  {
    _id: 'service1',
    title: 'Risk Advisory',
    description:
      'Helping businesses identify, assess, and mitigate risks to ensure long-term stability and compliance.',
    details:
      'Our experts provide tailored compliance frameworks, risk mitigation strategies, and governance models to strengthen business resilience.',
    img: '/images/services1.jpg',
  },
  {
    _id: 'static-2',
    title: 'Outsourcing / Manual Support',
    description:
      'Streamline operations and reduce costs by outsourcing key functions to our experienced team.',
    details:
      'We offer skilled manpower and outsourcing solutions across finance, compliance, and operations so you can focus on growth.',
    img: '/images/services2.jpg',
  },
  {
    _id: 'static-3',
    title: 'Product & Packages',
    description:
      'Custom-tailored service packages designed to meet your unique business needs, from startups to enterprises.',
    details:
      'Choose from flexible service bundles covering risk, compliance, and advisory, ensuring maximum value for your investment.',
    img: '/images/services3.jpg',
  },
  {
    _id: 'static-4',
    title: 'Setting Up Business',
    description:
      'Guidance from registration to regulatory compliance for launching a successful business in India or abroad.',
    details:
      'From entity incorporation to tax registrations, we help entrepreneurs set up strong foundations for scalable businesses.',
    img: '/images/services4.jpg',
  },
  {
    _id: 'static-5',
    title: 'Transaction & IPO',
    description:
      'Expert support for mergers, acquisitions, fundraising, and IPO preparation for smooth execution.',
    details:
      'Our advisory covers due diligence, structuring, and regulatory compliance to simplify complex corporate transactions.',
    img: '/images/services5.jpg',
  },
  {
    _id: 'static-6',
    title: 'Retainership Services',
    description:
      'Ongoing advisory and compliance support through monthly or yearly retainership plans.',
    details:
      'Stay compliant and informed with continuous advisory support, regular updates, and dedicated consultant access.',
    img: '/images/services6.jpg',
  },
];

// Fallback testimonials
const defaultTestimonials = [
  {
    _id: 't-1',
    name: 'Aarav Sharma',
    role: 'Entrepreneur',
    feedback:
      'PSBS provided exceptional support in setting up my business. Their professionalism and clarity made the process seamless.',
  },
  {
    _id: 't-2',
    name: 'Neha Kapoor',
    role: 'CFO',
    feedback:
      'The Risk Advisory team at PSBS guided us through complex compliance requirements with ease. Highly recommend their services!',
  },
  {
    _id: 't-3',
    name: 'Rohit Mehta',
    role: 'Startup Founder',
    feedback:
      'Their Retainership Services are a game-changer. We now have peace of mind knowing compliance is always taken care of.',
  },
];

export default function Home() {
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  // Added: holds a dynamic status message (e.g. backend error message) for display in the existing toast UI
  const [statusMessage, setStatusMessage] = useState('');

  // === IMPORTANT: exact coordinates provided by user ===
  const MARKER_LAT = 28.630147090120555;
  const MARKER_LNG = 77.2231888017762;

  // Human-readable address (keeps the same string you provided)
  const officeAddress = "903, New Delhi House, 27, Barakhamba Road, Connaught Place, New Delhi – 110 001";

  // Openable Google Maps link (opens the exact coordinates in a new tab)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${MARKER_LAT},${MARKER_LNG}`;

  // Embedded map URL centered on the coordinates.
  const embedMapUrl = `https://www.google.com/maps?q=${MARKER_LAT},${MARKER_LNG}&z=18&output=embed`;

  const handleMapClick = () => {
    // Open the exact lat/lng in Google Maps in a new tab
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Simple, standard email pattern: something@something.tld (covers .com, .in, .co.in, .org, etc.)
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation - all fields required
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all fields before submitting.');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    // Email format validation
    if (!EMAIL_REGEX.test(formData.email.trim())) {
      setSubmitStatus('error');
      setStatusMessage('Please enter a valid email address (e.g. name@example.com).');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    try {
      const response = await sendContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      });

      console.log("Contact API Response:", response);

      if (response.success !== true) {
        throw new Error(response.message);
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error("Contact API Error:", error);
      setSubmitStatus('error');
      setStatusMessage(
        error.message ||
        error.response?.data?.message ||
        "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

useEffect(() => {
  setServices(defaultServices);
  setTestimonials(defaultTestimonials);
}, []);

  // Static, screenshot-matching 3-card layout content (enhanced glassmorphism look)
  const silkServices = [
    {
      slug: 'assurance-advisory',
      title: 'Assurance & Advisory',
      serviceIndex: 0, // Maps to first service in Services.jsx
      desc:
        'Our Assurance and Advisory services are focused on providing independent assurance on effectiveness of business process and provide your smart and workable solutions to management risks',
      points: [
        'Internal Audit & Controls',
        'Risk Management',
        'IT General Controls',
        'Due diligence and regulatory health-checks',
      ],
    },
    {
      slug: 'business-growth-consulting',
      title: ' Management Consulting and Business Advisory',
      serviceIndex: 1, // Maps to second service in Services.jsx
      desc:
        'Our Business Growth and Consulting services are tailor made to ensure all-round satisfaction of clients and provide the best solutions which act as catalyst in your business growth.',
      points: [
        'Process Automation',
        'Business Analytics',
        'Regulatory and Compliance Frameworks',
        'Third Party Risk Management',
      ],
    },
    {
      slug: 'Accounting-management-support',
      title: 'Accounting & Management Support',
      serviceIndex: 2, // Maps to third service in Services.jsx
      desc:
        'Our Management Support services are KPI and SLA driven solutions to take all your pain in managing routine affairs and support activities so that you could channelize your energy in your core business.',
      points: [
        'Accounting and Audit Support',
        'Leadership and Governance (Retainership)',
        'Business Process  Outsourcing',
        'Setting up Businesses',
      
      ],
    },
  ];

  // Service icons matching the image design
  const serviceIcons = [
    // Shield icon for Assurance & Advisory
    (
      <svg
        key="shield"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="text-cyan-400"
        aria-hidden="true"
      >
        <path
          d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    // Trending up icon for Business Growth & Consulting
    (
      <svg
        key="trending"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="text-cyan-400"
        aria-hidden="true"
      >
        <path
          d="M3 17l6-6 4 4 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 7h4v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    // Users icon for Management Support
    (
      <svg
        key="users"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan-400"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  ];

  const handleServiceClick = (service) => {
    // Navigate to services page with serviceIndex parameter to show specific service
    navigate(`/services?serviceIndex=${service.serviceIndex}`);

    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Handle services button click from hero section - scroll to services section
  const handleServicesButtonClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle contact button click - scroll to contact section with offset for header
  const handleScheduleConsultationClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Get the current scroll position and target position
      const targetPosition = contactSection.offsetTop - 80; // 80px offset for header/navigation

      // Smooth scroll to the contact section
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // === KEY ALIGNMENT CHANGE ===
  const descMinClass = 'min-h-[92px] md:min-h-[140px]';
  

  return (
    <>
    {/* =========== SEO OPTIMIZATION WITH REACT-HELMET-ASYNC ============ * */}
       <Helmet>
    <title>Process Sage Business Solutions </title>

      <meta
        name="description"
        content="Process Sage Business Solutions (PSBS) — part of PSBS Management Services LLP —
provides management consulting, internal audit, business growth consulting and risk advisory."

      />

     <meta
  name="keywords"
  content="
  management consulting India,
  business consulting services,
  corporate advisory,
  internal audit,
  risk advisory,
  strategic consulting,
  business growth consulting,
  PSBS India"
/>

      <link
        rel="canonical"
        href="https://psbsindia.com/"
        
      />
      <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Process Sage Business Solutions",
    legalName: "PSBS Management Services LLP",

    alternateName: ["PSBSIndia", "PSBS", "PSBS Management Services LLP"],

    url: "https://psbsindia.com",

    logo: "https://psbsindia.com/logo.png",

    image: "https://psbsindia.com/logo.png",

    description:
      "Process Sage Business Solutions (PSBS India) provides management consulting, internal audit, risk advisory, business growth consulting and management support services.",

    email: "ankitgupta@psbsindia.com",

    telephone: "+91 9250017481",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "903, New Delhi House, 27, Barakhamba Road, Connaught Place",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110001",
      addressCountry: "IN"
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9250017481",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"]
    }
  })}
</script>
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "Process Sage Business Solutions",

    url: "https://psbsindia.com",

    image: "https://psbsindia.com/logo.png",

    telephone: "+91 9250017481",

    email: "ankitgupta@psbsindia.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "903, New Delhi House, 27, Barakhamba Road, Connaught Place",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110001",
      addressCountry: "IN"
    },

    areaServed: "India",

    serviceType: [
      "Management Consulting",
      "Business Consulting",
      "Internal Audit",
      "Risk Advisory",
      "Business Growth Consulting",
      "Management Support"
    ]
  })}
</script>
    </Helmet>
      {/* ============ ENHANCED HERO ============ */}
      <section
        id="hero"
        className="relative bg-black text-white min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Base Image */}
          <img
            src="/images/hero1.jpeg"
            alt="Boardroom background"
            className="w-full h-full object-cover"
          />

          {/* Shine and Glass Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/75" />

          {/* Professional Blue Tint */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-cyan-800/25" />

          {/* Subtle Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent" />

          {/* Additional Professional Glow */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-950/20 via-transparent to-gray-900/30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(14,165,233,0.08),transparent_50%)]" />
          </div>
        </div>

        {/* Content with Enhanced Typography */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          {/* Main Heading - Matching Image Style */}
          <div className="mb-8">
           <h1 className="leading-[0.95] tracking-tight">
  <span className="block text-6xl md:text-8xl font-light text-white">
    Professional
  </span>

  <span className="block text-6xl md:text-8xl font-normal text-cyan-400 mt-2">
    Excellence
  </span>
</h1>


          </div>

          {/* Subtitle */}
          <p className="mt-8 text-lg md:text-xl font-light text-gray-200 max-w-4xl leading-relaxed">
            Empowering organizations through Management Consulting, Accounting and Audit support, Risk Management and Business Advisory Services — intelligent solutions that drive sustainable growth
            <br className="hidden md:block" />

          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleServicesButtonClick}
              className="px-8 py-4 rounded-lg font-medium bg-cyan-500 text-black hover:bg-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Explore Services →
            </button>
            <button
              onClick={handleScheduleConsultationClick}
              className="px-8 py-4 rounded-lg font-medium bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Enhanced Floating Elements for Professional Look */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>
      </section>

      {/* ============ ENHANCED ABOUT WITH BLUE THEME ============ */}
      <section className="bg-black py-20 px-4 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced description with blue gradient theme */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-blue-600/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-r from-blue-900/20 via-blue-800/10 to-blue-900/20 rounded-2xl p-8 border border-blue-500/20">
              <p className="text-lg text-neutral-200 leading-relaxed text-center max-w-4xl mx-auto">
                At <span className="font-semibold text-cyan-400">PSBS (Process Sage Business Solutions), </span> we create strategic consulting solutions that help businesses adapt, grow, and thrive.
                
                
                Our approach blends innovation, technology, and deep industry knowledge to deliver measurable impact.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">100+</h3>
              <p className="text-neutral-300">Years of Collective Leadership Experience</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">25+</h3>
              <p className="text-neutral-300">Extend Network of Clients</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">150+</h3>
              <p className="text-neutral-300">Extended Team Network</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-2xl shadow-lg ring-1 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">95%</h3>
              <p className="text-neutral-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US (3 features - removed 4th) ============ */}
      <section id="why-choose-psbs" className="bg-black py-20 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Title + 3 feature blocks */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose <span className="text-cyan-400">PSBS India?</span>
            </h2>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4 p-5 rounded-xl bg-neutral-900/70 ring-1 ring-white/10">
                <div className="shrink-0 mt-1 text-cyan-400">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">Dynamic Leadership & Depth of Experience</h3>
                  <p className="text-neutral-300 text-sm">
           Our dynamic leadership brings decades of expertise in Governance, Risk Management, Internal Audit, Accounting, Technology, and Compliance, providing strategic guidance and forward-thinking solutions for complex business challenges
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 p-5 rounded-xl bg-neutral-900/70 ring-1 ring-white/10">
                <div className="shrink-0 mt-1 text-cyan-400">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 3l8 4-8 4-8-4 8-4zm0 14l8-4m-16 0l8 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">Integrated Expertise for Tailored Solutions</h3>
                  <p className="text-neutral-300 text-sm">
                    With professionals from varied fields, we craft consulting solutions that fit each client's context, delivering personalized strategies, proven methodologies, and actionable execution across industries
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 p-5 rounded-xl bg-neutral-900/70 ring-1 ring-white/10">
                <div className="shrink-0 mt-1 text-cyan-400">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold mb-1">Operational Excellence & Client Partnership</h3>
                  <p className="text-neutral-300 text-sm">
                    We prioritizes operational excellence through technology-driven solutions while fostering strong client partnerships. Our clients' satisfaction is driven by our senior leadership's involvement, integrity, and measurable results
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Advanced Solutions panel with gold accent */}
          <div className="bg-neutral-900/80 rounded-2xl shadow-xl ring-1 ring-white/10 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-1 bg-[#EAA038]" />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Solutions</h3>
              <p className="text-neutral-300 mb-6">We leverage cutting-edge technology and proven methodologies to deliver:</p>
              <ul className="space-y-3">
                {[
                  'Accounting, Audit Support and Booking Keeping',
                  ' Internal Audit, Operational Audit and Internal finance control',
                  
                  'Enhanced risk assessment and monitoring',
                  'Deep process insights leveraging intelligent analytics',
                  'Smart process and controls optimization',
                  
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="mt-1 text-cyan-400"
                    >
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-neutral-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ENHANCED SERVICES (Professional glassmorphism cards with hover effects) ============ */}
      <section id="services" className="bg-neutral-900 py-20 border-t border-neutral-800 relative overflow-hidden">
        {/* Background overlay to match the image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-neutral-900/90 to-black/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.03),transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section heading - matching image typography with two lines */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-2 leading-tight">
              Comprehensive <span className="text-cyan-400">Management</span>
            </h2>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-cyan-400 mb-6 leading-tight">
              Consulting
            </h2>
            <p className="text-neutral-300 text-lg max-w-4xl mx-auto leading-relaxed">
              From Internal Audit and Business Advisory Services to Process Improvement and Business Automation, we deliver sophisticated solutions tailored to your organizational needs
            </p>
          </div>

          {/* Services grid with glassmorphism cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {silkServices.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service)}
                className="group relative rounded-2xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 flex flex-col h-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  minHeight: '420px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.border = '1px solid rgba(14, 165, 233, 0.3)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(14, 165, 233, 0.15), 0 0 0 1px rgba(14, 165, 233, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                }}
              >
                {/* Professional glassmorphism inner glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.02] via-white/[0.005] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon and Title */}
                <div className="relative flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-500/15 group-hover:border-cyan-400/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                    {serviceIcons[index]}
                  </div>
                  <h3 className="text-xl font-medium text-white leading-tight group-hover:text-cyan-50 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Content block grows to align cards */}
                <div className="flex-1 flex flex-col">
                  {/* Description */}
                  <p className={`text-neutral-400 text-sm leading-relaxed mb-4 ${descMinClass}`}>
                    {service.desc}
                  </p>

                  {/* Service Points with CheckCircle icons */}
                  <div className="space-y-3">
                    {service.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <CheckCircle className="w-5 h-5 mt-[2px] text-emerald-400" aria-hidden="true" />
                        <span className="text-neutral-200 text-sm group-hover:text-white transition-colors duration-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Static "See More" indicator */}
                <div className="mt-6 flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  <span>See More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17l10-10M17 7H7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR MISSION & VALUES ============ */}
      <section id="our-mission-and-values" className="bg-neutral-950 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Our Mission and Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              {/* UPDATED per request: #F8BA63 */}
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#F8BA63' }}>
                Our Mission
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                "Our mission is to empower businesses to unlock their full potential and achieve sustainable growth and targeted goals by leveraging our tailor-made solution offerings"
              </p>
            </div>
            <div>
              {/* UPDATED per request: #F8BA63 */}
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#F8BA63' }}>
                Our Values
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                "At Process Sage, we are guided by our purpose and core values of building trust and professional integrity to drive excellence"
              </p>
            </div>
          </div>

          {/* Values grid with Settings icon replacing emojis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              [
                'CLIENT',
                "For us, our clients come first. We focus on building trust that lasts, based on excellence in delivery and professional integrity.",
              ],
              [
                'PEOPLE',
                'Our people are our strength. People care, growth, and knowledge form the basis of our organization.',
              ],
              [
                'INTEGRITY',
                'We work with integrity. Values are the most important requirement for professionals.',
              ],
              [
                'QUALITY',
                "We provide quality services to our clients with continued focus on knowledge growth , deep understanding of clients' requirements.",
              ],
            ].map(([title, desc]) => (
              <div key={title} className="flex flex-col items-center text-center">
                {/* UPDATED per request: circle in cyan blue */}
                <div
                  className="w-24 h-24 rounded-full border-4 border-cyan-400 flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
                <p className="text-neutral-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT WITH INTERACTIVE MAP ============ */}
      <section className="bg-black py-16 px-4 border-neutral-800 border-t" id="contact">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left: text + interactive map */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Contact <span className="text-cyan-400">Us</span>
            </h2>
            <p className="text-neutral-300 mb-6">
             Speak with our Consulting, Accounting and Audit specialists. We'd love to hear from you. Reach out using the form or through our direct contact details below.
            </p>

            <div className="space-y-3 text-neutral-300 mb-6">
              <p>
                <span className="font-semibold">Address:</span> {officeAddress}
              </p>
                 <p>
                📞 <span className="font-semibold">Phone:</span> +91 92500 17481
              </p>
              <p>
                ✉️ <span className="font-semibold">Email:</span> ankitgupta@psbsindia.com
              </p>
            </div>

            {/* Owner contact cards with QR — no photos, just details */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {/* Mohit Gupta */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">
  <h4 className="text-white font-semibold">Mohit Gupta</h4>

  <a
    href="/api/vcard/mohit-gupta"
    download="Mohit-Gupta.vcf"
    title="Download Contact"
  >
    <img
      src="/images/qrcodes/mohit-vcard-qr.jpeg"
      alt="Mohit Gupta QR Code"
      className="w-40 h-40 rounded-lg bg-white p-2 mx-auto cursor-pointer hover:scale-105 transition"
    />
  </a>
</div>

              {/* Ankit Gupta */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-center hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-white font-semibold">  Ankit Gupta</h4>
                <a
    href="/api/vcard/ankit-gupta"
    download="Ankit-Gupta.vcf"
    title="Download Contact"
  > 
               <img
  src="/images/qrcodes/ankit-vcard-qr.jpeg"
  alt="Ankit Gupta QR Code"
  className="w-40 h-40 rounded-xl bg-white p-2 mx-auto"
/>
</a>
             
              </div>
            </div>

            {/* Interactive Map Section */}
            <div className="relative">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                Our Location
              </h3>

              {/* Map Container with Click Handler */}
              <div 
                className="relative overflow-hidden rounded-xl border border-neutral-700 cursor-pointer group hover:border-cyan-400 transition-all duration-300"
                onClick={handleMapClick}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleMapClick(); }}
                role="button"
                tabIndex={0}
                title="Click to open in Google Maps"
                aria-label="Open location in Google Maps"
              >
                {/* Embedded Google Map centered at the exact coordinates; pointerEvents disabled so clicks are handled by container */}
                <iframe
                  title="PSBS Office Location"
                  src={embedMapUrl}
                  className="w-full h-64 md:h-72 block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  style={{ pointerEvents: 'none' }}
                />

                {/* Centered custom pin overlay (purely visual, aligns with the embedded map center) */}
                <div className="absolute left-1/2 top-1/2 pointer-events-none" style={{ transform: 'translate(-50%, -60%)' }}>
                  <div className="bg-white/95 rounded-full p-2 shadow-lg">
                    {/* <MapPin className="w-7 h-7 text-red-500" /> */}
                  </div>
                </div>

                {/* Click to Open Indicator */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to open in Maps
                </div>

                {/* Address Overlay */}
                <div className="absolute top-3 left-3 bg-black/80 text-white px-3 py-2 rounded-lg max-w-[280px]">
                  <p className="text-xs font-medium">New Delhi House</p>
                  <p className="text-xs text-gray-300">Connaught Place, New Delhi</p>
                </div>
              </div>

              {/* Additional Map Info */}
              <div className="mt-3 flex items-center justify-between text-sm text-neutral-400">
                
                <button
                  onClick={handleMapClick}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17l10-10M17 7H7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: contact form with EmailJS integration */}
          <div className="bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-lg border border-neutral-800 text-neutral-100">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <p className="text-emerald-400 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="m15 9-6 6m0-6 6 6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  {statusMessage || 'Failed to send message. Please check your input and try again.'}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1">
                  Name 
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:border-cyan-400 focus:ring focus:ring-cyan-500/30 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1">
                  Email 
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:border-cyan-400 focus:ring focus:ring-cyan-500/30 outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1">
                  Message/Query
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="I Have Something in My Mind.."
                  required
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:border-cyan-400 focus:ring focus:ring-cyan-500/30 outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3"/>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ============ LEGAL & POLICY ============ */}
      <section className="bg-neutral-900 py-12 px-4 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Legal & Policy</h2>
          <p className="text-neutral-400 max-w-3xl mx-auto mb-6">
            PSBS is committed to operating with transparency, integrity, and in compliance with applicable laws and regulations.
          </p>
          <div className="flex justify-center gap-6">
            <a href="/terms-and-conditions" className="text-cyan-400 hover:text-[#EAA038] transition-colors">
              Terms & Conditions
            </a>
            <a href="/privacy-policy" className="text-cyan-400 hover:text-[#EAA038] transition-colors">
              Privacy Policy
            </a>
            <a href="/disclaimer" className="text-cyan-400 hover:text-[#EAA038] transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </section>
      
    </>
  );
}