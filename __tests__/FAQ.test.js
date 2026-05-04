import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from '../src/components/FAQ';

describe('FAQ Component', () => {
  test('renders FAQ title', () => {
    render(<FAQ />);
    expect(screen.getByText('QUESTIONS WE OFTEN GET FROM OUR CUSTOMERS')).toBeInTheDocument();
  });

  test('renders all FAQ questions', () => {
    render(<FAQ />);
    
    expect(screen.getByText(/Does making a booking with Al Majlis guarantee/)).toBeInTheDocument();
    expect(screen.getByText(/Why is there a need for the passenger to pre-register/)).toBeInTheDocument();
    expect(screen.getByText(/Does booking Al Majlis service entitle the passenger to airline benefits/)).toBeInTheDocument();
    expect(screen.getByText(/Why is there a need to submit credit card details/)).toBeInTheDocument();
    expect(screen.getByText(/Can passengers that report late for a flight/)).toBeInTheDocument();
    expect(screen.getByText(/Can no-show passenger request for a refund/)).toBeInTheDocument();
    expect(screen.getByText(/Can passengers that advise cancellation/)).toBeInTheDocument();
  });

  test('expands and collapses FAQ items when clicked', () => {
    render(<FAQ />);
    
    // Initially, answers should not be visible
    expect(screen.queryByText(/Yes, once your booking is confirmed/)).not.toBeInTheDocument();
    
    // Click on the first question
    const firstQuestion = screen.getByText(/Does making a booking with Al Majlis guarantee/);
    fireEvent.click(firstQuestion);
    
    // Answer should now be visible
    expect(screen.getByText(/Yes, once your booking is confirmed/)).toBeInTheDocument();
    
    // Click again to collapse
    fireEvent.click(firstQuestion);
    
    // Answer should be hidden again
    expect(screen.queryByText(/Yes, once your booking is confirmed/)).not.toBeInTheDocument();
  });

  test('expand icons change when FAQ items are toggled', () => {
    render(<FAQ />);
    
    const expandIcons = screen.getAllByText('+');
    expect(expandIcons).toHaveLength(7); // All FAQ items should show '+' initially
    
    // Click on the first question
    const firstQuestion = screen.getByText(/Does making a booking with Al Majlis guarantee/);
    fireEvent.click(firstQuestion);
    
    // Should now have one '−' and six '+' icons
    expect(screen.getAllByText('+')).toHaveLength(6);
    expect(screen.getAllByText('−')).toHaveLength(1);
  });
});