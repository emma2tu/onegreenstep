import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      {/* Main Navbar */}
      <nav>
        {/* Desktop Navigation */}
        <ul>
          <li>One Green Step</li>
          <li><NavLink
            to="/"
            className=""
          >
            Home
          </NavLink></li>
          <li><NavLink
            to="/archive"
            className=""
          >
            Archive
          </NavLink></li>
        </ul>        
      </nav>
    </>
  );
};

export default Navbar;