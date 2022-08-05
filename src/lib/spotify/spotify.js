import { getData, postData, SERVER } from "@common/server";

const CLIENT_KEYS = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");

// FIXME: This is a temporary solution and must be replaced with a proper middleware
export const refreshAccessToken = async (refresh_token) => {
  const { data, error } = await postData(
    SERVER.SPOTIFY_TOKEN,
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
    {
      headers: {
        Authorization: `Basic ${CLIENT_KEYS}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  if (error) throw error;

  return data?.access_token;
};

export const getPlaylists = async (refreshToken) => {
  if (!refreshToken) return [];
  const accessToken = await refreshAccessToken(refreshToken);
  const { data } = await getData(SERVER.SPOTIFY_PLAYLISTS + "?limit=40", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data?.items || [];
};

export const getSpecificPlaylist = async (refreshToken, playlistId) => {
  if (!refreshToken) return [];
  const accessToken = await refreshAccessToken(refreshToken);
  const { data: playlist } = await getData(
    SERVER.SPOTIFY_PLAYLIST(playlistId),
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return playlist;
};

export const getTracks = async (refreshToken, playlistId, offset = 0) => {
  if (!refreshToken) return [];
  const accessToken = await refreshAccessToken(refreshToken);
  const { data } = await getData(
    SERVER.SPOTIFY_PLAYLIST_TRACKS(playlistId) + `?offset=${offset}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data?.items || [];
};
