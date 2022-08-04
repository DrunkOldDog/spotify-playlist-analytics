import PropTypes from "prop-types";
import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Navbar } from "@layout/Navbar";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { getPlaylists } from "@lib/spotify";
import { useMemo } from "react";
import { GlobalPropTypes } from "@common/constants";
import { PlaylistCard } from "@components/PlaylistCard";

function Home({ playlists }) {
  const { data } = useSession();

  const userPlaylists = useMemo(() => {
    if (!data?.user) return playlists;
    return playlists.filter((playlist) => playlist.owner.id === data.user.id);
  }, [playlists, data]);

  return (
    <>
      <Navbar user={data?.user} signIn={signIn} signOut={signOut} />
      <Container pt={10}>
        <Heading as="h1" mb={8}>
          Your playlists
        </Heading>

        {userPlaylists.length ? (
          <SimpleGrid columns={[2, 2, 4]} gap={4}>
            {userPlaylists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </SimpleGrid>
        ) : (
          <Text>No playlists were found.</Text>
        )}
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const playlists = await getPlaylists(session?.accessToken);
  return { props: { playlists: playlists || [] } };
}

export default Home;

Home.propTypes = {
  playlists: PropTypes.arrayOf(GlobalPropTypes.playlist),
};
