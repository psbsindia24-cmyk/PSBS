


// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import logo from '../assets/image001.png';

// export default function Header() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('psbs_token');
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [currentSection, setCurrentSection] = useState('hero');
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);
//   const [dropdownTimeout, setDropdownTimeout] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = [
//         'hero',
//         'about',
//         'why-choose-psbs',
//         'services',
//         'our-mission-and-values',
//         'our-clients',
//         'testimonials',
//         'contact'
//       ];

//       const currentScrollY = window.scrollY;

//       for (const sectionId of sections) {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (currentScrollY >= offsetTop - 100 && currentScrollY < offsetTop + offsetHeight - 100) {
//             setCurrentSection(sectionId);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const getHeaderBackground = () => {
//     switch (currentSection) {
//       case 'hero':
//         return 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/30';
//       case 'about':
//       case 'why-choose-psbs':
//         return 'bg-black/95 backdrop-blur-xl border-b border-neutral-700';
//       case 'services':
//         return 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800';
//       case 'our-mission-and-values':
//         return 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800';
//       case 'our-clients':
//         return 'bg-black/95 backdrop-blur-xl border-b border-neutral-800';
//       case 'testimonials':
//         return 'bg-black/95 backdrop-blur-xl border-b border-neutral-700';
//       case 'contact':
//         return 'bg-black/95 backdrop-blur-xl border-b border-neutral-800';
//       default:
//         return 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700';
//     }
//   };

//   // Enhanced scroll to top function with smooth animation
//   const scrollToTop = () => {
//     return new Promise((resolve) => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
      
//       // Wait for scroll to complete
//       const checkScroll = () => {
//         if (window.scrollY <= 10) {
//           resolve();
//         } else {
//           requestAnimationFrame(checkScroll);
//         }
//       };
//       checkScroll();
//     });
//   };

//   const logout = async () => {
//     await scrollToTop();
//     localStorage.removeItem('psbs_token');
//     localStorage.removeItem('psbs_user');
//     navigate('/');
//   };

//   const navLink = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 relative tracking-wide text-sm';
//   const active = ({ isActive }) =>
//     isActive
//       ? 'text-white bg-cyan-600/90 backdrop-blur-sm shadow-lg shadow-cyan-500/25 ' + navLink
//       : 'text-gray-200 hover:text-cyan-400 hover:bg-white/5 ' + navLink;

//   // Fixed handleScroll function with proper header offset
//   const handleScroll = async (id) => {
//     // Close mobile menu first if open
//     setMobileOpen(false);
//     setMobileDropdown(null);
//     setDropdownOpen(null);

//     // Navigate to home page first
//     navigate('/');
    
//     // Wait for navigation to complete, then scroll to section
//     setTimeout(() => {
//       const element = document.getElementById(id);
//       if (element) {
//         // Calculate the header height (approximately 80px for the fixed header)
//         const headerHeight = 80;
//         const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
//         const offsetPosition = elementTop - headerHeight;

//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       }
//     }, 100);
//   };

//   // Helper function to get service index by ID
//   const getServiceIndex = (serviceId) => {
//     const serviceMap = {
//       'Assurance and Advisory': 0,
//       'Business Growth and Consulting': 1,
//       'Management Support': 2
//     };
//     return serviceMap[serviceId] || 0;
//   };

//   // Enhanced team navigation with section parameter and proper scrolling
//   const handleTeamNavigation = async (section) => {
//     // Close all dropdowns and mobile menu
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);

//     // Always scroll to top first
//     await scrollToTop();

//     // Navigate to team page with section parameter
//     navigate(`/team?section=${section}`);
//   };

//   const dropdowns = {
//     services: [
//       {
//         label: 'Assurance and Advisory',
//         route: '/services?main=Assurance and Advisory',
//         serviceId: 'Assurance and Advisory',
//         description: 'Internal Audit, Risk Management, Controls and Process Optimisation Solutions...'
//       },
//       {
//         label: 'Business Growth and Consulting',
//         route: '/services?main=Business Growth and Consulting',
//         serviceId: 'Business Growth and Consulting',
//         description: 'Analytics, Digital Transformation and Automation Advisory...'
//       },
//       {
//         label: 'Management Support',
//         route: '/services?main=Management Support',
//         serviceId: 'Management Support',
//         description: 'Leadership and Governance (Retainership), Process Outsourcing and Compliance Solutions...'
//       }
//     ],
//     insight: [
//       { label: 'Industry Insights', route: '/thought' },
//       { label: 'Articles', route: '/thought' },
//       { label: 'Blog ', route: '/thought' }
//     ],
//     about: [
//       { label: 'What we do', scrollTo: 'services' },
//       { label: 'Our Mission & Values', scrollTo: 'our-mission-and-values' },
//       { label: 'Clients Served', route: '/services#our-clients' },
//       { label: 'Contact Us', scrollTo: 'contact' }
//     ],
//     leadership: [
//       { 
//         label: 'Senior Leadership', 
//         teamSection: 'senior', 
//         description: 'Profiles of senior partners and leadership team' 
//       },
//       { 
//         label: 'Advisors', 
//         teamSection: 'advisors', 
//         description: 'Profiles of our mentors and advisors' 
//       },
//       { 
//         label: 'Collaborations', 
//         teamSection: 'collaborations', 
//         description: 'Strategic collaborations and partners' 
//       }
//     ]
//   };

//   // Enhanced dropdown hover handlers with timeout for stability
//   const handleDropdownEnter = (dropdownKey) => {
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }
//     setDropdownOpen(dropdownKey);
//   };

//   const handleDropdownLeave = () => {
//     const timeout = setTimeout(() => {
//       setDropdownOpen(null);
//     }, 150); // 150ms delay before closing
//     setDropdownTimeout(timeout);
//   };

//   const handleDropdownContentEnter = () => {
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }
//   };

//   const handleDropdownItemClick = async (item) => {
//     // Clear any pending timeout
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }

//     // Close all dropdowns and mobile menu
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);

//     // Handle team section navigation
//     if (item.teamSection) {
//       await handleTeamNavigation(item.teamSection);
//       return;
//     }

//     if (item.route) {
//       const [path, hash] = item.route.split('#');
      
//       // Special handling for services dropdown items
//       if (item.serviceId && path === '/services') {
//         const serviceIndex = getServiceIndex(item.serviceId);
//         navigate(`${path}?serviceIndex=${serviceIndex}`);
//       } else {
//         navigate(path + (hash ? `#${hash}` : ''));
//       }

