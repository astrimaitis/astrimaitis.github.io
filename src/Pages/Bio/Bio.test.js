import { render, screen } from '@testing-library/react';
import Bio from './Bio';

test('renders learn react link', () => {
  render(<Bio />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
