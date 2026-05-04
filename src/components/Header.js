import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">DXB VIP LOUNGE SERVICE</Link>
          </div>
          <nav className="navigation">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              HOME
            </Link>
            <Link 
              to="/packages" 
              className={`nav-link ${isActive('/packages') ? 'active' : ''}`}
            >
              PACKAGES
            </Link>
            <Link 
              to="/partners" 
              className={`nav-link ${isActive('/partners') ? 'active' : ''}`}
            >
              PARTNERS
            </Link>
            <Link 
              to="/faq" 
              className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
            >
              FAQS
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              CONTACT
            </Link>
            <span className="nav-link arabic">العربية</span>
          </nav>
          <Link to="/packages" className="book-now-btn">
            BOOK NOW
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;