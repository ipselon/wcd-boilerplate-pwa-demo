// @functionTypes {GoToAppPageByUrlOptionsTypes from ./props/PageNavigation.props.js}
export const goToAppPageByUrl = options => dispatch => {
  // do something here with options;
  if (options) {
    const { url } = options;
    if (url && window.__applicationBrowserHistory) {
      window.__applicationBrowserHistory.push(url);
    } else {
      alert ('No URL');
    }
  } else {
    alert ('No options are passed in');
  }
};
