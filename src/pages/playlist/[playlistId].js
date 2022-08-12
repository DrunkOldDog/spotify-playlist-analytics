import PropTypes from "prop-types";
import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { getSpecificPlaylist } from "@lib/spotify";
import { getSession } from "next-auth/react";
import { usePlaylist } from "@hooks/usePlaylist";
import { GlobalPropTypes } from "@common/constants";
import { TracksTable } from "@components/TracksTable";
import { PlaylistHeader } from "@components/PlaylistHeader";
import { Search } from "@assets/icons";
import { useDeferredValue, useState } from "react";
import Head from "next/head";

export default function Playlist({ currentPlaylist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const { filteredTracks } = usePlaylist(currentPlaylist, deferredSearchTerm);

  return (
    <Container pt={8}>
      <Head>
        <title>{currentPlaylist.name} Analytics</title>
      </Head>

      {currentPlaylist && <PlaylistHeader playlist={currentPlaylist} />}

      <Flex justify={"space-between"} align="center">
        <Heading>Tracks</Heading>
        <InputGroup maxW={56}>
          <InputLeftElement pointerEvents={"none"}>
            <Search />
          </InputLeftElement>
          <Input
            placeholder="Search track name in the playlist"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </Flex>

      <Box maxH={560} overflowY="auto" my={8}>
        <TracksTable tracks={filteredTracks} />
      </Box>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { playlistId } = context.query;
  const session = await getSession({ req: context.req });
  const currentPlaylist = await getSpecificPlaylist(
    session?.refreshToken,
    playlistId
  );
  return { props: { currentPlaylist } };
}

Playlist.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object),
  currentPlaylist: GlobalPropTypes.playlist,
};
