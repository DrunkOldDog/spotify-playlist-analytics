import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "@layout/Navbar";
import { theme } from "@common/theme";
import PropTypes from "prop-types";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
