import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Mocks } from "@common/constants";
import { Navbar } from ".";

const signIn = jest.fn();

describe("Navbar component", () => {
  test("should render", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("should contain a logo", () => {
    render(<Navbar />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("should call signIn method on button click", async () => {
    render(<Navbar signIn={signIn} />);
    const loginButton = screen.getByRole("button", { name: /log in/i });
    userEvent.click(loginButton);
    await waitFor(() => expect(signIn).toBeCalledTimes(1));
  });

  test("should not display sign in button when user is logged in", () => {
    render(<Navbar user={Mocks.user} />);
    const loginButton = screen.queryByRole("button", { name: /log in/i });
    expect(loginButton).toBeNull();
  });
});
