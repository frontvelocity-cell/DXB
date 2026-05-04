import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

describe('Footer Component', () => {
  test('renders footer links', () => {
    render(<Footer />);
    
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  test('footer links have correct href attributes', () => {
    render(<Footer />);
    
    expect(screen.getByText('Terms & Conditions').closest('a')).toHaveAttribute('href', '/terms');
    expect(screen.getByText('Privacy Policy').closest('a')).toHaveAttribute('href', '/privacy');
  });

  test('renders social media icons', () => {
    render(<Footer />);
    
    const instagramLink = screen.getByLabelText('Instagram');
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute('href', '#');
  });
});