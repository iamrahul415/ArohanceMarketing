import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import drop from "../assets/dropdown.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems = ["HOME", "ABOUT", "WORKS", "REVIEWS", "CONTACT"];

  return (
    <div className="fixed z-[999] w-full px-20 py-8 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="logo" className="h-10 w-auto opacity-100 mt-4" />
        </div>
        <img
          src={drop}
          alt="Toggle navigation menu"
          onClick={handleToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="w-12 h-8 cursor-pointer focus:outline-none opacity-100 filter"
        />
      </div>

      {menuOpen && (
        <div className="links flex flex-col items-end">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`text-lg capitalize font-semibold  ${
                index === 0 ? "text-red-500" : "text-gray-500"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
