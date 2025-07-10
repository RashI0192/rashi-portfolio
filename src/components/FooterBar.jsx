import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css';

const FooterBar = () => {
  return (
    <footer className="footer-bar">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="footer-icon" title="GitHub" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="footer-icon" title="LinkedIn" />
      </a>
      <a href="mailto:your.email@outlook.com">
        <FaEnvelope className="footer-icon" title="Email" />
      </a>
    </footer>
  );
};

export default FooterBar;