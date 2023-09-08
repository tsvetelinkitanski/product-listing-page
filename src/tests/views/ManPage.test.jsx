import React from "react";
import { render, screen } from "@testing-library/react";
import ManPage from "../../Views/ManPage";

describe("HomePage component", () => {
  test("renders without errors", () => {
    render(<ManPage />);
  });
  test("displays the 'Home page' heading", () => {
    render(<ManPage />);
    const headingElement = screen.getByText(/Men's clothing collection/i);
    expect(headingElement).toBeInTheDocument();
  });
});
