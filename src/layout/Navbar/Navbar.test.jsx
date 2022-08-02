import { render, screen, waitFor } from "@testing-library/react";
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

  test("should display user avatar when login button is pressed", async () => {
    render(<Navbar />);
    const loginButton = screen.getByRole("button", { name: /log in/i });
    userEvent.click(loginButton);
    await waitFor(() =>
      expect(screen.queryByRole("button", { name: /log in/i })).toBeNull()
    );
  });
});
