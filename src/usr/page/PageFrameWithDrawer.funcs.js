import get from 'lodash/get';
import set from 'lodash/set';

/**
 * This function is generated by Webcodesk. Replace this comment with a valuable description.
 *
 * @functionTypes {SetPageFrameTitleTextTypes from ./props/PageFrameWithDrawer.props.js}
 */
export const setPageFrameTitleText = ({text}, state) => dispatch => {
  if (state) {
    set(state, 'properties.properties.top.title.text', text);
    dispatch({properties: get(state, 'properties.properties')});
  }
};

/**
 * This function is generated by Webcodesk. Replace this comment with a valuable description.
 *
 * @functionTypes {ClosePageFrameDrawerTypes from ./props/PageFrameWithDrawer.props.js}
 */
export const closePageFrameDrawer = (options, {stateByDispatch}) => dispatch => {
  if (stateByDispatch) {
    const { properties } = stateByDispatch;
    const newProperties = {...properties};
    set(newProperties, 'left.drawer.open', false);
    dispatch({properties: newProperties});
  }
};

/**
 *
 * @connect properties to usr/page/PageFrameWithDrawer.comp.js
 * @connect properties1 to Component from usr/page/PageFrameWithDrawer.comp.js
 */
export const togglePageFrameDrawer = (options, {stateByDispatch}) => dispatch => {
  if (stateByDispatch) {
    const { properties } = stateByDispatch;
    const newProperties = {...properties};
    let isOpen = get(newProperties, 'left.drawer.open', false);
    set(newProperties, 'left.drawer.open', !isOpen);
    console.info('New Properties: ', newProperties);
    dispatch({properties: newProperties});
    dispatch({properties1: true});
  }
};