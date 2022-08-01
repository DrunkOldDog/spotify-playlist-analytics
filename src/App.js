import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "@layout/Navbar";
import { theme } from "@common/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <h1>Hello there xd!</h1>
    </ChakraProvider>
  );
}
