import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("should display user avatar when login button is pressed", () => {
    render(<Navbar />);
    const loginButton = screen.getByRole("button");
    userEvent.click(loginButton);
    expect(screen.getByRole("button")).toBeEmptyDOMElement();
  });
});
