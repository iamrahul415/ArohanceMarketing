import React from 'react';
import backgroundgif from '../assets/backgroundvideo.mp4';

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundgif} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="relative z-10">
        <div className="textstructure mt-40 px-20">
          {["Empowring", "Your Buisness"].map((text, index) => (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center gap-4">
                <h1
                  className="uppercase text-[8vw] leading-[8vw] tracking-tight font-bold text-white opacity-100"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  {text}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;