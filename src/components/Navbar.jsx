import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-items">
    <div className="logo">Bookstore CMS</div>
    <ul className="nav-links">
      <li><Link className="navlink" to="/">Books</Link></li>
      <li><Link className="navlink" to="/Categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Navbar;
