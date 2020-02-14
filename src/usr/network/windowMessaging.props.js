import PropTypes from 'prop-types';

export const PostMessageOptionsTypes = {
  // type of the message
  type: PropTypes.string.isRequired,
  // payload of the message
  payload: PropTypes.object,
  // origin
  targetOrigin: PropTypes.string,
};

// export const SampleFunctionDispatchTypes = {
//   // text value
//   text: PropTypes.string,
//   // extra options after some processing
//   extraOptions: PropTypes.shape({
//     extraFlag: PropTypes.bool
//   })
// };
