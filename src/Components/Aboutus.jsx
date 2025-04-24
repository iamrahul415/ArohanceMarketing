import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import backgroundgif from '../assets/backgroundvideo.mp4';

export default function Aboutus() {
  return (
    <div className="w-full h-screen  flex items-center justify-between px-10 bg-zinc-900 relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src={backgroundgif} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Sections */}
      <div className="w-full ml-24 relative z-10">
        <h2
          className="uppercase text-[6vw] leading-[8vw] tracking-tight font-bold opacity-100 text-orange-500"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Arohance...
        </h2>
      </div>

      <div className="text-white text-base md:text-lg max-w-md text-left mt-72 mr-60 leading-relaxed relative z-10 mb-2">
        <p className="mb-4">
          A dynamic tech and marketing powerhouse based in Bangalore, dedicated
          to transforming businesses through innovative solutions.
        </p>
        <p className="mb-4">
          We blend cutting-edge technology with strategic marketing to create
          unparalleled growth opportunities for our clients.
        </p>
        <p className="mb-6">Our approach goes beyond traditional boundaries.</p>

        <div className="group cursor-pointer w-fit border border-white divide-x divide-white flex items-center">
          <span className="text-white px-4 py-2 text-sm font-semibold">
            MORE ABOUT US
          </span>
          <span className="px-4 py-2 bg-black transition-all duration-300 transform group-hover:rotate-[315deg]">
            <FaArrowRightLong className="text-white group-hover:text-green transition-colors duration-300" />
          </span>
        </div>
      </div>
    </div>
  );
}