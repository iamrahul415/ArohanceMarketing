import { useRef } from "react";
import backgroundvideo from "../assets/backgroundvideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  const videoRef = useRef(null);

  return (
    <div className="Relative w-full h-screen overflow-hidden">
      {/* Background video (always playing) */}
      <video
        ref={videoRef}
        className="fixed w-full h-full object-cover filter grayscale"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundvideo} type="video/mp4" />
      </video>

      <section className="h-screen w-full text-white">
        {/* Top-right: Paragraph + CTA */}
        <div className="absolute top-30 right-5 max-w-md text-right">
          <p className="text-lg leading-relaxed mb-6"
          style={{fontFamily:"Clash Display"}}
          >
            Tincidunt id Fusce purus varius Ut libero orci accumsan cubilia
            ultrices Phasellus ante posuere cursus curae et velit ipsum primis
            in luctus faucibus vestibulum platea.
          </p>

          {/* Button + Icon */}
          <div className="flex items-center justify-end hover:cursor-pointer transition-all duration-300 group">
            <a
              href="/contact"
              className="h-[50px] flex items-center px-6 border border-white uppercase font-Clash Display tracking-wide transition-all duration-300"
            >
              Schedule a Meet
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
          <h1 className="text-5xl md:text-7xl leading-tight" 
          style={{fontFamily: "Clash Display placeholder",
            fontSize:"105px"
          }}
          >
            Empowering your business
          </h1>
        </div>

        {/* Bottom-center: Scroll text */}
        <div className="absolute bottom-5 inset-x-0 text-center px-8">
          <p className="text-gray-400 uppercase"
          style={{fontFamily:"sans-serif"}}
          >
            Scroll to Explore
          </p>
          <div className="mt-1 w-full h-px bg-white/30 backdrop-blur-sm "></div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
