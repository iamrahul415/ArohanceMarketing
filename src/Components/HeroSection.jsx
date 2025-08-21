import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backgroundVideo from "../assets/backgroundvideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Make video sticky background
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom top",
      pin: video,
      pinSpacing: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Section Content */}
      <section className="absolute top-0 left-0 h-screen w-full text-white px-10 flex justify-between">
        {/* Left side: Heading at bottom */}
        <div className="flex flex-col justify-end pb-12">
          <h1 className="text- md:text-7xl font-bold leading-tight text-shadow-gray-500">
            Empowering your business
          </h1>
        </div>

        {/* Right side: Paragraph + CTA at top */}
        <div className="flex flex-col items-end pt-30">
          <p className="text-right font-sans text-[20px] w-[385px] p-3 rounded-lg">
            HI, FINNEGAN MONROE HERE. A FREELANCE PHOTOGRAPHER IN NY, THE
            SHUTTERBUG EXTRAORDINAIRE CAPTURING LIFE'S MAGICAL MOMENTS ONE
            CLICK AT A TIME.
          </p>

          <div className="cta-button mt-4 flex items-center gap-0">
            <a
              href="/contact"
              className="w-[174px] h-[50px] px-5 py-[15px] border border-[#faf5ea] flex items-center justify-center font-sans text-[15px] font-medium text-[#faf5ea] uppercase hover:bg-[#faf5ea] hover:text-black transition-all duration-300"
            >
              Schedule a meet
            </a>
            <div className="border-b border-r border-t border-[#faf5ea] w-[50px] h-[50px] flex items-center justify-center hover:bg-[#faf5ea] transition-all duration-300 group">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[#faf5ea] group-hover:text-black text-lg cursor-pointer transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
