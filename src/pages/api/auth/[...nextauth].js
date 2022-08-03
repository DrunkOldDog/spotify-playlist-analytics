import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const SPOTIFY_PROVIDER_SCOPES = [
  "user-read-email",
  "playlist-read-private",
  "playlist-modify-private",
];

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      authorization: `${
        process.env.SPOTIFY_ACCOUNTS_API
      }/authorize?scope=${SPOTIFY_PROVIDER_SCOPES.join(",")}`,
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) token.id = user.id;
      if (account) token.accessToken = account.access_token;
      return token;
    },
  },
});
