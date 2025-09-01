import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function ThereIsMore() {
  const contentArray = [
    {
      heading: "Everit Quick Edits",
      paragraph:
        "Curabitur ligula sapien, incidunt non, euismod vitae, posuere imperdiet, leo. Nulla facilisi. Mauris sollicitudin fermentum libero. Sed euismod, nisl vel tincidunt elementum.",
    },
    {
      heading: "Podcast Shoots",
      paragraph:
        "We capture high-quality podcast visuals with cinematic lighting and setups for a professional production feel. Each recording session is tailored to your brand’s tone.",
    },
    {
      heading: "Product Shoots",
      paragraph:
        "Showcase your products beautifully with creative photography, styled visuals, and stunning editing to attract customers. We focus on details and textures that convert.",
    },
    {
      heading: "Ad Shoots",
      paragraph:
        "From concept to execution, we craft engaging advertisements with impactful visuals that tell your brand story. Every frame is designed to leave a lasting impression.",
    },
    {
      heading: "Video Shoots",
      paragraph:
        "We produce dynamic video content tailored for commercials, social media, and corporate storytelling. From scriptwriting to editing, we ensure a polished final product.",
    },
    {
      heading: "Event Coverage",
      paragraph:
        "Capture the essence of your special events with our professional coverage. From corporate gatherings to concerts, we document every highlight with precision.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br bg-orange-500 text-white py-20 flex items-center justify-center">
      <div className="w-full px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-9xl md:text-8xl font-serif drop-shadow-lg text-black"
          >
            Wait...
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-9xl md:text-7xl font-serif mt-4 drop-shadow-lg text-black/90"
          >
            There's More!
          </motion.h3>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full"
        >
          {contentArray.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.6)",
              }}
              className="w-full h-[350px] bg-gray-900 p-8 shadow-lg transition-all duration-300 ease-in-out flex flex-col justify-between"
            >
              {/* Heading Top-Left */}
              <h3 className="text-3xl font-sans text-white tracking-wide">
                {item.heading}
              </h3>

              {/* Paragraph Bottom-Right (smaller text) */}
              <p className="text-5xl md:text-base text-white leading-relaxed text-right">
                {item.paragraph}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ThereIsMore;
