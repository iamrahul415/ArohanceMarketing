import React, { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Aboutus() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // trigger when 30% of component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden transition-colors duration-[2000ms] ${
        isVisible ? "bg-black" : "bg-transparent"
      }`}
    >
      {/* Main Content Container */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between max-w-7xl relative z-10">
        {/* Left → Heading */}
        <div className="w-full md:w-1/2 md:text-left md:mb-0">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-clash text-orange-500 leading-tight md:mt-10">
            Arohance...
          </h2>
        </div>

        {/* Right → Paragraph + Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-white text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
          <p className="mb-6 text-center md:text-left">
            a dynamic tech and marketing powerhouse based in Bangalore, dedicated
            to transforming businesses through innovative solutions. We blend
            cutting-edge technology with strategic marketing to create
            unparalleled growth opportunities for our clients. Our approach goes
            beyond traditional boundaries.
          </p>

          {/* Button + Icon */}
          <div className="flex items-center justify-center md:justify-start hover:cursor-pointer transition-all duration-300 group">
            <a
              href="/contact"
              className="h-[50px] flex items-center px-6 border border-white uppercase font-medium tracking-wide transition-all duration-300"
            >
              More about us
            </a>
            <div className="w-[50px] h-[50px] border border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white">
              <ArrowRight className="text-white group-hover:text-black group-hover:-rotate-45 text-lg transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
