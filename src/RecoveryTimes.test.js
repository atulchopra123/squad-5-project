import { render, screen } from '@testing-library/react';
import RecoveryTimes from './RecoveryTimes';

test('renders RecoveryTimes', () => {
  render(<RecoveryTimes />);
  const linkElement = screen.getByText(/Recovery Times/);
  expect(linkElement).toBeInTheDocument();
});
