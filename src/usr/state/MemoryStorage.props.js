import PropTypes from 'prop-types';

export const MemoryTypes = {
  var1: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    isTested: PropTypes.bool,
  }),
};

export const InMemoryTypes = {
  argument: PropTypes.object,
  dispatch: PropTypes.shape({
    storage: PropTypes.object,
  }),
};

export const GetFromMemoryTypes = {
  dispatch: PropTypes.shape({
    storage: PropTypes.object,
  }),
};
