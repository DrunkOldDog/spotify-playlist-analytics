import PropTypes from "prop-types";
import { Badge, Tooltip } from "@chakra-ui/react";
import { GlobalPropTypes } from "@common/constants";

export const PopularityCell = ({ row }) => {
  const { colorScheme, title } = getPopularityStatus(
    row.original.popularity,
    row.original.album.release_date
  );
  return (
    <Tooltip label={title}>
      <Badge colorScheme={colorScheme}>{row.original.popularity}</Badge>
    </Tooltip>
  );
};

PopularityCell.propTypes = {
  row: PropTypes.shape({
    original: GlobalPropTypes.track.isRequired,
  }),
};

const getPopularityStatus = (popularity, releaseDate) => {
  releaseDate = new Date(releaseDate);
  const currentDate = new Date();
  const diff = currentDate - releaseDate;
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  if (diffDays < 7) {
    return {
      colorScheme: "purple",
      title: "New release",
    };
  } else if (popularity < 50) {
    return { colorScheme: "red", title: "Not really popular" };
  } else if (popularity < 75) {
    return {
      colorScheme: "yellow",
      title: "Popular song, you may listen it in the clubs",
    };
  } else {
    return { colorScheme: "green", title: "This is totally a hit!" };
  }
};
