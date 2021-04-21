import * as PropTypes from 'prop-types';
/**
 * Shape Objeto habitación
 */
export const roomShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
  ac: PropTypes.string.isRequired,
  parking: PropTypes.string.isRequired,
  available_from: PropTypes.string.isRequired,
  available_until: PropTypes.string.isRequired,
  wifi: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
