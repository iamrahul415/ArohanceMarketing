import React from "react";
import backgroundgif from "../assets/backgroundvideo.mp4";

function Overview() {
  const cardData = [
    { title: "Team Members", value: "13+" },
    { title: "Reputable Clients", value: "100+" },
    { title: "Services", value: "13+" },
    { title: "Happy Clients Served", value: "100+" },
  ];

  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 relative overflow-hidden">
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

      {/* Content Container */}
      <div className="relative z-10 mt-60">
        <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="border-1 border-amber-50">
            <div className="space-y-1 p-4">
              {/* Top Row - 60/40 split */}
              <div className="grid grid-cols-1 border border-gray-100 md:grid-cols-[60%_40%] gap-1  space-x-4">
                {cardData.slice(0, 2).map((card, index) => (
                  <div
                    key={index}
                    className={`rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 
          ${index === 0 ? "border-r border-gray-200" : ""}`}
                  >
                    <h3 className="text-gray-100 font-semibold text-base mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 font-bold text-3xl">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Row - 40/60 split */}
              <div className="grid grid-cols-1 border border-gray-100 md:grid-cols-[40%_60%] gap-1">
                {cardData.slice(2, 4).map((card, index) => (
                  <div
                    key={index}
                    className={`rounded-xl shadow-md p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 
                             ${index === 1 ? "border-l border-gray-200" : ""}`}
                  >
                    <h3 className="text-gray-100 font-semibold text-base mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 font-bold text-3xl">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
