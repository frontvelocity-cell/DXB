import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to DXB VIP Lounge Service</h1>
          <p className="hero-description">
            Experience luxury and comfort with our premium VIP lounge services at Dubai International Airport.
            Skip the crowds and enjoy exclusive amenities designed for discerning travelers.
          </p>
          <div className="hero-actions">
            <a href="/packages" className="btn-primary">View Packages</a>
            <a href="/contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
        
        <div className="features-section">
          <h2 className="section-title">Why Choose Our VIP Service?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Fast Track Immigration</h3>
              <p>Skip the long queues with our expedited immigration service.</p>
            </div>
            <div className="feature-card">
              <h3>Premium Lounge Access</h3>
              <p>Relax in luxury lounges with complimentary food and beverages.</p>
            </div>
            <div className="feature-card">
              <h3>Personal Assistant</h3>
              <p>Dedicated staff to assist you throughout your airport experience.</p>
            </div>
            <div className="feature-card">
              <h3>Baggage Assistance</h3>
              <p>Priority baggage handling and porter services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;