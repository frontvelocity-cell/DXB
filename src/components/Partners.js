import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Emirates Airlines",
      description: "Official airline partner providing seamless integration with VIP services",
      logo: "🛫"
    },
    {
      id: 2,
      name: "Dubai Airports",
      description: "Strategic partnership ensuring smooth airport operations and access",
      logo: "✈️"
    },
    {
      id: 3,
      name: "Luxury Hotels Group",
      description: "Premium accommodation partners for extended stay packages",
      logo: "🏨"
    },
    {
      id: 4,
      name: "Ground Transportation",
      description: "Exclusive limousine and luxury car service providers",
      logo: "🚗"
    },
    {
      id: 5,
      name: "Catering Services",
      description: "Fine dining and gourmet catering for VIP lounge experiences",
      logo: "🍽️"
    },
    {
      id: 6,
      name: "Security Services",
      description: "Professional security and privacy protection services",
      logo: "🛡️"
    }
  ];

  return (
    <div className="partners">
      <div className="container">
        <div className="partners-header">
          <h1 className="partners-title">Our Trusted Partners</h1>
          <p className="partners-subtitle">
            We collaborate with leading organizations to deliver exceptional VIP experiences
          </p>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-card">
              <div className="partner-logo">
                <span className="logo-icon">{partner.logo}</span>
              </div>
              <div className="partner-content">
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="partnership-cta">
          <h2 className="cta-title">Interested in Partnership?</h2>
          <p className="cta-description">
            Join our network of premium service providers and enhance the VIP experience for our customers.
          </p>
          <a href="/contact" className="btn-primary">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Partners;