import React, { useState, useEffect, useRef } from 'react';
import zig from '../assets/textbetween.jpg';
import backgroundgif from '../assets/backgroundvideo.mp4';
import { motion } from 'framer-motion';


function Transforming() {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            }
        },
        { threshold: 0.1 }
        );

        if (elementRef.current) observer.observe(elementRef.current);

        return () => {
        if (elementRef.current) observer.unobserve(elementRef.current);
        };
    }, []);

    return (
        <div className='w-full h-screen bg-zinc-900 pt-1 relative overflow-hidden'>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
            >
                <source src={backgroundgif} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Animated Text Section */}
            <div
                ref={elementRef}
                className={`relative z-10 whitespace-nowrap text-4xl md:text-6xl text-white pt-40 px-20 ${
                    isVisible ? 'animate-slideRight' : 'opacity-0'
                }`}
            >
                <div className="inline-block bg-gradient-to-r from-black/60 to-transparent px-8 py-4 rounded-lg">
                    Transforming Businesses Through 
                    <img 
                        src={zig} 
                        alt="zig" 
                        className="inline-block h-12 w-12 mx-4 align-middle animate-pulse" 
                    />
                    Tech-Powered Marketing Innovation
                </div>
            </div>
        </div>
    );
}

export default Transforming;