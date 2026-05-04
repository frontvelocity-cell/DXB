import React from 'react';
import './Packages.css';

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Essential VIP",
      price: "$150",
      duration: "Per Person",
      features: [
        "Fast-track Immigration",
        "Basic Lounge Access",
        "Complimentary Refreshments",
        "WiFi Access",
        "Baggage Assistance"
      ]
    },
    {
      id: 2,
      name: "Premium VIP",
      price: "$250",
      duration: "Per Person",
      popular: true,
      features: [
        "Fast-track Immigration & Security",
        "Premium Lounge Access",
        "Gourmet Dining",
        "Personal Assistant",
        "Baggage Porter Service",
        "Private Rest Area",
        "Shower Facilities"
      ]
    },
    {
      id: 3,
      name: "Luxury VIP",
      price: "$400",
      duration: "Per Person",
      features: [
        "Private Immigration Channel",
        "Exclusive Luxury Lounge",
        "Fine Dining Experience",
        "Dedicated Concierge",
        "Limousine Transfer",
        "Private Suite",
        "Spa Services",
        "Meeting Room Access"
      ]
    }
  ];

  return (
    <div className="packages">
      <div className="container">
        <div className="packages-header">
          <h1 className="packages-title">Choose Your VIP Experience</h1>
          <p className="packages-subtitle">
            Select from our range of premium packages designed to enhance your travel experience
          </p>
        </div>
        
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">Most Popular</div>}
              <div className="package-header">
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                  <span className="duration">{pkg.duration}</span>
                </div>
              </div>
              <ul className="package-features">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="book-package-btn">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;