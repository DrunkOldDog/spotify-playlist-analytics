import { Container, Heading } from "@chakra-ui/react";
import { Navbar } from "@layout/Navbar";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { getPlaylists } from "@lib/spotify";
import { useMemo } from "react";
import { GlobalPropTypes } from "@common/constants";
import { PlaylistsGrid } from "@components/PlaylistsGrid";

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

        <PlaylistsGrid playlists={userPlaylists} />
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
  playlists: GlobalPropTypes.playlists,
};
