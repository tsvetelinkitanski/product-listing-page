import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import HomePage from "../../Views/HomePage";

describe("HomePage component", () => {
  test("renders without errors", () => {
    render(<HomePage />);
  });
  test("displays the 'Home page' heading", () => {
    render(<HomePage />);
    const headingElement = screen.getByText(/Home page/i);
    expect(headingElement).toBeInTheDocument();
  });
  test("displays the 'Load more' button", () => {
    render(<HomePage />);
    const buttonElement = screen.getByRole("button", { name: /Load more/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("should trigger load more when button is clicked", () => {
    render(<HomePage />);
    const button = screen.getByText("Load more");
    fireEvent.click(button);
    const buttonAfterClick = screen.queryByText('Load more');
    expect (buttonAfterClick).toBeNull();

  });
});
