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
    <Box>
      <Text fontWeight={"bold"} fontSize="sm">
        {row.original.name}
      </Text>
      <Text fontSize={"sm"}>
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
