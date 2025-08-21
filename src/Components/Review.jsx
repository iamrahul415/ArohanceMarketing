import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from "react-icons/fa6";

function Review() {
  const customerReviews = [
    { name: "John D.", comment: "Amazing Experience!", stars: 5 },
    { name: "Sarah M.", comment: "Best service ever!", stars: 5 },
    { name: "Alex P.", comment: "Highly recommended!", stars: 5 },
    { name: "Emily R.", comment: "Exceptional quality!", stars: 5 },
    { name: "Mike S.", comment: "Quick delivery!", stars: 5 },
    { name: "Laura B.", comment: "Will buy again!", stars: 5 },
    { name: "Chris K.", comment: "Outstanding support!", stars: 5 },
    { name: "Anna L.", comment: "Perfect transaction!", stars: 5 }
  ];

  return (
    <div className='w-full h-screen pt-1 bg-zinc-950 flex justify-center items-center'>
      <div className='pt-12 bg-zinc-800 w-3/4 h-3/4 relative overflow-hidden'>
        {/* Header Section */}
        <div className='ml-112 text-xl text-orange-500'>
          <p>Smiles and Stories from</p>
        </div>
        <div className='ml-72 text-8xl text-white mb-12'>Our Clients</div>

        {/* Framer Motion Marquee */}
        <motion.div
          className='absolute bottom-24 w-full flex whitespace-nowrap'
          animate={{
            x: ['100%', '-100%'],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...customerReviews, ...customerReviews, ...customerReviews, ...customerReviews, ...customerReviews, ...customerReviews].map((review, index) => (
            <div key={index} className='flex flex-col items-center mx-6 shrink-0 text-center'>
              <span className='text-orange-400 text-lg font-semibold mb-2'>{review.name}</span>
              <span className='text-white text-lg font-medium mb-2'>"{review.comment}"</span>
              <div className='text-yellow-400 text-xl'>
                {'★'.repeat(review.stars)}
              </div>
            </div>
          ))}
        </motion.div>

        {/* More About Us Button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="group cursor-pointer w-fit border border-white divide-x divide-white flex items-center">
            <span className="text-white px-4 py-2 text-sm font-semibold">
              MORE ABOUT US
            </span>
            <span className="px-4 py-2 bg-black transition-all duration-300 transform group-hover:rotate-[315deg]">
              <FaArrowRightLong className="text-white group-hover:text-green transition-colors duration-300" />
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Review;