import loadScript from './loadScript';

type GoogleImaSdk = typeof google.ima;

declare global {
  interface Window {
    google: {
      ima: GoogleImaSdk;
    };
  }
}

const imaSdkSrc = '//imasdk.googleapis.com/js/sdkloader/ima3.js';
let pendingPromise: Promise<GoogleImaSdk> | null = null;

const promiseFinished = () => {
  pendingPromise = null;
};

const loadImaSdk = (): Promise<GoogleImaSdk> => {
  if (window.google && window.google.ima) {
    return Promise.resolve(window.google.ima);
  }
  if (pendingPromise) {
    return pendingPromise;
  }
  pendingPromise = loadScript(imaSdkSrc).then(() => window.google.ima);
  pendingPromise.then(promiseFinished).catch(promiseFinished);
  return pendingPromise;
};
export default loadImaSdk;
