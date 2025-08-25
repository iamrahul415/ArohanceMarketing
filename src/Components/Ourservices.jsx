/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion } from "framer-motion";
import sampleImage from "../assets/servicesbg.jpg"; 

function OurServices() {
  const contentArray = [
    {
      heading: "Shoots",
      paragraph:
        "We capture your best moments with creativity and precision. Our shoots bring life to your vision.",
    },
    {
      heading: "Designing",
      paragraph:
        "Our design team creates modern, stylish, and user-friendly visuals that connect with your audience.",
    },
    {
      heading: "Marketing",
      paragraph:
        "We provide digital marketing strategies that help your brand grow and reach the right people.",
    },
    {
      heading: "Tech",
      paragraph:
        "We build modern, scalable, and fast solutions using the latest technology to support your business.",
    },
  ];

  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-zinc-950 text-white flex flex-col items-center overflow-hidden"
    >
      {/* Sticky Centered Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="sticky top-0 z-30 w-full text-center text-4xl md:text-6xl font-bold text-orange-400 py-6"
      >
        Our Services
      </motion.h1>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={sampleImage}
          alt="Services"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Rectangle Layout */}
      <div className="relative z-10 w-full max-w-5xl h-[600px] flex items-center justify-center">
        {/* Top Box */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 p-8 w-2/3 text-center rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-2">
            {contentArray[0].heading}
          </h2>
          <p className="text-lg text-zinc-100">{contentArray[0].paragraph}</p>
        </motion.div>

        {/* Right Box */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg border border-white/20 p-8 w-1/3 text-center rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-2">
            {contentArray[1].heading}
          </h2>
          <p className="text-lg text-zinc-100">{contentArray[1].paragraph}</p>
        </motion.div>

        {/* Bottom Box */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 p-8 w-2/3 text-center rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-2">
            {contentArray[2].heading}
          </h2>
          <p className="text-lg text-zinc-100">{contentArray[2].paragraph}</p>
        </motion.div>

        {/* Left Box */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg border border-white/20 p-8 w-1/3 text-center rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-orange-400 mb-2">
            {contentArray[3].heading}
          </h2>
          <p className="text-lg text-zinc-100">{contentArray[3].paragraph}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default OurServices;
