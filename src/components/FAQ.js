import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "Does making a booking with Al Majlis guarantee that the service will be provided?",
      answer: "Yes, once your booking is confirmed and payment is processed, we guarantee the provision of your selected VIP lounge services. However, services may be subject to airport operational requirements and security protocols."
    },
    {
      id: 2,
      question: "Why is there a need for the passenger to pre-register for the Al Majlis service?",
      answer: "Pre-registration is required to ensure proper coordination with airport authorities, security clearances, and to guarantee availability of our VIP services. This also helps us prepare personalized assistance for your specific travel requirements."
    },
    {
      id: 3,
      question: "Does booking Al Majlis service entitle the passenger to airline benefits such as upgrades and excess baggage allowances?",
      answer: "No, Al Majlis VIP lounge services are independent of airline benefits. Our services focus on airport experience enhancement including fast-track immigration, lounge access, and personal assistance. Airline-specific benefits must be arranged separately with your carrier."
    },
    {
      id: 4,
      question: "Why is there a need to submit credit card details when booking?",
      answer: "Credit card details are required to secure your booking and process payment for the VIP services. We use secure payment processing systems and your card information is protected according to industry security standards."
    },
    {
      id: 5,
      question: "Can passengers that report late for a flight, and refused by the airline, request for a refund?",
      answer: "Refund policies for passengers refused by airlines due to late arrival are subject to our terms and conditions. Generally, if the refusal is due to circumstances beyond our control, refunds may be processed according to our cancellation policy."
    },
    {
      id: 6,
      question: "Can no-show passenger request for a refund?",
      answer: "No-show passengers may be eligible for partial refunds depending on the timing of notification and our cancellation policy. Please refer to our terms and conditions or contact customer service for specific cases."
    },
    {
      id: 7,
      question: "Can passengers that advise cancellation, prior to 24 hours of the flight, opt to hold the payment with us?",
      answer: "Yes, passengers who cancel their booking more than 24 hours before their flight may be eligible to hold their payment as credit for future bookings, subject to our terms and conditions and validity periods."
    }
  ];

  const toggleExpand = (itemId) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="faq">
      <div className="container">
        <div className="faq-header">
          <h1 className="faq-title">QUESTIONS WE OFTEN GET FROM OUR CUSTOMERS</h1>
        </div>
        
        <div className="faq-list">
          {faqData.map((item) => (
            <div key={item.id} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleExpand(item.id)}
              >
                <span className="question-text">{item.question}</span>
                <div className={`expand-icon ${expandedItems.has(item.id) ? 'expanded' : ''}`}>
                  {expandedItems.has(item.id) ? '−' : '+'}
                </div>
              </div>
              {expandedItems.has(item.id) && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;