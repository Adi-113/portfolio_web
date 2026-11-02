import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio owner name', () => {
  render(<App />);
  expect(screen.getByText('Adithi Madduluri')).toBeInTheDocument();
});
