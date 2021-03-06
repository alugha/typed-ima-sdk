# Typed Google IMA SDK

A library without runtime dependencies for asynchronously loading the Google IMA
SDK, including TypeScript type definitions for the SDK itself.

For information on the Google IMA SDK itself, please visit
[Google's official documentation](https://developers.google.com/interactive-media-ads/docs/sdks/html5/).

## Installation

`yarn add @alugha/ima` or `npm install --save @alugha/ima`

## Usage

### TypeScript with async loading

With promises and CommonJS modules:

```typescript
const { loadImaSdk, google } = require("@alugha/ima");

loadImaSdk()
  .then(ima => {
    // Use the IMA SDK like any other typed module
    const adDisplayContainer: google.ima.AdDisplayContainer = new ima.AdDisplayContainer(
      document.getElementById("ad-container")
    );
    adDisplayContainer.initialize();
  })
  .catch(() => {
    console.log("SDK could not be loaded. Check your ad blocker!");
  });
```

With `async` / `await` and ES2015 modules:

```typescript
import { loadImaSdk, google } from "@alugha/ima";

const example = async () => {
  try {
    const ima = await loadImaSdk();
    // Use the IMA SDK like any other typed module
    const adDisplayContainer: google.ima.AdDisplayContainer = new ima.AdDisplayContainer(
      document.getElementById("ad-container")
    );
    adDisplayContainer.initialize();
  } catch (e) {
    console.log("SDK could not be loaded. Check your ad blocker!");
  }
};
```

### TypeScript without async loading

If you prefer to directly load the SDK using a script tag, you can still make
use of the included type definitions in `types/ima.d.ts`.

## Disclaimer

We are not involved in the development of the Google IMA SDK itself.
This library is not connected to Google in any way either.
