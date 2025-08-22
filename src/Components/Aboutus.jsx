import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Aboutus() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full h-screen flex items-center justify-evenly px-10 relative overflow-hidden transition-colors duration-1000 ${
        isVisible ? "bg-black" : "bg-transparent"
      }`}
    >
      {/* Left Column → Heading */}
      <div className="w-1/2 ml-10 relative z-10">
        <h2
          className="text-[6vw] leading-[8vw] tracking-tight font-bold text-orange-500"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          Arohance...
        </h2>
      </div>

      {/* Right Column → Paragraph + Button */}
      <div className="w-1/2 text-white text-lg md:text-xl max-w-lg leading-relaxed relative z-10 transition-opacity duration-1000">
        <p className="mb-6">
          A dynamic tech and marketing powerhouse based in Bangalore, dedicated
          to transforming businesses through innovative solutions. We blend
          cutting-edge technology with strategic marketing to create
          unparalleled growth opportunities for our clients. Our approach goes
          beyond traditional boundaries.
        </p>

        {/* Button + Icon */}
        <div className="flex items-center hover:cursor-pointer transition-all duration-300 group">
          <a
            href="/contact"
            className="h-[50px] flex items-center px-6 border border-white uppercase font-medium tracking-wide transition-all duration-300 group-hover:bg-white group-hover:text-black"
          >
            More about us
          </a>
          <div className="w-[50px] h-[50px] border border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white group-hover:text-black group-hover:-rotate-45 text-lg transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
