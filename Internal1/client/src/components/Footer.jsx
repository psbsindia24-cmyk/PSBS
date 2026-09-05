

//client/src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 text-neutral-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-11 gap-y-12 gap-x-8 items-start">

        {/* Brand (4/12) */}
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold text-white tracking-wide">PSBS India</h2>
         

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-6">
            <a
              href="https://linkedin.com/company/process-sage-business-solutions/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:text-[#EAA038] transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>

            <a
              href="https://twitter.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DA1F2] hover:text-[#EAA038] transition-colors"
              aria-label="Twitter"
              title="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] hover:text-[#EAA038] transition-colors"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright beneath Brand */}
          <p className="mt-6 text-sm text-neutral-500">
            © 2025 PSBS Management Services LLP | PSBS India. All rights reserved.
          </p>
        </div>

        {/* Navigate (3/12) */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">Navigate</h3>
          <ul className="flex flex-col gap-3 text-sm text-neutral-400">
            <li>
              <Link to="/services" className="hover:text-[#EAA038]">Services</Link>
            </li>
            <li>
              <Link to="/thought" className="hover:text-[#EAA038]">Thought  Leadership</Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-[#EAA038]">Team</Link>
            </li>
            <li>
       <Link
  to="/services#our-clients"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  Our Clients
</Link>
            </li>
          </ul>
        </div>

        {/* Offices (4/12) */}
        <div className="md:col-span-4">
          <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">Our Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-neutral-400 leading-relaxed">
            {/* Head Office */}
            <div className="pr-2">
              <p className="font-medium text-white mb-2">Head Office</p>
              <address className="not-italic space-y-1">
                <div>903, New Delhi House,</div>
                <div>27, Barakhamba Road, Connaught Place</div>
                <div>New Delhi – 110 001</div>
                <div className="mt-2">📧 <a href="mailto:contact@psbs.com" className="hover:text-[#EAA038]">ankitgupta@psbsindia.com</a></div>
                <div>📞 <a href="tel:+919876543210" className="hover:text-[#EAA038]">+91  92500 17481</a></div>
              </address>
            </div>

            {/* Branch Office */}
            <div className="pl-2">
              <p className="font-medium text-white mb-2">Branch Office</p>
              <address className="not-italic space-y-1">
                <div>325, Crema Tower, Mahagun Moderne</div>
                <div>Sector 78, Gautam Budh Nagar, Noida</div>
                <div>Uttar Pradesh – 201 301</div>
                <div className="mt-2">📧 <a href="mailto:delhi@psbs.com" className="hover:text-[#EAA038]">mohitgupta@psbsindia.com</a></div>
                <div>📞 <a href="tel:+919123456789" className="hover:text-[#EAA038]">+91 98105 58561</a></div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
