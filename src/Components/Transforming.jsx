import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zig from "../assets/textbetweenimg.png";

gsap.registerPlugin(ScrollTrigger);

function Transforming() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!el || !section || !container) return;

    // Calculate the distance needed to scroll the text completely
    const getScrollDistance = () => {
      return el.scrollWidth - container.offsetWidth;
    };

    // Only create animation if text is wider than container
    const scrollDistance = getScrollDistance();
    
    if (scrollDistance > 0) {
      // Create the scroll hijack animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100", // Start when section enters viewport
          end: () => `+=${scrollDistance + window.innerHeight}`, // End after text is fully scrolled
          scrub: 0.5, // Smooth scrubbing with slight delay
          pin: true, // Pin the section during animation
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Calculate progress for text animation
            const progress = self.progress;
            const translateX = -scrollDistance * progress;
            
            // Apply the horizontal translation
            gsap.set(el, {
              x: translateX,
              force3D: true // Enable hardware acceleration
            });
          },
          onComplete: () => {
            // Ensure text is at final position when animation completes
            gsap.set(el, {
              x: -scrollDistance,
              force3D: true
            });
          }
        },
      });

      // Set initial position
      gsap.set(el, {
        x: 0,
        force3D: true
      });

      // Cleanup function
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Text Container */}
      <div
        ref={containerRef}
        className="w-full h-full flex items-center overflow-hidden"
      >
        <div
          ref={textRef}
          className="text-xl md:text-5xl font-normal text-white whitespace-nowrap will-change-transform"
          style={{
            fontFamily: "Clash Display",
            fontSize: "100px",
          }}
        >
          <span className="inline-block px-6 py-3">
            Transforming Businesses Through
            <img
              src={zig}
              alt="zig"
              className="inline-block h-12 w-12 mx-4 align-middle"
            />
            Tech-Powered Marketing Innovation
          </span>
        </div>
      </div>
    </section>
  );
}

export default Transforming;