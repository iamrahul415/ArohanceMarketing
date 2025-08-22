import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import zig from "../assets/textbetweenimg.png";
// import backgroundgif from "../assets/backgroundvideo.mp4";

function Transforming() {
  const ref = useRef(null);

  // Track scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Horizontal movement: 100% (right) → -100% (left)
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  // Fade in/out effect
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={ref}
      className="w-full h-screen relative overflow-hidden flex justify-center items-center"
    >
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 filter grayscale"
      >
        <source src={backgroundgif} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Animated Text Section */}
      <motion.div
        style={{ x, opacity }} // 👈 smooth scroll + fade
        className="relative z-10 text-xl md:text-5xl font-black text-white whitespace-nowrap px-6"
      >
        <span className="inline-block bg-gradient-to-r px-6 py-3 rounded-lg">
          Transforming Businesses Through
          <img
            src={zig}
            alt="zig"
            className="inline-block h-15 w-12 mx-4 align-middle animate-pulse"
          />
          Tech-Powered Marketing Innovation
        </span>
      </motion.div>
    </div>
  );
}

export default Transforming;
