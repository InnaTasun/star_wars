import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../сomponents/App";

describe("App component", () => {
  test("renders with data", () => {
    render(<App />);
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getAllByRole("img").length).toBe(3);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBe(2);
    expect(screen.getByText(/created by/i)).toBeInTheDocument();
  });

  test("renders with or without className", () => {
    let container = render(<App className="main-class" />).container;
    let firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain("main-class");

    container = render(<App className="test-class" />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).toContain("test-class");

    container = render(<App />).container;
    firstDiv = container.firstElementChild;
    expect(firstDiv.className).not.toContain("main-class");
  });
});

test("App snapshot", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
