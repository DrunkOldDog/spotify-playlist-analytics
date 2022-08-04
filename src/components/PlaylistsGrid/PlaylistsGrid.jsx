import { Box, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";
import { GlobalPropTypes } from "@common/constants";

export const PlaylistsGrid = ({ playlists }) => {
  if (!playlists.length) {
    return <Text>No playlists were found.</Text>;
  }

  return (
    <SimpleGrid columns={[2, 2, 4]} gap={4}>
      {playlists.map((playlist) => (
        <Box
          key={playlist.id}
          maxW="xs"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mb={10}
          minH={[240, 340, 280, 320]}
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
      ))}
    </SimpleGrid>
  );
};

PlaylistsGrid.propTypes = {
  playlists: GlobalPropTypes.playlists.isRequired,
};
