import cloneDeep from 'lodash/cloneDeep';
import { createStore } from 'redux';

const initialState = {};
const stateChangeCounters = {};
let store;

function reducer(state = initialState, action) {
  const {type: stateKey, data} = action;
  if (stateKey) {
    stateChangeCounters[stateKey] = stateChangeCounters[stateKey] > 0
      ? stateChangeCounters[stateKey] + 1
      : 1;
    return { ...state, ...{ [stateKey]: { ...state[stateKey], ...data } } };
  }
  return state;
}

function getStore() {
  if (!store) {
    store = createStore(reducer);
  }
  return store;
}

/**
 * Stores the value to global state under some key
 *
 * @functionTypes {PutIntoStateTypes from ./StateOperations.props}
 */
export const putIntoState = ({key, value}) => dispatch => {
  getStore().dispatch({type: key, data: value});
};

/**
 * Adds the listener for some key in the global state
 * @functionTypes {AddStateListenerTypes from ./StateOperations.props}
 */
export const addStateListener = ({key}) => dispatch => {
  let listenerChangeCounter = 0;
  getStore().subscribe(() => {
    const stateChangeCounter = stateChangeCounters[key];
    if (stateChangeCounter > listenerChangeCounter) {
      const newState = getStore().getState();
      dispatch({value: newState[key]});
    }
  });
};

/**
 * Gets the list of the values under specified keys from the global state.
 *
 * @functionTypes {GetFromStateTypes from ./StateOperations.props}
 */
export const getFromState = ({keys}) => dispatch => {
  const newState = getStore().getState();
  const data = {};
  if (keys && keys.length > 0) {
    keys.forEach(key => {
      data[key] = cloneDeep(newState[key]);
    });
  }
  dispatch({valueMap: data});
};
