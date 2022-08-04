import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import { theme } from "@common/theme";
import PropTypes from "prop-types";
import { RecoilRoot } from "recoil";
import { Navbar } from "@layout/Navbar";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <RecoilRoot>
          <NavContainer />
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </ChakraProvider>
  );
}

function NavContainer() {
  const { data: session } = useSession();
  return <Navbar user={session?.user} signIn={signIn} signOut={signOut} />;
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
