import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="w-full h-screen bg-orange-500 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Circle (fixed) */}
      <div
        className="w-64 h-64 rounded-full flex items-center justify-center cursor-pointer
        bg-orange-500 relative z-10 shadow-2xl overflow-hidden border-1 border-white"
      >
      <div
        className="w-60 h-60 rounded-full flex items-center justify-center cursor-pointer
        bg-orange-500 relative z-10 shadow-2xl overflow-hidden border-4 border-white"
      >
        {/* Background Layer (fades in + zooms) */}
        <motion.div
          whileHover={{ scale: 1.2, opacity: 1, backgroundColor: "#ffffff" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full"
        />

        {/* Text Layer (always visible) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-2xl font-bold text-black transition-colors duration-500 group-hover:text-black">
            Let’s Meet
          </h3>
        </div>
      </div>
      </div>

      {/* Email */}
      <div className="mt-12 text-5xl md:text-6xl font-serif text-black hover:underline tracking-wide">
        info@arohance.com
      </div>

      {/* Social Links */}
      <div className="flex space-x-12 mt-10 text-black text-2xl">
        <a href="#" className="flex items-center gap-2 hover:text-white transition">
          <FaInstagram className="text-4xl" /> Instagram
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-white transition">
          <FaFacebook className="text-4xl" /> Facebook
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-white transition">
          <FaTwitter className="text-4xl" /> Twitter
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-white transition">
          <FaLinkedin className="text-4xl" /> LinkedIn
        </a>
      </div>
    </div>
  );
}
