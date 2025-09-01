import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="w-full bg-zinc-950 overflow-hidden relative">
      {/* Navigation Links - Centered */}
      <nav className="w-full p-20 flex justify-center">
        <ul className="flex flex-wrap gap-8 items-center tracking-tight">
          {["Home", "About", "Work", "Reviews", "Contact"].map(
            (item, index) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`text-lg capitalize font-semibold hover:text-amber-600 hover:underline transition-colors ${
                    index === 0 ? "text-amber-600" : "text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Scrolling Arohance Animation */}
      <div className="relative w-full pt-4">
        {/* Gradient Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-20"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-20"></div>

        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center px-4">
              <span className="text-[20rem] font-bold text-white leading-none select-none">
                Arohance
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
