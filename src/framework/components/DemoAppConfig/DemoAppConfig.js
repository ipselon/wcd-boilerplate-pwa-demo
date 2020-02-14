import React from 'react';
import { get } from './appDemoRestClient';

class DemoAppConfig extends React.Component {

  componentDidMount () {
    window.addEventListener("message", this.handleReceiveMessage, false);
  }

  componentWillUnmount () {
    window.removeEventListener("message", this.handleReceiveMessage);
  }

  handleReceiveMessage(event) {
    const {data: message} = event;
    if (message) {
      const {type} = message;
      console.info('Demo App received message: ', type);
      if (type === 'getDeclarationFilesWithEtcFiles') {
        const result = {};
        get('/etcFiles.json')
          .then(data => {
            result.etcFiles = data;
            return get('/declarationFiles.json');
          })
          .then(data => {
            result.declarationFiles = data;
            window.parent.postMessage({
              type: 'declarationFilesWithEtcFiles',
              payload: result,
            }, '*');
          })
          .catch(error => {
            window.parent.postMessage({
              type: 'error',
              payload: error.message,
            }, '*');
            console.error(error);
          });
      } else if (type === 'getDeclarationFiles') {
        const result = {};
        get('/declarationFiles.json')
          .then(data => {
            result.declarationFiles = data;
            window.parent.postMessage({
              type: 'declarationFiles',
              payload: result,
            }, '*');
          })
          .catch(error => {
            window.parent.postMessage({
              type: 'error',
              payload: error.message,
            }, '*');
            console.error(error);
          });
      }
    }
  }


  render () {
    return null;
  }
}

export default DemoAppConfig;
