import PropTypes from "prop-types";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { GlobalPropTypes } from "@common/constants";

export const TrackCell = ({ row }) => (
  <Flex gap={2} align="center" maxW={80}>
    <Image
      src={row.original.album.images[2].url}
      alt={row.original.album.name}
      height={12}
    />
    <Box maxW={"100%"} pr={8}>
      <Text
        fontWeight={"bold"}
        fontSize="sm"
        textOverflow="ellipsis"
        overflow={"hidden"}
      >
        {row.original.name}
      </Text>
      <Text fontSize={"sm"} textOverflow="ellipsis" overflow={"hidden"}>
        {row.original.artists.map(({ name }) => name).join(", ")}
      </Text>
    </Box>
  </Flex>
);

TrackCell.propTypes = {
  row: PropTypes.shape({
    original: GlobalPropTypes.track.isRequired,
  }),
};
