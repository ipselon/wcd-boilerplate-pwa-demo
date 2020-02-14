export default {
  onUpdate: (registration) => {
    console.info('Found new registration: ', registration);
    if(window.confirm(
      'A new application version available. Do you want to update the application right now without closing application tabs?'
    )){
      console.info('Sending message.');
      registration.waiting.postMessage({type: 'SKIP_WAITING'});
      window.location.reload();
    }
    // registration.unregister().then(() => {
    //   window.location.reload()
    // })
  },
  onSuccess: registration => {
    console.info('service worker on success state');
    console.log(registration)
  },
}