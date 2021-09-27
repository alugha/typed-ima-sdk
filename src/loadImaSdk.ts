import type { google } from "./ima";
import loadScript from "./loadScript";

interface ImaWindow {
  google: {
    ima: typeof google.ima;
  };
}

const imaSdkSrc = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
let pendingPromise: Promise<typeof google.ima> | null = null;

const promiseFinished = () => {
  pendingPromise = null;
};

const loadImaSdk = (): Promise<typeof google.ima> => {
  const w = (window as unknown) as ImaWindow;
  if (w.google && w.google.ima) {
    return Promise.resolve(w.google.ima);
  }
  if (pendingPromise) {
    return pendingPromise;
  }
  pendingPromise = loadScript(imaSdkSrc).then(() => w.google.ima);
  pendingPromise.then(promiseFinished).catch(promiseFinished);
  return pendingPromise;
};
export default loadImaSdk;
