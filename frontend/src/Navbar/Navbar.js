import React from 'react';
import "./Style.css";
import { Link } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <button onClick={toggleSidebar} className="toggle-button">
        ☰
      </button>
      <Link className='title'>Weather App</Link>
      <ul className="navbar-links">
        <li><Link className='nav-link' to="/home">Home</Link></li>
        <li><Link className='nav-link' to="/summary">Summary</Link></li>
        <li><Link className='nav-link' to="/dashboard">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
