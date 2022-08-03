import PropTypes from "prop-types";
import { Box, Container, Heading } from "@chakra-ui/react";
import { Navbar } from "@layout/Navbar";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { getPlaylists } from "@lib/spotify";

function Home({ playlists }) {
  const { data } = useSession();
  return (
    <>
      <Navbar user={data?.user} signIn={signIn} signOut={signOut} />
      <Container pt={10}>
        <Heading as="h1" mb={8}>
          Your playlists
        </Heading>
        {playlists.map((playlist) => (
          <Box
            key={playlist.id}
            maxW="xs"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb={10}
          >
            <img src={playlist.images[0]?.url} height={40} />
            <Heading p={2} as="h4" size={"lg"}>
              {playlist.name}
            </Heading>
          </Box>
        ))}
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const playlists = await getPlaylists(session.accessToken);
  return { props: { playlists: playlists || [] } };
}

export default Home;

Home.propTypes = {
  playlists: PropTypes.any,
};