//       // Handle hash scrolling with proper header offset for services page
//       if (hash) {
//         setTimeout(() => {
//           const el = document.getElementById(hash);
//           if (el) {
//             const headerHeight = 80;
//             const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
//             const offsetPosition = elementTop - headerHeight;

//             window.scrollTo({
//               top: offsetPosition,
//               behavior: 'smooth'
//             });
//           }
//         }, 100);
//       }
//     } else if (item.scrollTo) {
//       await handleScroll(item.scrollTo);
//     }
//   };

//   // Enhanced logo click handler
//   const handleLogoClick = async () => {
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);
//     await scrollToTop();
//     navigate('/');
//   };

//   // Enhanced NavLink click handler
//   const handleNavLinkClick = async (event, path = '/') => {
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);
    
//     // For home navigation, scroll to top first
//     if (path === '/') {
//       event.preventDefault();
//       await scrollToTop();
//       navigate('/');
//     }
//   };

//   // Enhanced dashboard navigation
//   const handleDashboardClick = async () => {
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);
//     await scrollToTop();
//     navigate('/dashboard');
//   };

//   const DropdownMenu = ({ data, isOpen, dropdownKey }) => {
//     if (!isOpen) return null;
//     const isRightSide = dropdownKey === 'about' || dropdownKey === 'leadership';
    
//     return (
//       <div
//         className={`absolute top-full mt-3 w-[420px] bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[60] ${
//           isRightSide ? 'right-0' : 'left-0'
//         }`}
//         style={{
//           background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(15,15,15,0.95) 50%, rgba(0,0,0,0.9) 100%)',
//           boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)'
//         }}
//         onMouseEnter={handleDropdownContentEnter}
//         onMouseLeave={handleDropdownLeave}
//       >
//         <div className="relative">
//           {/* Glassmorphism overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/20 pointer-events-none" />
          
//           <div className="relative py-3">
//             {data.map((item, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleDropdownItemClick(item)}
//                 className="group w-full text-left px-6 py-4 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:via-cyan-400/5 hover:to-transparent transition-all duration-300 border-b border-white/[0.05] last:border-b-0 relative overflow-hidden"
//               >
//                 {/* Hover effect background */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:via-cyan-400/10 group-hover:to-cyan-400/5 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
//                 <div className="relative">
//                   <div className="flex items-center gap-3 mb-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="text-white font-semibold text-base tracking-wide group-hover:text-cyan-300 transition-colors duration-300 font-sans">
//                       {item.label}
//                     </div>
//                   </div>
//                   {item.description && (
//                     <p className="text-sm text-gray-300/90 leading-relaxed font-light pl-6 group-hover:text-gray-200 transition-colors duration-300">
//                       {item.description}
//                     </p>
//                   )}
//                 </div>
//               </button>
//             ))}
//           </div>
          
//           {/* Bottom accent line */}
//           <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
//         </div>
//       </div>
//     );
//   };

//   const NavButton = ({ children, onClick, isActive = false }) => (
//     <button
//       onClick={onClick}
//       className={`${navLink} ${isActive ? 'text-white bg-cyan-600/90 backdrop-blur-sm shadow-lg shadow-cyan-500/25' : 'text-gray-200 hover:text-cyan-400 hover:bg-white/5'} flex items-center gap-2 font-sans`}
//     >
//       {children}
//     </button>
//   );

//   return (
//     <>
//       <header className={`fixed top-0 left-0 right-0 z-50 ${getHeaderBackground()} shadow-lg transition-all duration-300`}>
//         <div className="w-full px-5 py-4 flex items-center justify-between">

//           {/* Logo */}
//           <div className="flex items-center pl-5 cursor-pointer" onClick={handleLogoClick}>
//             <img src={logo} alt="PSBS Logo" className="h-12 w-auto" />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-2 relative">
//             <NavLink 
//               to="/" 
//               className={active} 
//               end
//               onClick={(e) => handleNavLinkClick(e, '/')}
//             >
//               Home
//             </NavLink>

//             {/* Services Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleDropdownEnter('services')}
//               onMouseLeave={handleDropdownLeave}
//             >
//               <NavButton>
//                 Services
//                 <FaChevronDown 
//                   className={`text-xs transition-transform duration-300 ${dropdownOpen === 'services' ? 'rotate-180' : ''}`} 
//                 />
//               </NavButton>
//               <DropdownMenu
//                 data={dropdowns.services}
//                 isOpen={dropdownOpen === 'services'}
//                 dropdownKey="services"
//               />
//             </div>

//             {/* Insight Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleDropdownEnter('insight')}
//               onMouseLeave={handleDropdownLeave}
//             >
//               <NavButton>
//                 Insight
//                 <FaChevronDown 
//                   className={`text-xs transition-transform duration-300 ${dropdownOpen === 'insight' ? 'rotate-180' : ''}`} 
//                 />
//               </NavButton>
//               <DropdownMenu
//                 data={dropdowns.insight}
//                 isOpen={dropdownOpen === 'insight'}
//                 dropdownKey="insight"
//               />
//             </div>

//             {/* Leadership Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleDropdownEnter('leadership')}
//               onMouseLeave={handleDropdownLeave}
//             >
//               <NavButton>
//                 Leadership
//                 <FaChevronDown 
//                   className={`text-xs transition-transform duration-300 ${dropdownOpen === 'leadership' ? 'rotate-180' : ''}`} 
//                 />
//               </NavButton>
//               <DropdownMenu
//                 data={dropdowns.leadership}
//                 isOpen={dropdownOpen === 'leadership'}
//                 dropdownKey="leadership"
//               />
//             </div>

//             {/* About Us Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleDropdownEnter('about')}
//               onMouseLeave={handleDropdownLeave}
//             >
//               <NavButton>
//                 About Us
//                 <FaChevronDown 
//                   className={`text-xs transition-transform duration-300 ${dropdownOpen === 'about' ? 'rotate-180' : ''}`} 
//                 />
//               </NavButton>
//               <DropdownMenu
//                 data={dropdowns.about}
//                 isOpen={dropdownOpen === 'about'}
//                 dropdownKey="about"
//               />
//             </div>

//             {token && (
//               <>
//                 <button 
//                   onClick={handleDashboardClick}
//                   className="ml-4 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 shadow-lg"
//                 >
//                   Dashboard
//                 </button>
//                 <button 
//                   onClick={logout} 
//                   className="ml-3 px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </nav>

