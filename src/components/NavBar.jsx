import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><span onClick={() => handleNavClick('home')}>Home</span></li>
        <li><span onClick={() => handleNavClick('about')}>About</span></li>
        <li><span onClick={() => handleNavClick('projects')}>Projects</span></li>
        <li><span onClick={() => handleNavClick('experience')}>Experience</span></li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

