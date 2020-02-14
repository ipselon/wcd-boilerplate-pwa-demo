import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from './store/store';
import { clearActionsCache } from './store/actions';
import { createActionSequences } from './store/sequences';
import { createInitialState } from './store/state';
import { getSchema, getSettings, saveSchema, saveSettings } from './store/storage';

import PageRouter from './components/PageRouter';
import StartWrapper from './components/StartWrapper';
import WarningComponent from './components/WarningComponent';
import DemoAppConfig from './components/DemoAppConfig';

const constants = require('./commons/constants');
const ComponentComposer = require('./components/ComponentComposer/ComponentComposer').default;
const PageComposer = require('./components/PageComposer/PageComposer').default;

const initStore = (pages, name, version) => {
  const initialState = createInitialState(pages);
  const history = createBrowserHistory();
  const store = configureStore(initialState, { history }, { name, version });

  window.__sendFrameworkMessage = (message) => {
    if (message) {
      window.parent.postMessage(message, '*');
    }
  };
  // Listen for changes to the current location.
  history.listen((location) => {
    // location is an object like window.location
    window.__sendFrameworkMessage({
      type: constants.FRAMEWORK_MESSAGE_CHANGE_URL,
      payload: `${location.pathname}${location.search}${location.hash}`,
    });
  });

  return {store, history};
};

export function getDemoFiles({schema, settings}) {
  const newFiles = {schema, settings};
  return getSchema()
    .then(schemaFromStorage => {
      if (schemaFromStorage) {
        newFiles.schema = schemaFromStorage;
      }
      return getSettings();
    })
    .then(settingsFromStorage => {
      if (settingsFromStorage) {
        newFiles.settings = settingsFromStorage;
      }
      return newFiles;
    })
    .catch((error) => {
      console.error(error.message);
      return newFiles;
    });
}

class Application extends React.Component {

  componentDidMount () {
    window.addEventListener("message", this.handleReceiveMessage, false);
  }

  componentWillUnmount () {
    window.removeEventListener("message", this.handleReceiveMessage);
  }

  handleReceiveMessage = (event) => {
      const {data: message} = event;
      if (message) {
        const { type, payload } = message;
        if (type === constants.WEBCODESK_MESSAGE_START_LISTENING_TO_FRAMEWORK) {
          window.__webcodeskIsListeningToFramework = true;
          setTimeout(() => {
            window.__sendFrameworkMessage({
              type: constants.FRAMEWORK_MESSAGE_INIT_DEBUG,
              payload: {
                actionSequences: this.actionSequences
              },
            });
          }, 0);
        } else if (type === constants.WEBCODESK_MESSAGE_STOP_LISTENING_TO_FRAMEWORK) {
          window.__webcodeskIsListeningToFramework = false;
        } else if (type === constants.WEBCODESK_MESSAGE_SAVE_DEMO_FILES && payload) {
          const {schema, settings} = payload;
          saveSchema(schema)
            .then(() => {
              return saveSettings(settings);
            })
            .then(() => {
              window.__sendFrameworkMessage({
                type: constants.FRAMEWORK_MESSAGE_DEMO_FILES_SAVED,
              });
            })
            .catch((error) => {
              console.error(error.message);
              window.__sendFrameworkMessage({
                type: constants.FRAMEWORK_MESSAGE_DEMO_FILES_SAVED,
              });
            });
        }
      }
  };

  render () {
    const { userComponents } = this.props;
    const href = window.location.href;
    if (href.indexOf('/webcodesk__component_view') > 0) {
      return (
        <ComponentComposer userComponents={userComponents} />
      );
    } else if(href.indexOf('/webcodesk__page_composer') > 0) {
      return (
        <PageComposer userComponents={userComponents} />
      )
    } else if(href.indexOf('/webcodesk__demo_app_config') > 0) {
      return (
        <DemoAppConfig />
      )
    }
    const { schema, userFunctions, name, version } = this.props;
    let routes, pages, flows;
    if (schema) {
      routes = schema.routes;
      pages = schema.pages;
      flows = schema.flows;
    }
    const { store, history } = initStore(pages, name, version);
    if (!store) {
      return (
        <WarningComponent message="Redux store is not initialized." />
      );
    }
    window.__applicationBrowserHistory = history;
    clearActionsCache();
    const actionSequences = createActionSequences(flows, userFunctions);
    // store action sequences and components properties in case we have to send them for debug
    this.actionSequences = actionSequences;
    console.info('Render App with pages: ', pages);
    return (
      <Provider store={store}>
        <StartWrapper
          actionSequences={actionSequences}
          store={store}
        >
          <PageRouter
            history={history}
            routes={routes}
            pages={pages}
            userComponents={userComponents}
            actionSequences={actionSequences}
          />
        </StartWrapper>
      </Provider>
    );
  }
}

export default Application;