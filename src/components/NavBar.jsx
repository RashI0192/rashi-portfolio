import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });

      // Scroll to section after redirect
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><span onClick={() => handleNavClick('home')}>Home</span></li>
        <li><span onClick={() => handleNavClick('about')}>About</span></li>
        <li><span onClick={() => handleNavClick('projects')}>Projects</span></li>
        <li><span onClick={() => handleNavClick('experience')}>Experience</span></li>

        <li
          className="dropdown"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <span className="dropdown-toggle">More ▾</span>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li>
              <Link to="/certifications" onClick={() => setIsDropdownOpen(false)}>
                Certifications
              </Link>
            </li>
            <li>
              <Link to="/resume" target="_blank" rel="noopener noreferrer" onClick={() => setIsDropdownOpen(false)}>
                Resume
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
