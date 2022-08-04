import { screen, render } from "@testing-library/react";
import { PlaylistsGrid } from ".";

describe("PlaylistsGrid", () => {
  test("render empty playlists message when no playlists", () => {
    render(<PlaylistsGrid playlists={[]} />);
    expect(screen.getByText("No playlists were found.")).toBeInTheDocument();
  });

  test("renders playlists correctly", () => {
    const playlists = [
      {
        id: "1",
        name: "Playlist 1",
        images: [{ url: "https://via.placeholder.com/150" }],
        description: "Playlist 1 description",
      },
      {
        id: "2",
        name: "Playlist 2",
        images: [{ url: "https://via.placeholder.com/150" }],
        description: "Playlist 2 description",
      },
    ];

    render(<PlaylistsGrid playlists={playlists} />);
    const imgElements = screen.getAllByRole("img");
    const headingElements = screen.getAllByRole("heading", { level: 4 });
    const textElements = screen.getAllByText(/Playlist \d description/);
    expect(imgElements).toHaveLength(2);
    expect(headingElements).toHaveLength(2);
    expect(textElements).toHaveLength(2);
  });
});
