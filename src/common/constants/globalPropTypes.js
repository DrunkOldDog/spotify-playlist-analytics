import PropTypes from "prop-types";

export const GlobalPropTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }),
};
