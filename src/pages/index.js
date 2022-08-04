import PropTypes from "prop-types";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Image,
  Text,
} from "@chakra-ui/react";
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

        <SimpleGrid columns={[2, 2, 4]} gap={4}>
          {playlists.map((playlist) => (
            <Box
              key={playlist.id}
              maxW="xs"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              mb={10}
              minH={[240, 340, 280, 320]}
            >
              <Image
                src={playlist.images[0]?.url}
                alt={playlist.name}
                height={[160, 260, 200, 240]}
                width="100%"
                objectFit="cover"
              />
              <Box p={2}>
                <Heading as="h4" size={"md"} noOfLines={1}>
                  {playlist.name}
                </Heading>
                <Text noOfLines={2}>{playlist.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
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
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      images: PropTypes.arrayOf({ url: PropTypes.string }),
    })
  ),
};
