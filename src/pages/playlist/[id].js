import { Box, Heading, Text } from "@chakra-ui/react";
import { playlistsState } from "@lib/recoil";
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

export default function Playlist() {
  const { query } = useRouter();
  const playlist = useRecoilValue(currentPlaylist);
  const setCurrentPlaylistId = useSetRecoilState(currentPlaylistId);

  useEffect(() => {
    if (query.id) {
      setCurrentPlaylistId(query.id);
    }
  }, []);

  return (
    <Box>
      <Heading>{playlist.name}</Heading>
      <Text>{playlist.description}</Text>
    </Box>
  );
}
