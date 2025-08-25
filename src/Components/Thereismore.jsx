import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Thereismore() {
  const contentArray = [
    {
      heading: "Everit Quick Edits",
      paragraph:
        "Curabitur ligula sapien, incidunt non, euismod vitae, posuere imperdiet, leo. Nulla facilisi. Mauris sollicitudin fermentum libero.",
    },
    {
      heading: "Podcast Shoots",
      paragraph:
        "We capture high-quality podcast visuals with cinematic lighting and setups for a professional production feel.",
    },
    {
      heading: "Product Shoots",
      paragraph:
        "Showcase your products beautifully with creative photography, styled visuals, and stunning editing to attract customers.",
    },
    {
      heading: "Ad Shoots",
      paragraph:
        "From concept to execution, we craft engaging advertisements with impactful visuals that tell your brand story.",
    },
    {
      heading: "Corporate Photography",
      paragraph:
        "Professional corporate photography for headshots, team portraits, and company events with modern and clean aesthetics.",
    },
    {
      heading: "Creative Campaigns",
      paragraph:
        "Bring your ideas to life with tailor-made creative campaigns that stand out and connect with the right audience.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#e0c3fc] via-[#8ec5fc] to-[#fcbad3] text-white py-20">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg text-zinc-900"
        >
          Wait...
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mt-4 drop-shadow-lg text-zinc-800"
        >
          There's More!
        </motion.h3>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 lg:px-40">
        {contentArray.map((item, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-xl border border-white/40 
             rounded-3xl p-8 shadow-lg hover:shadow-xl 
             transition-all duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3 tracking-wide">
              {item.heading}
            </h3>
            <p className="text-base text-zinc-700 leading-relaxed">
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thereismore;
