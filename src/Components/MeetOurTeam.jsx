import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const team = [
  { id: 1, name: "John Doe", role: "Frontend Developer", img: "./src/assets/img1.jpg" },
  { id: 2, name: "Sarah Lee", role: "Backend Developer", img: "./src/assets/img2.jpg" },
  { id: 3, name: "Michael Smith", role: "UI/UX Designer", img: "./src/assets/img3.jpg" },
  { id: 4, name: "Emily Johnson", role: "Project Manager", img: "./src/assets/img4.jpg" },
  { id: 5, name: "David Kim", role: "DevOps Engineer", img: "./src/assets/img1.jpg" },
  { id: 6, name: "Sophia Brown", role: "Data Scientist", img: "./src/assets/img3.jpg" },
];

// Animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

export default function MeetOurTeam() {
  return (
    <div className="w-full min-h-screen bg-black py-16">
      <h2 className="text-5xl font-sans text-center text-white mb-10">Meet Our Team</h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Meet the creative minds behind Arohance Marketing Team, bringing innovation and expertise to every project.
      </p>

      {/* Grid layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[420px] w-[280px] mx-auto"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover filter grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4">
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
