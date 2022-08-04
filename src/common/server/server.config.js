const SPOTIFY_API = process.env.SPOTIFY_API;
const SPOTIFY_ACCOUNTS_API = process.env.SPOTIFY_ACCOUNTS_API;

export const SERVER = {
  /* Spotify APIs */
  SPOTIFY_AUTHORIZE: `${SPOTIFY_ACCOUNTS_API}/authorize`,
  SPOTIFY_TOKEN: `${SPOTIFY_ACCOUNTS_API}/api/token`,
  SPOTIFY_PLAYLISTS: `${SPOTIFY_API}/me/playlists`,
  SPOTIFY_PLAYLIST_TRACKS: (playlistId) =>
    `${SPOTIFY_API}/playlists/${playlistId}/tracks`,
};