//           {/* Mobile Hamburger */}
//           <button 
//             className="lg:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition-colors duration-300" 
//             onClick={() => setMobileOpen(!mobileOpen)} 
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="lg:hidden border-t border-white/10" style={{
//             background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(15,15,15,0.98) 50%, rgba(0,0,0,0.95) 100%)',
//           }}>
//             <div className="relative">
//               {/* Glassmorphism overlay for mobile */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-black/20 pointer-events-none" />
              
//               <div className="relative flex flex-col p-6 space-y-4">
//                 <NavLink 
//                   to="/" 
//                   onClick={(e) => handleNavLinkClick(e, '/')}
//                   className="text-gray-200 hover:text-cyan-400 py-3 font-medium border-b border-white/10 transition-colors duration-300"
//                 >
//                   Home
//                 </NavLink>

//                 {Object.keys(dropdowns).map((key) => (
//                   <div key={key} className="border-b border-white/10 last:border-b-0">
//                     <button
//                       onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)}
//                       className="flex justify-between items-center w-full text-left text-gray-200 hover:text-cyan-400 py-3 font-medium transition-colors duration-300"
//                     >
//                       <span className="capitalize font-sans">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
//                       {mobileDropdown === key ? 
//                         <FaChevronUp className="text-cyan-400 text-sm" /> : 
//                         <FaChevronDown className="text-gray-400 text-sm" />
//                       }
//                     </button>
                    
//                     {mobileDropdown === key && (
//                       <div className="ml-4 pb-4 space-y-3">
//                         {dropdowns[key].map((item, i) => (
//                           <button
//                             key={i}
//                             onClick={() => handleDropdownItemClick(item)}
//                             className="group w-full text-left p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-transparent transition-all duration-300"
//                           >
//                             <div className="flex items-center gap-2 mb-1">
//                               <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
//                               <div className="font-medium tracking-wide text-gray-200 group-hover:text-cyan-300 transition-colors duration-300 text-sm font-sans">
//                                 {item.label}
//                               </div>
//                             </div>
//                             {item.description && (
//                               <div className="text-xs text-gray-400 leading-relaxed ml-3 font-light group-hover:text-gray-300 transition-colors duration-300">
//                                 {item.description}
//                               </div>
//                             )}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}

//                 {token && (
//                   <div className="pt-4 space-y-3">
//                     <button 
//                       onClick={handleDashboardClick}
//                       className="block w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 text-center"
//                     >
//                       Dashboard
//                     </button>
//                     <button 
//                       onClick={logout}
//                       className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import logo from '../assets/image001.png';

// export default function Header() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('psbs_token');
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [currentSection, setCurrentSection] = useState('hero');
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);
//   const [dropdownTimeout, setDropdownTimeout] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = [
//         'hero',
//         'about',
//         'why-choose-psbs',
//         'services',
//         'our-mission-and-values',
//         'our-clients',
//         'testimonials',
//         'contact'
//       ];

//       const currentScrollY = window.scrollY;

//       for (const sectionId of sections) {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (currentScrollY >= offsetTop - 100 && currentScrollY < offsetTop + offsetHeight - 100) {
//             setCurrentSection(sectionId);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const getHeaderBackground = () => {
//     switch (currentSection) {
//       case 'hero':
//         return 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/30';
//       case 'about':
//       case 'why-choose-psbs':
//         return 'bg-black/95 backdrop-blur-xl border-b border-neutral-700';
//       case 'services':
//         return 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800';
//       case 'our-mission-and-values':
//         return 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800';
//       case 'our-clients':
//         return 'bg-black/95 backdrop-blur-xl border-b border-neutral-800';
//       case 'testimonials':
//         return 'bg-black/95 backdrop-blur-xl border-b border-neutral-700';
//       case 'contact':
//         return 'bg-black/95 backdrop-blur-xl border-b border-neutral-800';
//       default:
//         return 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700';
//     }
//   };

//   // Enhanced scroll to top function with smooth animation
//   const scrollToTop = () => {
//     return new Promise((resolve) => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
      
//       // Wait for scroll to complete
//       const checkScroll = () => {
//         if (window.scrollY <= 10) {
//           resolve();
//         } else {
//           requestAnimationFrame(checkScroll);
//         }
//       };
//       checkScroll();
//     });
//   };

//   const logout = async () => {
//     // Always scroll to top first before logout navigation
//     await scrollToTop();
//     localStorage.removeItem('psbs_token');
//     localStorage.removeItem('psbs_user');
//     navigate('/');
//   };

//   const navLink = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 relative tracking-wide text-sm';
//   const active = ({ isActive }) =>
//     isActive
//       ? 'text-white bg-cyan-600/90 backdrop-blur-sm shadow-lg shadow-cyan-500/25 ' + navLink
//       : 'text-gray-200 hover:text-cyan-400 hover:bg-white/5 ' + navLink;

//   // Fixed handleScroll function - always scroll to top first for page navigation
//   const handleScroll = async (id) => {
//     // Close mobile menu first if open
//     setMobileOpen(false);
//     setMobileDropdown(null);
//     setDropdownOpen(null);

//     // Always scroll to top first
//     await scrollToTop();
    
//     // Navigate to home page
//     navigate('/');
    
//     // Wait for navigation to complete, then scroll to section
//     setTimeout(() => {
//       const element = document.getElementById(id);
//       if (element) {
//         // Calculate the header height (approximately 80px for the fixed header)
//         const headerHeight = 80;
//         const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
//         const offsetPosition = elementTop - headerHeight;

//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       }
//     }, 100);
//   };

//   // Helper function to get service index by ID
//   const getServiceIndex = (serviceId) => {
//     const serviceMap = {
//       'Assurance and Advisory': 0,
//       'Business Growth and Consulting': 1,
//       'Management Support': 2
//     };
//     return serviceMap[serviceId] || 0;
//   };

//   // Enhanced team navigation with section parameter and proper scrolling
//   const handleTeamNavigation = async (section) => {
//     // Close all dropdowns and mobile menu
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);

//     // Always scroll to top first
//     await scrollToTop();

//     // Navigate to team page with section parameter
//     navigate(`/team?section=${section}`);
//   };

