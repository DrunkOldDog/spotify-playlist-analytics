import { useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { Spotify } from "@assets/icons";
import { User } from "./User";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationBar height={{ sm: "54px", lg: "80px" }}>
      <Container height={"100%"}>
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          height="100%"
        >
          <Spotify fill="#fff" height={{ sm: "26px", lg: "40px" }} />
          {!isLoggedIn ? (
            <Button size={{ sm: "sm", lg: "md" }} onClick={onLogin}>
              Log In
            </Button>
          ) : (
            <User onLogout={onLogout} />
          )}
        </Flex>
      </Container>
    </NavigationBar>
  );
};

const NavigationBar = styled(Box)`
  background-color: #000;
`;

NavigationBar.defaultProps = {
  as: "nav",
};
