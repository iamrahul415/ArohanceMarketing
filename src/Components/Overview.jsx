import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const data = [
  { id: 1, title: "Team Members", value: 9 },
  { id: 2, title: "Repeatative Clients", value: 50 },
  { id: 3, title: "Services", value: 13 },
  { id: 4, title: "Happy Clients Served", value: 100 },
];

export default function Overview() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".count-num");

    items.forEach((el) => {
      const target = +el.dataset.value;

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 4,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            el.textContent = Math.floor(el.innerText);
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative h-auto mx-8 mt-25">
      <div className="flex items-center justify-center text-white w-full">
        {/* Outer blurred border wrapper */}
        <div className="w-full border border-white/20 p-6 sm:p-10">
          <div ref={containerRef} className="w-full grid grid-rows-2 gap-3">
            {/* Top Row */}
            <div className="grid grid-cols-[60%_40%] gap-3">
              {data.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="stat-box backdrop-blur-sm p-10 flex flex-col justify-center border border-white/20"
                >
                  <h3 className="text-xl text-gray-300">{item.title}</h3>
                  <p className="text-7xl font-Clash Display flex items-baseline">
                    <span
                      className="count-num text-white"
                      data-value={item.value}
                    >
                      0
                    </span>
                    <span className="text-orange-500 ml-1">+</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-[40%_60%] gap-3">
              {data.slice(2).map((item) => (
                <div
                  key={item.id}
                  className="stat-box backdrop-blur-sm p-10 flex flex-col justify-center border border-white/20"
                >
                  <h3 className="text-xl text-gray-300">{item.title}</h3>
                  <p className="text-7xl font-Clash Display flex items-baseline">
                    <span
                      className="count-num text-white"
                      data-value={item.value}
                    >
                      0
                    </span>
                    <span className="text-orange-500 ml-1">+</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
