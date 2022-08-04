import PropTypes from "prop-types";
import {
  Avatar,
  Hide,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { CaretDown } from "@assets/icons";
import styled from "@emotion/styled";
import { GlobalPropTypes } from "@common/constants";

export const User = ({ user, onLogout }) => (
  <Menu>
    <StyledMenuButton>
      <Wrap align={"center"}>
        <WrapItem>
          <Avatar
            name={user.name}
            src={user.image}
            size={{ base: "sm", lg: "md" }}
          />
        </WrapItem>
        <Hide below="lg">
          <WrapItem>
            <Text fontWeight={"bold"} transition="200ms">
              Profile
            </Text>
          </WrapItem>
        </Hide>

        <WrapItem>
          <CaretDown mt={0.5} fill="#fff" />
        </WrapItem>
      </Wrap>
    </StyledMenuButton>
    <MenuList>
      <MenuItem onClick={onLogout} fontWeight="bold">
        Logout
      </MenuItem>
    </MenuList>
  </Menu>
);

const StyledMenuButton = styled(MenuButton)`
  color: #fff;
  svg {
    transition: fill 300ms var(--chakra-transition-easing-ease-in);
  }

  &:hover {
    color: #1ed760;

    svg {
      fill: #1ed760;
    }
  }
`;

User.propTypes = {
  user: GlobalPropTypes.user.isRequired,
  onLogout: PropTypes.func,
};
