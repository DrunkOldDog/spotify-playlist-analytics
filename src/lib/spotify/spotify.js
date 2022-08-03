import { getData, postData, SERVER } from "@common/server";

const CLIENT_KEYS = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");

// FIXME: This is a temporary solution and haven't been tested
export const refreshAccessToken = async (refresh_token) => {
  const { data } = await postData(
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

  return data;
};

export const getPlaylists = async (accessToken) => {
  if (!accessToken) return [];
  const { data } = await getData(SERVER.SPOTIFY_PLAYLISTS, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data?.items || [];
};
