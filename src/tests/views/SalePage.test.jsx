import React from "react";
import { render, screen } from "@testing-library/react";
import SalePage from "../../Views/SalePage";

describe("SalePage component", () => {
  test("renders without errors", () => {
    render(<SalePage />);
  });
  test("displays the 'Sale page' heading", () => {
    render(<SalePage />);
    const headingElement = screen.getByText(/Sale clothing/i);
    expect(headingElement).toBeInTheDocument();
  });
});
