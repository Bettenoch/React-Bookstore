import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'boxicons';

const Navbar = () => (
  <nav className="nav-container">
    <ul className="nav-items">
      <li className="nav-right">
        <div className="logo">Bookstore CMS</div>
        <ul className="nav-links">
          <li><Link className="navlink" to="/">Books</Link></li>
          <li><Link className="navlink org" to="/Categories">Categories</Link></li>
        </ul>
      </li>
      <li className="user">
        <box-icon type="solid" name="user" color="#0290ff" />
      </li>
    </ul>
  </nav>
);

export default Navbar;
