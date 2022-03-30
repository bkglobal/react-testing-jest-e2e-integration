import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into title prop", async () => {
  render(<Header title="My Header"/>)
  const headerElement = await screen.findByText(/ss/i);
  // const headerElement = screen.getByRole("heading", {name: "My Header"});
  expect(headerElement).not.toBeInTheDocument();
});