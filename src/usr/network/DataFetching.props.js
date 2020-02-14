import PropTypes from 'prop-types';

export const FetchTextFileByUrlInputTypes = {
  // the URL value of the source text file
  sourceUrl: PropTypes.string.isRequired,
};

export const FetchTextFileByUrlResponseTypes = {
  // The response with text
  text: PropTypes.string.isRequired,
};
