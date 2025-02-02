import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// import { Menu, X } from 'lucide-react';

const Navbar = () => {

  return (
    <>
      {/* Main Navbar */}
      <div className="fixed top-0 w-full px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center z-40 bg-[#171717]/80 backdrop-blur-sm">
        <div className="text-white text-lg font-medium order-1 md:order-none">
          One Green Step
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 p-1 rounded-full border-2 border-[#2d2d2d] bg-[#1c1c1c]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white px-4 py-2 text-sm rounded-full bg-[#ffffff1a] shadow-lg"
                : "text-white px-4 py-2 text-sm rounded-full hover:text-gray-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/archive"
            className={({ isActive }) =>
              isActive
                ? "text-white px-4 py-2 text-sm rounded-full bg-[#ffffff1a] shadow-lg"
                : "text-white px-4 py-2 text-sm rounded-full hover:text-gray-300"
            }
          >
            Archive
          </NavLink>
        </nav>
        
      </div>
    </>
  );
};

export default Navbar;