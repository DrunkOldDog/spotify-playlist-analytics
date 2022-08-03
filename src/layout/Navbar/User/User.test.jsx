import { act, render, screen, waitFor } from "@testing-library/react";
import { User } from ".";
import userEvent from "@testing-library/user-event";
import { Mocks } from "@common/constants";

const onLogout = jest.fn();

describe("User nav component", () => {
  test("should render", () => {
    render(<User user={Mocks.user} onLogout={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("should open dropdown menu on click", async () => {
    render(<User user={Mocks.user} onLogout={() => {}} />);
    const userButton = screen.getByRole("button");
    userEvent.click(userButton);
    await waitFor(() => expect(screen.getByRole("menuitem")).toBeVisible());
  });

  test("should logout user on menu item click", async () => {
    await act(async () =>
      render(<User user={Mocks.user} onLogout={onLogout} />)
    );
    const userButton = screen.getByRole("button");
    userEvent.click(userButton);
    await waitFor(() => expect(screen.getByRole("menuitem")).toBeVisible());

    const logoutButton = screen.getByRole("menuitem");
    userEvent.click(logoutButton);
    await waitFor(() => expect(onLogout).toHaveBeenCalledTimes(1));
  });
});
