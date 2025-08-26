import React, { useEffect, useState, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    position: "CEO, TechStart Inc.",
    comment:
      "Arohance delivered exactly what we needed! The team is professional and highly responsive. Their attention to detail exceeded our expectations.",
    stars: 5,
  },
  {
    id: 2,
    name: "David Kim",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    position: "Product Manager, InnovateCorp",
    comment:
      "Amazing experience working with the team. Great attention to detail and superb communication throughout the entire project.",
    stars: 4,
  },
  {
    id: 3,
    name: "Sophia Brown",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    position: "Creative Director, DesignStudio",
    comment:
      "Their design sense is outstanding! Our website looks modern and functions flawlessly. Couldn't be happier with the results.",
    stars: 5,
  },
  {
    id: 4,
    name: "Michael Smith",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    position: "Founder, StartupHub",
    comment:
      "Professional and punctual. Delivered high-quality work ahead of schedule. The team truly understands modern business needs.",
    stars: 4,
  },
  {
    id: 5,
    name: "Sarah Lee",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    position: "Marketing Lead, GrowthTech",
    comment:
      "The whole process was smooth and transparent. Highly recommend them! They made our vision come to life perfectly.",
    stars: 5,
  },
  {
    id: 6,
    name: "Emily Johnson",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    position: "VP of Operations, ScaleUp",
    comment:
      "They transformed our vision into reality with creativity and precision. The final product exceeded all our expectations.",
    stars: 5,
  },
  {
    id: 7,
    name: "James Miller",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    position: "CTO, DevForward",
    comment: "Excellent service! They really care about customer satisfaction and deliver solutions that actually work in the real world.",
    stars: 4,
  },
  {
    id: 8,
    name: "Olivia Wilson",
    img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    position: "Director, FutureTech Solutions",
    comment:
      "A trustworthy partner for any project. Their expertise shines through in every detail and they're always there when you need them.",
    stars: 5,
  },
];

export default function ProfessionalReviews() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const cardWidth = 420; // card width + gap
  const totalCards = reviews.length;
  const visibleCards = 3; // Number of cards visible at once

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (!isPaused && isVisible) {
      const interval = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, currentIndex, isVisible]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalCards - visibleCards : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= totalCards - visibleCards ? 0 : prev + 1));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating
            ? "text-amber-400 fill-amber-400"
            : "text-gray-300"
        } transition-colors duration-200`}
      />
    ));
  };

  return (
    <div 
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 py-24 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 
            className={`text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-400 to-orange-800 mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            What Our Clients Say
          </h2>
          
          <p 
            className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Hear from our happy clients who trusted us to bring their ideas to life and transform their businesses.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className={`relative w-full max-w-7xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Cards Wrapper */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex gap-8 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}px)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`min-w-[400px] group transition-all duration-500 ${
                    index >= currentIndex && index < currentIndex + visibleCards
                      ? 'scale-100 opacity-100'
                      : 'scale-95 opacity-60'
                  }`}
                >
                  <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-xl p-8 shadow-2xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 group-hover:scale-105">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-white/20 group-hover:text-white/30 transition-colors duration-300">
                      <Quote size={32} />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {renderStars(review.stars)}
                    </div>

                    {/* Comment */}
                    <blockquote className="text-white/90 text-lg leading-relaxed mb-8 font-light">
                      "{review.comment}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={review.img}
                          alt={review.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-white/30 group-hover:border-white/50 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg group-hover:text-blue-200 transition-colors duration-300">
                          {review.name}
                        </h3>
                        <p className="text-slate-400 text-sm font-medium">
                          {review.position}
                        </p>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {[...Array(Math.ceil(totalCards / visibleCards))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * visibleCards)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleCards) === index
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div 
          className={`mt-20 grid grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-slate-300 text-sm uppercase tracking-wider">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-slate-300 text-sm uppercase tracking-wider">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">4.9</div>
            <div className="text-slate-300 text-sm uppercase tracking-wider">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}