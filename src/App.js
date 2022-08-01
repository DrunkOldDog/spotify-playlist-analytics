import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "@layout/Navbar";

export default function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <h1>Hello there xd!</h1>
    </ChakraProvider>
  );
}
