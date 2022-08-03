/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SPOTIFY_ACCOUNTS_API: "https://accounts.spotify.com",
    SPOTIFY_API: "https://api.spotify.com/v1",
  },
};

module.exports = nextConfig;
