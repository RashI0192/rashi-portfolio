import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css';

const FooterBar = () => {
  return (
    <footer className="footer-bar">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="footer-icon" title="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/rashi-ojha/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="footer-icon" title="LinkedIn" />
      </a>
      <a href="mailto:rashi001@e.ntu.edu.sg">
        <FaEnvelope className="footer-icon" title="Email" />
      </a>
    </footer>
  );
};

export default FooterBar;
