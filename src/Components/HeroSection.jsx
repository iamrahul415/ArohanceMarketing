import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backgroundvideo from "../assets/backgroundvideo.mp4"; // ✅ Correct import with extension
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
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden text-white"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover filter grayscale"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundvideo} type="video/mp4" /> {/* ✅ Use imported file */}
      </video>

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Top-right: Paragraph + CTA */}
      <div className="absolute top-30 right-10 max-w-md text-right">
        <p className="font-serif text-lg leading-relaxed mb-6">
          Tincidunt id Fusce purus varius Ut libero orci accumsan cubilia
          ultrices Phasellus ante posuere cursus curae et velit ipsum primis in
          luctus faucibus vestibulum platea.
        </p>
        <div className="flex items-center justify-end">
          <a
            href="/contact"
            className="px-6 py-3 border border-white uppercase font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300"
          >
            Schedule a meet
          </a>
          <div className="w-[50px] h-[50px] border border-white flex items-center justify-center hover:bg-white transition-all duration-300 group">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white group-hover:text-black text-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom-left: Heading */}
      <div className="absolute bottom-40 left-10">
        <h1 className="text-7xl md:text-7xl font-bold leading-tight">
          Empowering your business
        </h1>
      </div>

      {/* Bottom-center: Scroll text */}
      <div className="absolute bottom-20 inset-x-0 text-center">
        <p className="text-gray-200 uppercase tracking-widest text-sm">
          ↓ Scroll to Explore
        </p>
      </div>
      <div className="absolute w-25 h-5 border-amber-50"></div>
    </section>
  );
}

export default HeroSection;
