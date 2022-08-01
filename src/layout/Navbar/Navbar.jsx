import styled from "@emotion/styled";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { Spotify } from "@assets/icons";

export const Navbar = () => {
  return (
    <NavigationBar height={{ sm: "54px", lg: "80px" }}>
      <Container height={"100%"}>
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          height="100%"
        >
          <Spotify fill="#fff" height={{ sm: "26px", lg: "40px" }} />
          <Button size={{ sm: "sm", lg: "md" }}>Log In</Button>
        </Flex>
      </Container>
    </NavigationBar>
  );
};

const NavigationBar = styled(Box)`
  background-color: #000;
  color: #fff;
`;

NavigationBar.defaultProps = {
  as: "nav",
};
