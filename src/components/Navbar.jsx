import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Desktop Navigation */}
      <ul className="nav-list">
        <li className="brand">One Green Step</li>
        <li><NavLink to="/" className="nav-link challenge">Challenge</NavLink></li>
        <li><NavLink to="/archive" className="nav-link">Leaf Gallery</NavLink></li>
      </ul>        
    </nav>
  );
};

export default Navbar;