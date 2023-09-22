import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Navbar/Sidebar';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Compo/Home';
import Summary from './Compo/Summary';
import Dashboard from './Compo/Dashboard';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="app">
      {/* <Navbar toggleSidebar={toggleSidebar} /> */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
{location.pathname !== '/dashboard' && <Navbar toggleSidebar={toggleSidebar}  />}

    
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Summary />} />

        <Route path='/summary' element={<Summary />} />
        <Route path='/dashboard' element={<Dashboard />} />
    
        
      </Routes>
    </div>
  );
}

export default App;
