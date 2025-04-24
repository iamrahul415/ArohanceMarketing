import { motion } from "framer-motion";
import React from 'react';

import a from '../assets/a.png';
import b from '../assets/b.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import five from '../assets/5.png';
import six from '../assets/6.png';
import seven from '../assets/7.png';

import eight from '../assets/8.png';
import nine from '../assets/9.png';
import ten from '../assets/10.png';
import eleven from '../assets/11.png';
import twelve from '../assets/12.png';
import thirteen from '../assets/13.png';
import fourteen from '../assets/14.png';

function Clients() {
  const topBrands = [
    a,
    b,
    three,
    four,
    five,
    six,
    seven,
  ];

  const bottomBrands = [
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
  ];

  const MarqueeRow = ({ brands, direction = 'left' }) => {
    const xValues = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];
    const displayBrands = direction === 'left' ? [...brands, ...brands, ...brands, ...brands, ...brands] : [...brands, ...brands, ...brands, ...brands, ...brands].slice().reverse();
    return (
      <div className="overflow-hidden relative w-full py-4">
        <motion.div
          className="flex"
          animate={{
            x: xValues,
          }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {displayBrands.map((brand, index) => (
            <div key={index} className="flex-shrink-0 px-8">
              <img
                src={brand}
                alt="Brand"
                className="max-h-24 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className='w-full h-screen bg-zinc-950 pt-1'>
      <div 
        className="heading text-white text-xl capitalize flex items-center justify-center mt-36 mb-24" 
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        Clients and Collaborators we have worked with
      </div>

      {/* Marquee Section */}
      <div className="mt-40 space-y-40">
        <MarqueeRow brands={topBrands} direction="left" />
        <MarqueeRow brands={bottomBrands} direction="right" />
      </div>
    </div>
  );
}

export default Clients;
