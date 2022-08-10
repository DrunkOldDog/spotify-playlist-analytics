import PropTypes from "prop-types";

export const GlobalPropTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }),
  playlist: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.shape({ url: PropTypes.string })),
    public: PropTypes.bool,
    followers: PropTypes.shape({
      total: PropTypes.number,
    }),
    tracks: PropTypes.shape({
      total: PropTypes.number,
    }),
  }),
  track: PropTypes.shape({
    name: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    album: PropTypes.shape({
      images: PropTypes.arrayOf(PropTypes.shape({ url: PropTypes.string })),
      name: PropTypes.string,
      release_date: PropTypes.string,
    }),
    artists: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  }),
};
