import React from 'react';
import "./Style.css";
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <button onClick={toggleSidebar} className="close-button">
      <i class="fa-solid fa-xmark"></i>
      </button>
      <ul className="sidebar-links">
        <li className='sidebar-link'><Link className='side-text' to="/home"><i class="fa-solid fa-house icon"></i>Home</Link></li>
        <li className='sidebar-link'><Link className='side-text' to="/summary"><i class="fa-solid fa-bolt-lightning icon"></i>Summary</Link></li>
        <li className='sidebar-link'><Link className='side-text' to="#"><i class="fa-solid fa-globe icon"></i>Updates</Link></li>
        <li className='sidebar-link'><Link className='side-text' to="#"><i class="fa-solid fa-clipboard icon"></i>Reports</Link></li>
        <li className='sidebar-link'><Link className='side-text' to="#"><i class="fa-solid fa-phone-volume icon"></i>Contacts</Link></li>

      </ul>
    </div>
  );
}

export default Sidebar;
