import { getTracks } from "@lib/spotify";
import { getSession } from "next-auth/react";

export default async function (req, res) {
  const session = await getSession({ req });
  const { playlistId, offset } = req.query;
  const playlists = await getTracks(session?.refreshToken, playlistId, offset);
  res.status(200).json(playlists || []);
}
