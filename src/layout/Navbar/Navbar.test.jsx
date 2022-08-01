import { render, screen } from "@testing-library/react";
import { Navbar } from ".";

describe("Navbar component", () => {
  test("should render", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("should contain a logo", () => {
    render(<Navbar />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("should contain a login button", () => {
    render(<Navbar />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
