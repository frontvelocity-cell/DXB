import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../src/components/Header';

const renderWithRouter = (initialEntry = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <Header />
    </MemoryRouter>
  );
};

describe('Header Component', () => {
  test('renders logo and navigation links', () => {
    renderWithRouter();
    
    expect(screen.getByText('DXB VIP LOUNGE SERVICE')).toBeInTheDocument();
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('PACKAGES')).toBeInTheDocument();
    expect(screen.getByText('PARTNERS')).toBeInTheDocument();
    expect(screen.getByText('FAQS')).toBeInTheDocument();
    expect(screen.getByText('CONTACT')).toBeInTheDocument();
    expect(screen.getByText('العربية')).toBeInTheDocument();
    expect(screen.getByText('BOOK NOW')).toBeInTheDocument();
  });

  test('highlights active navigation link', () => {
    renderWithRouter('/faq');
    
    const faqLink = screen.getByText('FAQS');
    expect(faqLink).toHaveClass('active');
  });

  test('all navigation links have correct href attributes', () => {
    renderWithRouter();
    
    expect(screen.getByText('HOME').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('PACKAGES').closest('a')).toHaveAttribute('href', '/packages');
    expect(screen.getByText('PARTNERS').closest('a')).toHaveAttribute('href', '/partners');
    expect(screen.getByText('FAQS').closest('a')).toHaveAttribute('href', '/faq');
    expect(screen.getByText('CONTACT').closest('a')).toHaveAttribute('href', '/contact');
  });
});