import React from "react";
import PropTypes from "prop-types";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { GlobalPropTypes } from "@common/constants";

export const PlaylistCard = React.forwardRef(
  ({ playlist, onClick, href }, ref) => (
    <a href={href}>
      <Box
        ref={ref}
        maxW="xs"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mb={10}
        minH={[240, 340, 280, 320]}
        onClick={onClick}
      >
        <Image
          src={playlist.images[0]?.url}
          alt={playlist.name}
          height={[160, 260, 200, 240]}
          width="100%"
          objectFit="cover"
        />
        <Box p={2}>
          <Heading as="h4" size={"md"} noOfLines={1}>
            {playlist.name}
          </Heading>
          <Text noOfLines={2}>{playlist.description}</Text>
        </Box>
      </Box>
    </a>
  )
);

PlaylistCard.displayName = "PlaylistCard";
PlaylistCard.propTypes = {
  playlist: GlobalPropTypes.playlist.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
};
