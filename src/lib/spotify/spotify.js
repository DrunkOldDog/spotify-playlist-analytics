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