//   const dropdowns = {
//     services: [
//       {
//         label: 'Assurance and Advisory',
//         route: '/services?main=Assurance and Advisory',
//         serviceId: 'Assurance and Advisory',
//         description: 'Internal Audit, Risk Management, Controls and Process Optimisation Solutions...'
//       },
//       {
//         label: 'Business Growth and Consulting',
//         route: '/services?main=Business Growth and Consulting',
//         serviceId: 'Business Growth and Consulting',
//         description: 'Analytics, Digital Transformation and Automation Advisory...'
//       },
//       {
//         label: 'Management Support',
//         route: '/services?main=Management Support',
//         serviceId: 'Management Support',
//         description: 'Leadership and Governance (Retainership), Process Outsourcing and Compliance Solutions...'
//       }
//     ],
//     insight: [
//       { label: 'Industry Insights', route: '/thought' },
//       { label: 'Articles', route: '/thought' },
//       { label: 'Blog ', route: '/thought' }
//     ],
//     about: [
//       { label: 'What we do', scrollTo: 'services' },
//       { label: 'Our Mission & Values', scrollTo: 'our-mission-and-values' },
//       { label: 'Clients Served', route: '/services#our-clients' },
//       { label: 'Contact Us', scrollTo: 'contact' }
//     ],
//     leadership: [
//       { 
//         label: 'Senior Leadership', 
//         teamSection: 'senior', 
//         description: 'Profiles of senior partners and leadership team' 
//       },
//       { 
//         label: 'Advisors', 
//         teamSection: 'advisors', 
//         description: 'Profiles of our mentors and advisors' 
//       },
//       { 
//         label: 'Collaborations', 
//         teamSection: 'collaborations', 
//         description: 'Strategic collaborations and partners' 
//       }
//     ]
//   };

//   // Enhanced dropdown hover handlers with timeout for stability
//   const handleDropdownEnter = (dropdownKey) => {
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }
//     setDropdownOpen(dropdownKey);
//   };

//   const handleDropdownLeave = () => {
//     const timeout = setTimeout(() => {
//       setDropdownOpen(null);
//     }, 150); // 150ms delay before closing
//     setDropdownTimeout(timeout);
//   };

//   const handleDropdownContentEnter = () => {
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }
//   };

//   const handleDropdownItemClick = async (item) => {
//     // Clear any pending timeout
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }

//     // Close all dropdowns and mobile menu
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);

//     // Always scroll to top first
//     await scrollToTop();

//     // Handle team section navigation
//     if (item.teamSection) {
//       await handleTeamNavigation(item.teamSection);
//       return;
//     }

//     if (item.route) {
//       const [path, hash] = item.route.split('#');
      
//       // Special handling for services dropdown items
//       if (item.serviceId && path === '/services') {
//         const serviceIndex = getServiceIndex(item.serviceId);
//         navigate(`${path}?serviceIndex=${serviceIndex}`);
//       } else {
//         navigate(path + (hash ? `#${hash}` : ''));
//       }

//       // Handle hash scrolling with proper header offset for services page
//       if (hash) {
//         setTimeout(() => {
//           const el = document.getElementById(hash);
//           if (el) {
//             const headerHeight = 80;
//             const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
//             const offsetPosition = elementTop - headerHeight;

//             window.scrollTo({
//               top: offsetPosition,
//               behavior: 'smooth'
//             });
//           }
//         }, 100);
//       }
//     } else if (item.scrollTo) {
//       await handleScroll(item.scrollTo);
//     }
//   };

//   // ─── ADDITION: Main nav button click handlers ───────────────────────────────
//   // Each navigates to that section/page's default destination when the button
//   // itself (not a dropdown item) is clicked.

//   const handleServicesMainClick = async () => {
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);
//     await scrollToTop();
//     // Navigate to services page (first service by default)
//     navigate('/services');
//   };

//   const handleInsightMainClick = async () => {
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);
//     await scrollToTop();
//     navigate('/thought');
//   };

//   const handleLeadershipMainClick = async () => {
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);
//     await scrollToTop();
//     // Navigate to team page (senior section by default)
//     navigate('/team?section=senior');
//   };

//   const handleAboutMainClick = async () => {
//     if (dropdownTimeout) {
//       clearTimeout(dropdownTimeout);
//       setDropdownTimeout(null);
//     }
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);
//     // About Us scrolls to the "services" section on the home page (What we do)
//     await handleScroll('services');
//   };
//   // ────────────────────────────────────────────────────────────────────────────

//   // Enhanced logo click handler
//   const handleLogoClick = async () => {
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);
//     await scrollToTop();
//     navigate('/');
//   };

//   // Enhanced NavLink click handler - always scroll to top first
//   const handleNavLinkClick = async (event, path = '/') => {
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);
    
//     // Always scroll to top first before navigating
//     await scrollToTop();
    
//     // For home navigation
//     if (path === '/') {
//       event.preventDefault();
//       navigate('/');
//     } else {
//       // For other paths, navigate normally but scroll to top first
//       event.preventDefault();
//       navigate(path);
//     }
//   };

//   // Enhanced dashboard navigation
//   const handleDashboardClick = async () => {
//     setDropdownOpen(null);
//     setMobileOpen(false);
//     setMobileDropdown(null);
//     await scrollToTop();
//     navigate('/dashboard');
//   };

//   const DropdownMenu = ({ data, isOpen, dropdownKey }) => {
//     if (!isOpen) return null;
//     const isRightSide = dropdownKey === 'about' || dropdownKey === 'leadership';
    
//     return (
//       <div
//         className={`absolute top-full mt-3 w-[420px] bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[60] ${
//           isRightSide ? 'right-0' : 'left-0'
//         }`}
//         style={{
//           background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(15,15,15,0.95) 50%, rgba(0,0,0,0.9) 100%)',
//           boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)'
//         }}
//         onMouseEnter={handleDropdownContentEnter}
//         onMouseLeave={handleDropdownLeave}
//       >
//         <div className="relative">
//           {/* Glassmorphism overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/20 pointer-events-none" />
          
