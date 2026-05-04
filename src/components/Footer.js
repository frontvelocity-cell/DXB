import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/terms" className="footer-link">Terms & Conditions</a>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Instagram">
              <div className="instagram-icon"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;