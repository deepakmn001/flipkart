import React, { useState } from "react";

const FooterSection = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 sm:border-none">
      {/* MOBILE HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 sm:py-0 sm:cursor-default"
      >
        <h3 className="font-bold text-sm sm:text-lg">{title}</h3>
        <span className="sm:hidden text-lg">{open ? "−" : "+"}</span>
      </button>

      {/* LINKS */}
      <ul
        className={`text-sm text-gray-300 space-y-2 pb-4 sm:pb-0
          ${open ? "block" : "hidden"} sm:block`}
      >
        {links.map((item, i) => (
          <li key={i}>
            <a
              href="#"
              className="block py-1 hover:text-white transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* SECTIONS */}
        <div className="sm:grid sm:grid-cols-4 sm:gap-8">
          <FooterSection
            title="ABOUT"
            links={["Contact Us", "About Us", "Careers", "Press"]}
          />
          <FooterSection
            title="HELP"
            links={["Payments", "Shipping", "Returns", "FAQ"]}
          />
          <FooterSection
            title="POLICY"
            links={["Return Policy", "Terms Of Use", "Security", "Privacy"]}
          />
          <FooterSection
            title="SOCIAL"
            links={["Facebook", "Twitter", "YouTube", "Instagram"]}
          />
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-6 py-4 text-center text-xs text-gray-400">
          © 2025 Flipkart Clone. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
