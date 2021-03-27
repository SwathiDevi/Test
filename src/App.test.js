import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nav link', () => {
  render(<App />);
  const linkElement1 = screen.getByText('Form');
  const linkElement2 = screen.getByText('WeatherApp');
  expect(linkElement1).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
