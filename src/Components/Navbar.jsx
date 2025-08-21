import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["HOME", "ABOUT", "WORKS", "REVIEWS", "CONTACT"];
  const socialLinks = ["INSTAGRAM", "TWITTER", "LINKEDIN", "YOUTUBE"];

  return (
    <nav className="fixed z-[999] top-0 left-0 w-full h-30 flex flex-row items-center justify-between px-10 py-5 overflow-hidden">
      {/* Logo */}
      <img
        className="logo"
        src="https://framerusercontent.com/images/PFh1abACBOSrm0844kJTHeMtK4o.svg"
        alt="companyLogo"
        width={184}
        height={85}
      />

      {/* Toggle Button (40x17) */}
      <motion.button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="w-10 h-4 relative z-[1001] focus:outline-none cursor-pointer"
        aria-label="Toggle menu"
        initial={false}
        animate={menuOpen ? "open" : "closed"}
      >
        <motion.span
          className="absolute left-0 top-0 w-full h-0.5 bg-white"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 8.5 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute left-0 bottom-0 w-full h-0.5 bg-white"
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -8.5 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      {/* Fullscreen Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black text-[#faf5ea] flex flex-col justify-between p-10 z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Nav Items */}
            <div className="mt-24 space-y-6 text-left">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className={`text-7xl leading-20 font-light tracking-tight uppercase block ${
                    index === 0 ? "text-[#ff5c1f]" : ""
                  }`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-4 border border-[#faf5ea] divide-x divide-[#faf5ea] text-sm uppercase mt-10">
              {socialLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="flex items-center justify-center px-4 py-3 hover:opacity-80"
                >
                  {link} <span className="ml-1">↗</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;