//           <div className="relative py-3">
//             {data.map((item, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleDropdownItemClick(item)}
//                 className="group w-full text-left px-6 py-4 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:via-cyan-400/5 hover:to-transparent transition-all duration-300 border-b border-white/[0.05] last:border-b-0 relative overflow-hidden"
//               >
//                 {/* Hover effect background */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:via-cyan-400/10 group-hover:to-cyan-400/5 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
//                 <div className="relative">
//                   <div className="flex items-center gap-3 mb-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="text-white font-semibold text-base tracking-wide group-hover:text-cyan-300 transition-colors duration-300 font-sans">
//                       {item.label}
//                     </div>
//                   </div>
//                   {item.description && (
//                     <p className="text-sm text-gray-300/90 leading-relaxed font-light pl-6 group-hover:text-gray-200 transition-colors duration-300">
//                       {item.description}
//                     </p>
//                   )}
//                 </div>
//               </button>
//             ))}
//           </div>
          
//           {/* Bottom accent line */}
//           <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
//         </div>
//       </div>
//     );
//   };

//   // ─── ADDITION: NavButton now accepts an optional onDirectClick prop ──────────
//   // When provided, clicking the label text triggers direct navigation.
//   // The chevron icon still controls the dropdown open/close via hover (unchanged).
//   const NavButton = ({ children, onClick, isActive = false, onDirectClick }) => (
//     <button
//       onClick={onClick}
//       className={`${navLink} ${isActive ? 'text-white bg-cyan-600/90 backdrop-blur-sm shadow-lg shadow-cyan-500/25' : 'text-gray-200 hover:text-cyan-400 hover:bg-white/5'} flex items-center gap-2 font-sans`}
//     >
//       {onDirectClick ? (
//         <>
//           {/* Clicking the label text navigates directly */}
//           <span onClick={(e) => { e.stopPropagation(); onDirectClick(); }}>
//             {/* children[0] is the label text passed before the chevron */}
//             {Array.isArray(children) ? children[0] : children}
//           </span>
//           {/* The chevron is kept purely as visual; hover on the wrapper opens the dropdown */}
//           {Array.isArray(children) && children[1]}
//         </>
//       ) : (
//         children
//       )}
//     </button>
//   );
//   // ────────────────────────────────────────────────────────────────────────────

//   return (
//     <>
//       <header className={`fixed top-0 left-0 right-0 z-50 ${getHeaderBackground()} shadow-lg transition-all duration-300`}>
//         <div className="w-full px-5 py-4 flex items-center justify-between">

//           {/* Logo */}
//           <div className="flex items-center pl-5 cursor-pointer" onClick={handleLogoClick}>
//             <img src={logo} alt="PSBS Logo" className="h-12 w-auto" />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-2 relative">
//             <NavLink 
//               to="/" 
//               className={active} 
//               end
//               onClick={(e) => handleNavLinkClick(e, '/')}
//             >
//               Home
//             </NavLink>

//             {/* Services Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleDropdownEnter('services')}
//               onMouseLeave={handleDropdownLeave}
//             >
//               <NavButton onDirectClick={handleServicesMainClick}>
//                 Services
//                 <FaChevronDown 
//                   className={`text-xs transition-transform duration-300 ${dropdownOpen === 'services' ? 'rotate-180' : ''}`} 
//                 />
//               </NavButton>
//               <DropdownMenu
//                 data={dropdowns.services}
//                 isOpen={dropdownOpen === 'services'}
//                 dropdownKey="services"
//               />
//             </div>

//             {/* Insight Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleDropdownEnter('insight')}
//               onMouseLeave={handleDropdownLeave}
//             >
//               <NavButton onDirectClick={handleInsightMainClick}>
//                 Insight
//                 <FaChevronDown 
//                   className={`text-xs transition-transform duration-300 ${dropdownOpen === 'insight' ? 'rotate-180' : ''}`} 
//                 />
//               </NavButton>
//               <DropdownMenu
//                 data={dropdowns.insight}
//                 isOpen={dropdownOpen === 'insight'}
//                 dropdownKey="insight"
//               />
//             </div>

//             {/* Leadership Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleDropdownEnter('leadership')}
//               onMouseLeave={handleDropdownLeave}
//             >
//               <NavButton onDirectClick={handleLeadershipMainClick}>
//                 Leadership
//                 <FaChevronDown 
//                   className={`text-xs transition-transform duration-300 ${dropdownOpen === 'leadership' ? 'rotate-180' : ''}`} 
//                 />
//               </NavButton>
//               <DropdownMenu
//                 data={dropdowns.leadership}
//                 isOpen={dropdownOpen === 'leadership'}
//                 dropdownKey="leadership"
//               />
//             </div>

//             {/* About Us Dropdown */}
//             <div
//               className="relative"
//               onMouseEnter={() => handleDropdownEnter('about')}
//               onMouseLeave={handleDropdownLeave}
//             >
//               <NavButton onDirectClick={handleAboutMainClick}>
//                 About Us
//                 <FaChevronDown 
//                   className={`text-xs transition-transform duration-300 ${dropdownOpen === 'about' ? 'rotate-180' : ''}`} 
//                 />
//               </NavButton>
//               <DropdownMenu
//                 data={dropdowns.about}
//                 isOpen={dropdownOpen === 'about'}
//                 dropdownKey="about"
//               />
//             </div>

//             {token && (
//               <>
//                 <button 
//                   onClick={handleDashboardClick}
//                   className="ml-4 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 shadow-lg"
//                 >
//                   Dashboard
//                 </button>
//                 <button 
//                   onClick={logout} 
//                   className="ml-3 px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </nav>

