import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with our VIP services team for bookings, inquiries, or assistance
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="info-title">Get In Touch</h2>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+971 4 123 4567</p>
              <p>+971 50 123 4567</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>info@dxbviplounge.com</p>
              <p>bookings@dxbviplounge.com</p>
            </div>
            <div className="info-item">
              <h3>Address</h3>
              <p>Dubai International Airport</p>
              <p>Terminal 3, Level 2</p>
              <p>Dubai, UAE</p>
            </div>
            <div className="info-item">
              <h3>Operating Hours</h3>
              <p>24/7 Customer Support</p>
              <p>VIP Services: 5:00 AM - 2:00 AM</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2 className="form-title">Send Us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">New Booking</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;