import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
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
  const linkElement = screen.getByText(/Duration \(minutes\):/i);
  expect(linkElement).toBeInTheDocument();
});

test("Validate adding recovery time", () => {
  render(<RecoveryTimes />);

  const startDateField = screen.getByLabelText("Start Date:");
  const startTimeField = screen.getByLabelText("Start Time:");
  const durationField = screen.getByLabelText("Duration \(minutes\):"); 

  // Add event 1
  userEvent.type(startDateField, "8/1/2021");
  userEvent.type(startTimeField, "07:01 AM");
  userEvent.type(durationField, "60");
  userEvent.click(screen.getByText("Add Recovery Time")); 
 
  // Add event 2
  userEvent.type(startDateField, "9/1/2021");
  userEvent.type(startTimeField, "08:05 AM");
  userEvent.type(durationField, "120");
  userEvent.click(screen.getByText("Add Recovery Time"));  

  expect(screen.getByText(/90.00 minutes/)).toBeVisible();
});