import React, { useRef } from "react";
import backgroundvideo from "../assets/backgroundvideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  const videoRef = useRef(null);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background video (always playing) */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 filter grayscale"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundvideo} type="video/mp4" />
      </video>

      {/* Top-right: Paragraph + CTA */}
      <div className="absolute top-28 right-10 max-w-md text-right">
        <p className="font-serif text-lg leading-relaxed mb-6">
          Tincidunt id Fusce purus varius Ut libero orci accumsan cubilia
          ultrices Phasellus ante posuere cursus curae et velit ipsum primis in
          luctus faucibus vestibulum platea.
        </p>

        {/* Button + Icon */}
        <div className="flex items-center justify-end hover:cursor-pointer transition-all duration-300 group">
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

      {/* Bottom-left: Heading */}
      <div className="absolute bottom-40 left-10">
        <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
          Empowering your business
        </h1>
      </div>

      {/* Bottom-center: Scroll text */}
      <div className="absolute bottom-20 inset-x-0 text-center">
        <p className="text-gray-400 uppercase tracking-widest text-sm">
          ↓ Scroll to Explore
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
