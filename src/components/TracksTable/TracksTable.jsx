import PropTypes from "prop-types";
import {
  Box,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { GlobalPropTypes } from "@common/constants";

export const TracksTable = ({ tracks }) => {
  return (
    <TableContainer>
      <Table variant={"simple"}>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Title</Th>
            <Th>Album</Th>
            <Th>Popularity</Th>
            <Th>Release Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tracks.map(({ track }, trackIndex) => (
            <Tr key={`${track.name}_${trackIndex}`}>
              <Td>{++trackIndex}</Td>
              <Td maxW={80}>
                <Flex gap={2} align="center">
                  <Image
                    src={track.album.images[2].url}
                    alt={track.album.name}
                    height={12}
                  />
                  <Box>
                    <Text fontWeight={"bold"} fontSize="sm">
                      {track.name}
                    </Text>
                    <Text fontSize={"sm"}>
                      {track.artists.map(({ name }) => name).join(", ")}
                    </Text>
                  </Box>
                </Flex>
              </Td>
              <Td maxW={80}>
                <Text fontSize={"sm"}>{track.album.name}</Text>
              </Td>
              <Td>{track.popularity}</Td>
              <Td>{track.album.release_date}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

TracksTable.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({ track: GlobalPropTypes.track }))
    .isRequired,
};
