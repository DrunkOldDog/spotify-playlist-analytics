import { screen, render } from "@testing-library/react";
import { PlaylistCard } from ".";

describe("PlaylistCard", () => {
  const playlist = {
    id: "1",
    name: "Playlist 1",
    images: [{ url: "https://via.placeholder.com/150" }],
    description: "Playlist 1 description",
  };

  test("renders playlist correctly", () => {
    render(<PlaylistCard playlist={playlist} />);
    const imgElement = screen.getByRole("img");
    const headingElement = screen.getByRole("heading", { level: 4 });
    const textElement = screen.getByText(playlist.description);
    expect(imgElement).toBeVisible();
    expect(headingElement).toBeVisible();
    expect(textElement).toBeVisible();
  });

  test("redirects to correspoding route when clicked", () => {
    render(
      <PlaylistCard playlist={playlist} href={"https://juanireyes.com"} />
    );
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "https://juanireyes.com");
  });
});
