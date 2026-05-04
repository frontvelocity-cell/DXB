import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';

// Mock components to avoid complex rendering in tests
jest.mock('../src/components/Header', () => {
  return function Header() {
    return <header data-testid="header">Header</header>;
  };
});

jest.mock('../src/components/Footer', () => {
  return function Footer() {
    return <footer data-testid="footer">Footer</footer>;
  };
});

jest.mock('../src/components/Home', () => {
  return function Home() {
    return <div data-testid="home">Home Page</div>;
  };
});

jest.mock('../src/components/FAQ', () => {
  return function FAQ() {
    return <div data-testid="faq">FAQ Page</div>;
  };
});

jest.mock('../src/components/NotFound', () => {
  return function NotFound() {
    return <div data-testid="not-found">404 Not Found</div>;
  };
});

describe('App Component', () => {
  const renderWithRouter = (initialEntry = '/') => {
    return render(
      <MemoryRouter initialEntries={[initialEntry]}>
        <App />
      </MemoryRouter>
    );
  };

  test('renders header and footer', () => {
    renderWithRouter();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('renders home page on root route', () => {
    renderWithRouter('/');
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  test('renders FAQ page on /faq route', () => {
    renderWithRouter('/faq');
    expect(screen.getByTestId('faq')).toBeInTheDocument();
  });

  test('renders 404 page for unknown routes', () => {
    renderWithRouter('/unknown-route');
    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});