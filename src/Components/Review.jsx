import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    id: 1,
    name: "Jainam Oswal",
    img: "./src/assets/img1.jpg",
    comment:
      "Wonderful, highly responsive and professional team! They’ve been very thorough, organized, and delivered everything on time and within budget. Thank you Team Arohance!",
    stars: 4,
  },
  {
    id: 2,
    name: "Skillzbox_szx",
    img: "./src/assets/img2.jpg",
    comment:
      "One of the best agencies in Bangalore providing elite services at good rates.",
    stars: 5,
  },
  {
    id: 3,
    name: "Adiara Jewels",
    img: "./src/assets/img3.jpg",
    comment: "Thank you for your amazing service, Team Arohance!",
    stars: 4.5,
  },
  {
    id: 4,
    name: "Jainam Oswal",
    img: "./src/assets/img2.jpg",
    comment:
      "Wonderful, highly responsive and professional team! They’ve been very thorough, organized, and delivered everything on time and within budget. Thank you Team Arohance!",
    stars: 5,
  },
  {
    id: 5,
    name: "Skillzbox_szx",
    img: "./src/assets/img1.jpg",
    comment:
      "One of the best agencies in Bangalore providing elite services at good rates.",
    stars: 4.2,
  },
  {
    id: 6,
    name: "Adiara Jewels",
    img: "./src/assets/img2.jpg",
    comment: "Thank you for your amazing service, Team Arohance!",
    stars: 5,
  },
  {
    id: 7,
    name: "Jainam Oswal",
    img: "./src/assets/img3.jpg",
    comment:
      "Wonderful, highly responsive and professional team! They’ve been very thorough, organized, and delivered everything on time and within budget. Thank you Team Arohance!",
    stars: 4,
  },
  {
    id: 8,
    name: "Skillzbox_szx",
    img: "./src/assets/img1.jpg",
    comment:
      "One of the best agencies in Bangalore providing elite services at good rates.",
    stars: 5,
  },
  {
    id: 9,
    name: "Adiara Jewels",
    img: "./src/assets/img2.jpg",
    comment: "Thank you for your amazing service, Team Arohance!",
    stars: 5,
  },
];

const cardWidth = 400;
const gap = 32;

export default function ClientsCarousel() {
  const [translateX, setTranslateX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate array for infinite scroll
  const infiniteReviews = [...reviews, ...reviews];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const newX = prev - 1;
        if (Math.abs(newX) >= reviews.length * (cardWidth + gap)) {
          return 0;
        }
        return newX;
      });
    }, 16); // smooth scroll
    return () => clearInterval(interval);
  }, [isPaused]);

  // Render stars
  const renderStars = (count) =>
    Array.from({ length: count }, (_, i) => (
      <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
    ));

  return (
    <div className="relative w-full min-h-screen bg-black py-20 text-white">
      {/* Container aligned with navbar */}
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-4xl text-white">Smiles and Stories from</p>
          <h2 className="text-9xl font-serif text-orange-500">Our Clients</h2>
        </div>

        {/* Carousel */}
        <div
          className="w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-8 will-change-transform"
            style={{
              transform: `translateX(${translateX}px)`,
              width: `${infiniteReviews.length * (cardWidth + gap)}px`,
              transition: "transform 0.05s linear",
            }}
          >
            {infiniteReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="min-w-[400px] bg-gray-950 inc-900 border border-white/10 
                  rounded-xl shadow-lg flex flex-col justify-between p-8 hover:scale-105 
                  transition-transform duration-300"
              >
                {/* Profile */}
                <div className="flex items-center mb-6">
                  {review.img ? (
                    <img
                      src={review.img}
                      alt={review.name}
                      className="w-30 h-30 rounded-full object-cover mr-4 border-2"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                </div>

                {/* Comment */}
                <p className="text-base text-gray-200 mb-6 normal leading-relaxed">
                  “{review.comment}”
                </p>

                {/* Divider */}
                <hr className="border-t border-gray-700 my-4" />

                {/* Stars */}
                <div className="flex gap-1">{renderStars(review.stars)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Button + Icon */}
      <div className="flex items-center justify-center hover:cursor-pointer transition-all duration-300 group mt-30">
        <a
          href="/contact"
          className="h-[50px] flex items-center px-6 border border-white uppercase font-medium tracking-wide transition-all duration-30"
        >
          See All Reviews
        </a>
        <div className="w-[50px] h-[50px] border border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-white group-hover:text-black group-hover:-rotate-45 text-lg transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
