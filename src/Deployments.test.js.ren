import { render, screen } from "@testing-library/react";
import Deployments from "./Deployments";
import userEvent from "@testing-library/user-event";

test("allows users to add deployments", () => {
  render(<Deployments />);
  const dateField = screen.getByLabelText("Deployment Date");
  const timeField = screen.getByLabelText("Deployment Time");
  userEvent.type(dateField, "2021-06-29");
  userEvent.type(timeField, "02:12 AM");
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(/6\/29\/2021/)).toBeVisible();
  expect(screen.getByText('2:12:00 AM')).toBeVisible();
});
