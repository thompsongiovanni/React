import { render, screen } from '@testing-library/react';
import App from './App';

test('loading home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/My First React App/i);
  expect(linkElement).toBeInTheDocument();
});
