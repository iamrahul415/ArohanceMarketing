// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";

import a from "../assets/a.png";
import b from "../assets/b.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";
import ten from "../assets/10.png";
import eleven from "../assets/11.png";
import twelve from "../assets/12.png";
import thirteen from "../assets/13.png";
import fourteen from "../assets/14.png";

function Clients() {
  const topBrands = [a, b, three, four, five, six, seven];
  const bottomBrands = [eight, nine, ten, eleven, twelve, thirteen, fourteen];

  const MarqueeRow = ({ brands, direction = "left" }) => {
    const xValues = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];
    const displayBrands =
      direction === "left"
        ? Array(5).fill(brands).flat()
        : Array(5).fill(brands).flat().reverse();

    return (
      <div className="overflow-hidden relative w-full py-4 bg-black">
        <motion.div
          className="flex"
          animate={{ x: xValues }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {displayBrands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 px-8">
              <motion.img
                src={brand}
                alt="Brand"
                className="max-h-28 object-contain transition-transform duration-300"
                whileHover={{
                  scale: 1,
                  boxShadow: "0px 8px 20px 0px",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className=" relative w-full min-h-screen bg-black flex flex-col items-center justify-center py-20">
      {/* Heading */}
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl capitalize mb-16 text-center font-Clash Display">
        Clients and Collaborators we have worked with
      </h2>

      {/* Marquee Section */}
      <div className="w-full max-w-7xl space-y-20 px-6">
        <MarqueeRow brands={topBrands} direction="left" />
        <MarqueeRow brands={bottomBrands} direction="right" />
      </div>
    </div>
  );
}

export default Clients;
