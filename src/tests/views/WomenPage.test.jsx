import React from "react";
import { render, screen } from "@testing-library/react";
import WomanPAge from "../../Views/WomanPAge";

describe("WomenPage component", () => {
  test("renders without errors", () => {
    render(<WomanPAge />);
  });
  test("displays the 'WomenPage page' heading", () => {
    render(<WomanPAge />);
    const headingElement = screen.getByText(/Women's clothing collection/i);
    expect(headingElement).toBeInTheDocument();
  });
});
