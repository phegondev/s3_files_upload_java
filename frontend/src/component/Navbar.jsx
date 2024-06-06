import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <li><Link to="/">Phegon</Link></li>
        <li><Link to="/add">Add File</Link></li>
        <li><Link to="/">All Files</Link></li>
      </div>
    </nav>
  );
};

export default Navbar;
