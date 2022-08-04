import { screen, render } from "@testing-library/react";
import { PlaylistCard } from ".";

describe("PlaylistCard", () => {
  test("renders playlist correctly", () => {
    const playlist = {
      id: "1",
      name: "Playlist 1",
      images: [{ url: "https://via.placeholder.com/150" }],
      description: "Playlist 1 description",
    };

    render(<PlaylistCard playlist={playlist} />);
    const imgElements = screen.getByRole("img");
    const headingElements = screen.getByRole("heading", { level: 4 });
    const textElements = screen.getByText(playlist.description);
    expect(imgElements).toBeVisible();
    expect(headingElements).toBeVisible();
    expect(textElements).toBeVisible();
  });
});
