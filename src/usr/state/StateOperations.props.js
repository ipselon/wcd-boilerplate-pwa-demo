import PropTypes from 'prop-types';

export const PutIntoStateTypes = {
  argument: PropTypes.shape({
    // The key under which a new data will be put into the state storage
    key: PropTypes.string.isRequired,
    // The value to store
    value: PropTypes.any,
  }),
};

export const AddStateListenerTypes = {
  argument: PropTypes.shape({
    // The key under which the data is changed in the state storage
    key: PropTypes.string.isRequired,
  }),
  dispatch: PropTypes.shape({
    /**
     * Returns a value from the global storage when the value is changed elsewhere
     */
    value: PropTypes.any,
  }),
};

export const GetFromStateTypes = {
  argument: PropTypes.shape({
    // An array of keys that should be retrieved from the global state.
    keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  dispatch: PropTypes.shape({
    /**
     * The object with keays and values from the global state: {key1: value1, key2: value2}
     */
    valueMap: PropTypes.object,
  }),
};
