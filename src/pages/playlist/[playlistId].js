import PropTypes from "prop-types";
import { Container, Heading, Text } from "@chakra-ui/react";
import { playlistsState } from "@lib/recoil";
import { getTracks } from "@lib/spotify";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const currentPlaylistId = atom({
  key: "currentPlaylistId",
  default: null,
});

const currentPlaylist = selector({
  key: "currentPlaylist",
  get: ({ get }) => {
    return get(playlistsState)[get(currentPlaylistId)] || {};
  },
});

export default function Playlist({ tracks }) {
  const { query } = useRouter();
  const playlist = useRecoilValue(currentPlaylist);
  const setCurrentPlaylistId = useSetRecoilState(currentPlaylistId);

  useEffect(() => {
    if (query.playlistId) {
      setCurrentPlaylistId(query.playlistId);
    }
  }, []);

  return (
    <Container pt={8}>
      <Heading>{playlist.name}</Heading>
      <Text>{playlist.description}</Text>

      <Heading>Tracks</Heading>
      <ul>
        {tracks.map(({ track }) => (
          <li key={track.name}>
            {track.name} - {track.artists.map(({ name }) => name).join(", ")}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { playlistId } = context.query;
  const session = await getSession({ req: context.req });
  const tracks = await getTracks(session?.refreshToken, playlistId);
  return { props: { tracks } };
}

Playlist.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
};
