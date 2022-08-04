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
  }),
};
