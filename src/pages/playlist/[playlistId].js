import PropTypes from "prop-types";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
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

  console.log(tracks);

  return (
    <Container pt={8}>
      <Heading>{playlist.name}</Heading>
      <Text>{playlist.description}</Text>

      <Heading>Tracks</Heading>
      <TableContainer>
        <Table variant={"simple"}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Album</Th>
              <Th>Popularity</Th>
              <Th>Release Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tracks.map(({ track }, trackIndex) => (
              <Tr key={track.name}>
                <Td>{++trackIndex}</Td>
                <Td maxW={80}>
                  <Flex gap={2} align="center">
                    <Image
                      src={track.album.images[2].url}
                      alt={track.album.name}
                      height={12}
                    />
                    <Box>
                      <Text fontWeight={"bold"} fontSize="sm">
                        {track.name}
                      </Text>
                      <Text fontSize={"sm"}>
                        {track.artists.map(({ name }) => name).join(", ")}
                      </Text>
                    </Box>
                  </Flex>
                </Td>
                <Td maxW={80}>
                  <Text fontSize={"sm"}>{track.album.name}</Text>
                </Td>
                <Td>{track.popularity}</Td>
                <Td>{track.album.release_date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
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
