import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Generate 6 unique placeholder image URLs
const images = Array.from({ length: 6 }, (_, i) =>
  `https://picsum.photos/seed/work${i}/600/600`
);

function Works() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;

    // Pin the heading in place (center of screen)
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=4000",
      pin: heading,
      pinSpacing: false,
    });

    // Animate each image sequentially
    imageRefs.current.forEach((img, idx) => {
      gsap.fromTo(
        img,
        {
          opacity: 0,
          scale: 0.5,
          x: idx % 2 === 0 ? -200 : 200,  // alternate direction
          y: idx % 2 === 0 ? -200 : 200,
        },
        {
          opacity: 1,
          scale: 1.2,
          x: 0,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: `${idx * 15}% center`,
            end: `${(idx + 1) * 15}% center`,
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[500vh] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Centered Heading */}
      <h1
        ref={headingRef}
        className="relative text-orange-500 text-7xl font-bold mix-blend-difference blur-sm"
      >
        Works
      </h1>

      {/* Overlaying Images */}
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((src, i) => (
          <img
            key={i}
            ref={(el) => (imageRefs.current[i] = el)}
            src={src}
            alt={`work-${i}`}
            className="absolute w-80 h-80 object-cover rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
    </section>
  );
}

export default Works;
