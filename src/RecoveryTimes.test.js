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

test("Validate adding multiple recovery time", () => {
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

test('pass invalid duration value of "A" entered into input field', () => {
  render(<RecoveryTimes />);

  const durationField = screen.getByLabelText("Duration \(minutes\):"); 
  userEvent.type(durationField, "A");
  expect(durationField.value).toBe('');
});

test('pass invalid duration value of "123456" entered into input field', () => {
  render(<RecoveryTimes />);

  const durationField = screen.getByLabelText("Duration \(minutes\):"); 
  userEvent.type(durationField, "123456");

  // Clicking button should reset value of Duration field to ""
  userEvent.click(screen.getByText("Add Recovery Time"));  
  expect(durationField.value).toBe('');
});

/*test('pass invalid duration value of "123456" entered into input field', () => {
  render(<RecoveryTimes />);

  const startDateField = screen.getByLabelText("Start Date:");
  const startTimeField = screen.getByLabelText("Start Time:");
  const durationField = screen.getByLabelText("Duration \(minutes\):"); 

  userEvent.type(startDateField, "8/1/2021");
  userEvent.type(startTimeField, "07:01 AM");
  userEvent.type(durationField, "123456");

  // Clicking button should display error message
  userEvent.click(screen.getByText("Add Recovery Time"));  
  expect(screen.getByText(/1440/i)).toBeVisible();
}); */
