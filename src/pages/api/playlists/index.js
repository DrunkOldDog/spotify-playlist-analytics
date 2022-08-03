import { getSession } from "next-auth/react";
import { getPlaylists } from "@lib/spotify";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const session = await getSession({ req });
    const playlists = await getPlaylists(session.accessToken);
    res.status(200).json({ playlists });
  }
}
