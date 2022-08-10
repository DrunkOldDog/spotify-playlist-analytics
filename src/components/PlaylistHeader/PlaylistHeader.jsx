import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { GlobalPropTypes } from "@common/constants";

export const PlaylistHeader = ({ playlist }) => {
  return (
    <Flex align="center" gap={4} mb={4}>
      <Image src={playlist.images[0].url} height={[40, 48, 56, 56]} />
      <Box>
        <Text
          textTransform={"uppercase"}
          fontWeight="bold"
          fontSize={"xs"}
          color="gray.600"
        >
          {playlist.public ? "Public" : "Private"} Playlist
        </Text>
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          mb={{ base: 0, md: 2 }}
        >
          {playlist.name}
        </Heading>
        <Text mb={1} color="gray.500" fontSize={{ base: "sm", sm: "md" }}>
          {playlist.description}
        </Text>
        <Text fontSize={"sm"}>
          {playlist.followers.total} followers • {playlist.tracks.total} tracks
        </Text>
      </Box>
    </Flex>
  );
};

PlaylistHeader.propTypes = {
  playlist: GlobalPropTypes.playlist.isRequired,
};
