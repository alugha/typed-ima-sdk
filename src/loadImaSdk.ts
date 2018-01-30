/// <reference path="../typings/ima.d.ts" />
import loadScript from './loadScript';

declare global {
  interface Window {
    google: {
      ima: typeof google.ima;
    };
  }
}

const imaSdkSrc = '//imasdk.googleapis.com/js/sdkloader/ima3.js';
let pendingPromise: Promise<typeof google.ima> | null = null;

const promiseFinished = () => {
  pendingPromise = null;
};

const loadImaSdk = (): Promise<typeof google.ima> => {
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
