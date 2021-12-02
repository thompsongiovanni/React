import { render, screen } from '@testing-library/react';
import Cards from './Cards';

test('Card Loads', () => {
  render(<Cards />);
  const linkElement = screen.getByText(/My Card/i);
  expect(linkElement).toBeInTheDocument();
});

test('Card Loads fade one true', () => {
    render(<Cards fade1={true}/>);
    const linkElement = screen.getByText(/1/i);
    expect(linkElement).toBeInTheDocument();
  });

test('Card Loads fade two true', () => {
    render(<Cards fade2={true}/>);
    const linkElement = screen.getByText(/2/i);
    expect(linkElement).toBeInTheDocument();
  });
