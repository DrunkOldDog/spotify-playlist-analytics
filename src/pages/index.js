import PropTypes from "prop-types";
import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useSession, getSession } from "next-auth/react";
import { getPlaylists } from "@lib/spotify";
import { useEffect, useMemo } from "react";
import { GlobalPropTypes } from "@common/constants";
import { PlaylistCard } from "@components/PlaylistCard";
import { useRecoilState } from "recoil";
import { playlistsState } from "@lib/recoil";
import Link from "next/link";
import Head from "next/head";

function Home({ playlists: initialPlaylists }) {
  const { data } = useSession();
  const [playlists, setPlaylists] = useRecoilState(playlistsState);

  useEffect(() => {
    if (initialPlaylists.length) {
      setPlaylists(initialPlaylists);
    }
  }, [initialPlaylists]);

  const userPlaylists = useMemo(() => {
    if (!data?.user) return playlists;
    return playlists.filter((playlist) => playlist.owner.id === data.user.id);
  }, [playlists, data]);

  return (
    <Container pt={8}>
      <Head>
        <title>Spotify Analytics</title>
      </Head>

      <Heading as="h1" mb={8}>
        Your playlists
      </Heading>

      {userPlaylists.length ? (
        <SimpleGrid columns={[2, 2, 4]} gap={4}>
          {userPlaylists.map((playlist) => (
            <Link key={playlist.id} href={`/playlist/${playlist.id}`} passHref>
              <PlaylistCard playlist={playlist} />
            </Link>
          ))}
        </SimpleGrid>
      ) : (
        <Text>No playlists were found.</Text>
      )}
    </Container>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const playlists = await getPlaylists(session?.refreshToken);
  return { props: { playlists: playlists || [] } };
}

export default Home;

Home.propTypes = {
  playlists: PropTypes.arrayOf(GlobalPropTypes.playlist),
};
