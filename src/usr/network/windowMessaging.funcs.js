// @param {PostMessageOptionsTypes from ./windowMessaging.props.js}
export const postMessageToWindow = options => dispatch => {
  if (options) {
      // This wraps the message posting/response in a promise, which will resolve if the response doesn't
      // contain an error, and reject with the error if it does. If you'd prefer, it's possible to call
      // controller.postMessage() and set up the onmessage handler independently of a promise, but this is
      // a convenient wrapper.
    const { type, payload, targetOrigin } = options;
       Promise.resolve().then(() => {
        const messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = function(event) {
          if (event.data.error) {
            throw Error(event.data.error);
          } else {
            dispatch('response', event.data);
          }
        };
        window.postMessage({type, payload}, targetOrigin || '*',
          [messageChannel.port2]);
      });
    }
};

// @param {PostMessageOptionsTypes from ./windowMessaging.props.js}
export const postMessageToServiceWorker = options => dispatch => {
  // This wraps the message posting/response in a promise, which will resolve if the response doesn't
  // contain an error, and reject with the error if it does. If you'd prefer, it's possible to call
  // controller.postMessage() and set up the onmessage handler independently of a promise, but this is
  // a convenient wrapper.

  const serviceWorkerInstance = navigator.serviceWorker.controller;
  console.info('Try to send message to: ', serviceWorkerInstance);
  if (serviceWorkerInstance) {
    const { type, payload } = options;
    Promise.resolve().then(() => {
      const messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = function(event) {
        if (event.data.error) {
          throw Error(event.data.error);
        } else {
          dispatch('response', event.data);
        }
      };
      // This sends the message data as well as transferring messageChannel.port2 to the service worker.
      // The service worker can then use the transferred port to reply via postMessage(), which
      // will in turn trigger the onmessage handler on messageChannel.port1.
      // See https://html.spec.whatwg.org/multipage/workers.html#dom-worker-postmessage
      console.info('Sending message: ', {type, payload});
      navigator.serviceWorker.controller.postMessage({type, payload},
        [messageChannel.port2]);
    });
  }
};
