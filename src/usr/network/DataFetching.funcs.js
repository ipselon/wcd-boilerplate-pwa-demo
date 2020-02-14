/**
 * My Function Test
 */
// @param {FetchTextFileByUrlInputTypes from ./DataFetching.props.js}
export const fetchTextFileByUrl = options => dispatch => {
  console.info('fetchTextFileByUrl: ', options);
  if (options) {
    const { sourceUrl } = options;
    fetch(sourceUrl)
      .then(response => {
        return response.text();
      })
      .then(text => {
        console.info('fetchTextFileByUrl: ', text);
        dispatch('response', {text});
      })
      .catch(error => {
        console.error('Error loading markdown text from ', sourceUrl);
        console.error(error);
      });
  }
};
