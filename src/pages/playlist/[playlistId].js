import PropTypes from "prop-types";
import { Container, Heading, Text } from "@chakra-ui/react";
import { getSpecificPlaylist } from "@lib/spotify";
import { getSession } from "next-auth/react";
import { usePlaylist } from "@hooks/usePlaylist";
import { GlobalPropTypes } from "@common/constants";
import { TracksTable } from "@components/TracksTable";

export default function Playlist({ currentPlaylist }) {
  const { tracks } = usePlaylist(currentPlaylist);

  return (
    <Container pt={8}>
      {currentPlaylist && (
        <>
          <Heading>{currentPlaylist.name}</Heading>
          <Text>{currentPlaylist.description}</Text>
        </>
      )}

      <Heading>Tracks</Heading>
      <TracksTable tracks={tracks} />
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