//           {/* Mobile Hamburger */}
//           <button 
//             className="lg:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition-colors duration-300" 
//             onClick={() => setMobileOpen(!mobileOpen)} 
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="lg:hidden border-t border-white/10" style={{
//             background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(15,15,15,0.98) 50%, rgba(0,0,0,0.95) 100%)',
//           }}>
//             <div className="relative">
//               {/* Glassmorphism overlay for mobile */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-black/20 pointer-events-none" />
              
//               <div className="relative flex flex-col p-6 space-y-4">
//                 <NavLink 
//                   to="/" 
//                   onClick={(e) => handleNavLinkClick(e, '/')}
//                   className="text-gray-200 hover:text-cyan-400 py-3 font-medium border-b border-white/10 transition-colors duration-300"
//                 >
//                   Home
//                 </NavLink>

//                 {/* ─── ADDITION: Mobile dropdown rows now have a split layout ──────
//                     Left side (label text) = direct navigation
//                     Right side (chevron)   = toggle dropdown items (unchanged)       */}
//                 {Object.keys(dropdowns).map((key) => {
//                   const mobileMainHandlers = {
//                     services: handleServicesMainClick,
//                     insight: handleInsightMainClick,
//                     leadership: handleLeadershipMainClick,
//                     about: handleAboutMainClick,
//                   };
//                   const mainLabel = {
//                     services: 'Services',
//                     insight: 'Insight',
//                     leadership: 'Leadership',
//                     about: 'About Us',
//                   };

//                   return (
//                     <div key={key} className="border-b border-white/10 last:border-b-0">
//                       <div className="flex justify-between items-center w-full py-3">
//                         {/* Label — direct navigation on click */}
//                         <button
//                           onClick={mobileMainHandlers[key]}
//                           className="text-left text-gray-200 hover:text-cyan-400 font-medium transition-colors duration-300 flex-1"
//                         >
//                           <span className="capitalize font-sans">{mainLabel[key]}</span>
//                         </button>
//                         {/* Chevron — toggle dropdown (existing behaviour) */}
//                         <button
//                           onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)}
//                           className="pl-4 pr-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
//                           aria-label={`Toggle ${key} dropdown`}
//                         >
//                           {mobileDropdown === key ? 
//                             <FaChevronUp className="text-cyan-400 text-sm" /> : 
//                             <FaChevronDown className="text-gray-400 text-sm" />
//                           }
//                         </button>
//                       </div>
//                       {/* ──────────────────────────────────────────────────────────── */}
                    
//                       {mobileDropdown === key && (
//                         <div className="ml-4 pb-4 space-y-3">
//                           {dropdowns[key].map((item, i) => (
//                             <button
//                               key={i}
//                               onClick={() => handleDropdownItemClick(item)}
//                               className="group w-full text-left p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-transparent transition-all duration-300"
//                             >
//                               <div className="flex items-center gap-2 mb-1">
//                                 <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
//                                 <div className="font-medium tracking-wide text-gray-200 group-hover:text-cyan-300 transition-colors duration-300 text-sm font-sans">
//                                   {item.label}
//                                 </div>
//                               </div>
//                               {item.description && (
//                                 <div className="text-xs text-gray-400 leading-relaxed ml-3 font-light group-hover:text-gray-300 transition-colors duration-300">
//                                   {item.description}
//                                 </div>
//                               )}
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}

//                 {token && (
//                   <div className="pt-4 space-y-3">
//                     <button 
//                       onClick={handleDashboardClick}
//                       className="block w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 text-center"
//                     >
//                       Dashboard
//                     </button>
//                     <button 
//                       onClick={logout}
//                       className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }


//client/src/components/Header.js
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import logo from '../assets/image001.png';

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('psbs_token');
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [currentSection, setCurrentSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'why-choose-psbs',
        'services',
        'our-mission-and-values',
        'our-clients',
        'testimonials',
        'contact'
      ];

      const currentScrollY = window.scrollY;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentScrollY >= offsetTop - 100 && currentScrollY < offsetTop + offsetHeight - 100) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHeaderBackground = () => {
    switch (currentSection) {
      case 'hero':
        return 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/30';
      case 'about':
      case 'why-choose-psbs':
        return 'bg-black/95 backdrop-blur-xl border-b border-neutral-700';
      case 'services':
        return 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800';
      case 'our-mission-and-values':
        return 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800';
      case 'our-clients':
        return 'bg-black/95 backdrop-blur-xl border-b border-neutral-800';
      case 'testimonials':
        return 'bg-black/95 backdrop-blur-xl border-b border-neutral-700';
      case 'contact':
        return 'bg-black/95 backdrop-blur-xl border-b border-neutral-800';
      default:
        return 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-700';
    }
  };

  // Enhanced scroll to top function with smooth animation
  const scrollToTop = () => {
    return new Promise((resolve) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Wait for scroll to complete
      const checkScroll = () => {
        if (window.scrollY <= 10) {
          resolve();
        } else {
          requestAnimationFrame(checkScroll);
        }
      };
      checkScroll();
    });
  };

  const logout = async () => {
    // Always scroll to top first before logout navigation
    await scrollToTop();
    localStorage.removeItem('psbs_token');
    localStorage.removeItem('psbs_user');
    navigate('/');
  };

  const navLink = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 relative tracking-wide text-sm';
  const active = ({ isActive }) =>
    isActive
      ? 'text-white bg-cyan-600/90 backdrop-blur-sm shadow-lg shadow-cyan-500/25 ' + navLink
      : 'text-gray-200 hover:text-cyan-400 hover:bg-white/5 ' + navLink;

  // Fixed handleScroll function - always scroll to top first for page navigation
  const handleScroll = async (id) => {
    // Close mobile menu first if open
    setMobileOpen(false);
    setMobileDropdown(null);
    setDropdownOpen(null);

    // Always scroll to top first
    await scrollToTop();
    
    // Navigate to home page
    navigate('/');
    
    // Wait for navigation to complete, then scroll to section
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Calculate the header height (approximately 80px for the fixed header)
        const headerHeight = 80;
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementTop - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // Helper function to get service index by ID
  const getServiceIndex = (serviceId) => {
    const serviceMap = {
      'Assurance and Advisory': 0,
      'Business Growth and Consulting': 1,
      'Management Support': 2
    };
    return serviceMap[serviceId] || 0;
  };

  // ── CHANGED: removed `await scrollToTop()` so the Team page can scroll
  //    to the correct section instead of always starting from the top.
  const handleTeamNavigation = (section) => {
    setDropdownOpen(null);
    setMobileOpen(false);
    setMobileDropdown(null);
    navigate(`/team?section=${section}`);
  };

  const dropdowns = {
    services: [
      {
        label: 'Assurance and Advisory',
        route: '/services?main=Assurance and Advisory',
        serviceId: 'Assurance and Advisory',
        description: 'Internal Audit, Risk Management, Controls and Process Optimisation Solutions...'
      },
      {
        label: 'Management Consulting and Business Advisory',
        route: '/services?main=Management Consulting and Business Advisory',
        serviceId: 'Management Consulting and Business Advisory',
        description: 'Analytics, Digital Transformation and Automation Advisory...'
      },
      {
        label: 'Accounting & Management Support',
        route: `/services?main=${encodeURIComponent('Accounting & Management Support')}`,
        serviceId: 'Accounting & Management Support',
        description: 'Leadership and Governance (Retainership), Process Outsourcing and Compliance Solutions...'
      }
    ],
    insight: [
      { label: 'Industry Insights', route: '/thought' },
      { label: 'Articles', route: '/thought' },
      { label: 'Blog ', route: '/thought' }
    ],
    about: [
      { label: 'What we do', scrollTo: 'services' },
      { label: 'Our Mission & Values', scrollTo: 'our-mission-and-values' },
      { label: 'Clients Served', route: '/services#our-clients' },
      { label: 'Contact Us', scrollTo: 'contact' }
    ],
    leadership: [
      { 
        label: 'Senior Leadership', 
        teamSection: 'senior', 
        description: 'Profiles of senior partners and leadership team' 
      },
      { 
        label: 'Advisors', 
        teamSection: 'advisors', 
        description: 'Profiles of our mentors and advisors' 
      },
      { 
        label: 'Collaborations', 
        teamSection: 'collaborations', 
        description: 'Strategic collaborations and partners' 
      }
    ]
  };

  // Enhanced dropdown hover handlers with timeout for stability
  const handleDropdownEnter = (dropdownKey) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(dropdownKey);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(null);
    }, 150); // 150ms delay before closing
    setDropdownTimeout(timeout);
  };

  const handleDropdownContentEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownItemClick = async (item) => {
    // Clear any pending timeout
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }

    // Close all dropdowns and mobile menu
    setDropdownOpen(null);
    setMobileOpen(false);
    setMobileDropdown(null);

    // ── CHANGED: team section items skip scrollToTop so Team.jsx can
    //    scroll directly to the right section after navigating.
    if (item.teamSection) {
      handleTeamNavigation(item.teamSection);
      return;
    }

    // All other items still scroll to top first (existing behaviour)
    await scrollToTop();

    if (item.route) {
      const [path, hash] = item.route.split('#');
      
      // Special handling for services dropdown items
      if (item.serviceId && path === '/services') {
        const serviceIndex = getServiceIndex(item.serviceId);
        navigate(`${path}?serviceIndex=${serviceIndex}`);
      } else {
        navigate(path + (hash ? `#${hash}` : ''));
      }

      // Handle hash scrolling with proper header offset for services page
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const headerHeight = 80;
            const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementTop - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    } else if (item.scrollTo) {
      await handleScroll(item.scrollTo);
    }
  };

  // ─── Main nav button click handlers ───────────────────────────────────────
  const handleServicesMainClick = async () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(null);
    setMobileOpen(false);
    setMobileDropdown(null);
    await scrollToTop();
    // Navigate to services page (first service by default)
    navigate('/services');
  };

  const handleInsightMainClick = async () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(null);
    setMobileOpen(false);
    setMobileDropdown(null);
    await scrollToTop();
    navigate('/thought');
  };

  const handleLeadershipMainClick = async () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(null);
    setMobileOpen(false);
    setMobileDropdown(null);
    await scrollToTop();
    // Navigate to team page (senior section by default)
    navigate('/team?section=senior');
  };

  const handleAboutMainClick = async () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setDropdownOpen(null);
    setMobileOpen(false);
    setMobileDropdown(null);
    // About Us scrolls to the "services" section on the home page (What we do)
    await handleScroll('services');
  };
  // ────────────────────────────────────────────────────────────────────────────

  // Enhanced logo click handler
  const handleLogoClick = async () => {
    setDropdownOpen(null);
    setMobileOpen(false);
    setMobileDropdown(null);
    await scrollToTop();
    navigate('/');
  };

  // Enhanced NavLink click handler - always scroll to top first
  const handleNavLinkClick = async (event, path = '/') => {
    setDropdownOpen(null);
    setMobileOpen(false);
    setMobileDropdown(null);
    
    // Always scroll to top first before navigating
    await scrollToTop();
    
    // For home navigation
    if (path === '/') {
      event.preventDefault();
      navigate('/');
    } else {
      // For other paths, navigate normally but scroll to top first
      event.preventDefault();
      navigate(path);
    }
  };

  // Enhanced dashboard navigation
  const handleDashboardClick = async () => {
    setDropdownOpen(null);
    setMobileOpen(false);
    setMobileDropdown(null);
    await scrollToTop();
    navigate('/dashboard');
  };

  const DropdownMenu = ({ data, isOpen, dropdownKey }) => {
    if (!isOpen) return null;
    const isRightSide = dropdownKey === 'about' || dropdownKey === 'leadership';
    
    return (
      <div
        className={`absolute top-full mt-3 w-[420px] bg-black/20 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[60] ${
          isRightSide ? 'right-0' : 'left-0'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(15,15,15,0.95) 50%, rgba(0,0,0,0.9) 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
        onMouseEnter={handleDropdownContentEnter}
        onMouseLeave={handleDropdownLeave}
      >
        <div className="relative">
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/20 pointer-events-none" />
          
          <div className="relative py-3">
            {data.map((item, i) => (
              <button
                key={i}
                onClick={() => handleDropdownItemClick(item)}
                className="group w-full text-left px-6 py-4 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:via-cyan-400/5 hover:to-transparent transition-all duration-300 border-b border-white/[0.05] last:border-b-0 relative overflow-hidden"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:via-cyan-400/10 group-hover:to-cyan-400/5 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="text-white font-semibold text-base tracking-wide group-hover:text-cyan-300 transition-colors duration-300 font-sans">
                      {item.label}
                    </div>
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-300/90 leading-relaxed font-light pl-6 group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
          
          {/* Bottom accent line */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        </div>
      </div>
    );
  };

  // ─── NavButton accepts an optional onDirectClick prop ──────────────────────
  const NavButton = ({ children, onClick, isActive = false, onDirectClick }) => (
    <button
      onClick={onClick}
      className={`${navLink} ${isActive ? 'text-white bg-cyan-600/90 backdrop-blur-sm shadow-lg shadow-cyan-500/25' : 'text-gray-200 hover:text-cyan-400 hover:bg-white/5'} flex items-center gap-2 font-sans`}
    >
      {onDirectClick ? (
        <>
          {/* Clicking the label text navigates directly */}
          <span onClick={(e) => { e.stopPropagation(); onDirectClick(); }}>
            {Array.isArray(children) ? children[0] : children}
          </span>
          {/* The chevron is kept purely as visual; hover on the wrapper opens the dropdown */}
          {Array.isArray(children) && children[1]}
        </>
      ) : (
        children
      )}
    </button>
  );
  // ────────────────────────────────────────────────────────────────────────────

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 ${getHeaderBackground()} shadow-lg transition-all duration-300`}>
        <div className="w-full px-5 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center pl-5 cursor-pointer" onClick={handleLogoClick}>
          <img src={logo} alt="Process Sage Business Solutions" className="h-12 w-auto" />

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 relative">
            <NavLink 
              to="/" 
              className={active} 
              end
              onClick={(e) => handleNavLinkClick(e, '/')}
            >
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <NavButton onDirectClick={handleServicesMainClick}>
                Services
                <FaChevronDown 
                  className={`text-xs transition-transform duration-300 ${dropdownOpen === 'services' ? 'rotate-180' : ''}`} 
                />
              </NavButton>
              <DropdownMenu
                data={dropdowns.services}
                isOpen={dropdownOpen === 'services'}
                dropdownKey="services"
              />
            </div>

            {/* Insight Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('insight')}
              onMouseLeave={handleDropdownLeave}
            >
              <NavButton onDirectClick={handleInsightMainClick}>
                Insight
                <FaChevronDown 
                  className={`text-xs transition-transform duration-300 ${dropdownOpen === 'insight' ? 'rotate-180' : ''}`} 
                />
              </NavButton>
              <DropdownMenu
                data={dropdowns.insight}
                isOpen={dropdownOpen === 'insight'}
                dropdownKey="insight"
              />
            </div>

            {/* Leadership Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('leadership')}
              onMouseLeave={handleDropdownLeave}
            >
              <NavButton onDirectClick={handleLeadershipMainClick}>
                Leadership
                <FaChevronDown 
                  className={`text-xs transition-transform duration-300 ${dropdownOpen === 'leadership' ? 'rotate-180' : ''}`} 
                />
              </NavButton>
              <DropdownMenu
                data={dropdowns.leadership}
                isOpen={dropdownOpen === 'leadership'}
                dropdownKey="leadership"
              />
            </div>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('about')}
              onMouseLeave={handleDropdownLeave}
            >

              <NavButton onDirectClick={handleAboutMainClick}>
                About Us
                <FaChevronDown 
                  className={`text-xs transition-transform duration-300 ${dropdownOpen === 'about' ? 'rotate-180' : ''}`} 
                />
              </NavButton>
              <DropdownMenu
                data={dropdowns.about}
                isOpen={dropdownOpen === 'about'}
                dropdownKey="about"
              />
            </div>
            {/* Our Tools */}
<NavLink
  to="/our-tools"
  onClick={(e) => handleNavLinkClick(e, '/our-tools')}
  className={({ isActive }) =>
    `font-medium transition-colors duration-300 ${
      isActive
        ? "text-cyan-400"
        : "text-gray-200 hover:text-cyan-400"
    }`
  }
>
  Our Tools
</NavLink>

            {token && (
              <>
                <button 
                  onClick={handleDashboardClick}
                  className="ml-4 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 shadow-lg"
                >
                  Dashboard
                </button>
                <button 
                  onClick={logout} 
                  className="ml-3 px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg"
                >
                  Logout
                </button>
              </>
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden text-white text-2xl p-2 rounded-lg hover:bg-white/10 transition-colors duration-300" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10" style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(15,15,15,0.98) 50%, rgba(0,0,0,0.95) 100%)',
          }}>
            <div className="relative">
              {/* Glassmorphism overlay for mobile */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-black/20 pointer-events-none" />
              
              <div className="relative flex flex-col p-6 space-y-4">
                <NavLink 
                  to="/" 
                  onClick={(e) => handleNavLinkClick(e, '/')}
                  className="text-gray-200 hover:text-cyan-400 py-3 font-medium border-b border-white/10 transition-colors duration-300"
                >
                  Home
                </NavLink>
                {/* Our Tools - Mobile */}
<NavLink
  to="/our-tools"
  onClick={(e) => handleNavLinkClick(e, '/our-tools')}
  className="text-gray-200 hover:text-cyan-400 py-3 font-medium border-b border-white/10 transition-colors duration-300"
>
  Our Tools
</NavLink>

                {Object.keys(dropdowns).map((key) => {
                  const mobileMainHandlers = {
                    services: handleServicesMainClick,
                    insight: handleInsightMainClick,
                    leadership: handleLeadershipMainClick,
                    about: handleAboutMainClick,
                  };
                  const mainLabel = {
                    services: 'Services',
                    insight: 'Insight',
                    leadership: 'Leadership',
                    about: 'About Us',
                  };

                  return (
                    <div key={key} className="border-b border-white/10 last:border-b-0">
                      <div className="flex justify-between items-center w-full py-3">
                        {/* Label — direct navigation on click */}
                        <button
                          onClick={mobileMainHandlers[key]}
                          className="text-left text-gray-200 hover:text-cyan-400 font-medium transition-colors duration-300 flex-1"
                        >
                          <span className="capitalize font-sans">{mainLabel[key]}</span>
                        </button>
                        {/* Chevron — toggle dropdown (existing behaviour) */}
                        <button
                          onClick={() => setMobileDropdown(mobileDropdown === key ? null : key)}
                          className="pl-4 pr-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                          aria-label={`Toggle ${key} dropdown`}
                        >
                          {mobileDropdown === key ? 
                            <FaChevronUp className="text-cyan-400 text-sm" /> : 
                            <FaChevronDown className="text-gray-400 text-sm" />
                          }
                        </button>
                      </div>
                    
                      {mobileDropdown === key && (
                        <div className="ml-4 pb-4 space-y-3">
                          {dropdowns[key].map((item, i) => (
                            <button
                              key={i}
                              onClick={() => handleDropdownItemClick(item)}
                              className="group w-full text-left p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-transparent transition-all duration-300"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <span className="w-1 h-1 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                                <div className="font-medium tracking-wide text-gray-200 group-hover:text-cyan-300 transition-colors duration-300 text-sm font-sans">
                                  {item.label}
                                </div>
                              </div>
                              {item.description && (
                                <div className="text-xs text-gray-400 leading-relaxed ml-3 font-light group-hover:text-gray-300 transition-colors duration-300">
                                  {item.description}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {token && (
                  <div className="pt-4 space-y-3">
                    <button 
                      onClick={handleDashboardClick}
                      className="block w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold hover:from-cyan-700 hover:to-cyan-800 transition-all duration-300 text-center"
                    >
                      Dashboard
                    </button>
                    <button 
                      onClick={logout}
                      className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}