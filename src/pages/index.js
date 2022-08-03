import { Container, Heading } from "@chakra-ui/react";
import { Navbar } from "@layout/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";

function Home() {
  const { data } = useSession();
  return (
    <>
      <Navbar user={data?.user} signIn={signIn} signOut={signOut} />
      <Container pt={10}>
        <Heading as="h1">Guacho se viene con todo pa&apos;s</Heading>
      </Container>
    </>
  );
}

export default Home;
