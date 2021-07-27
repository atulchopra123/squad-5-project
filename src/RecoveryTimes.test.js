import { render, screen } from '@testing-library/react';
import RecoveryTimes from './RecoveryTimes';

test('renders RecoveryTimes', () => {
  render(<RecoveryTimes />);
  const linkElement = screen.getByText(/Recovery Times/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Start Time Input', () => {
  render(<RecoveryTimes />);
  const linkElement = screen.getByText(/Start Time:/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Start Date Input', () => {
  render(<RecoveryTimes />);
  const linkElement = screen.getByText(/Start Date:/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Duration Input', () => {
  render(<RecoveryTimes />);
  const linkElement = screen.getByText(/Duration:/i);
  expect(linkElement).toBeInTheDocument();
});
