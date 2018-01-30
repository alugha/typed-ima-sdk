# Typed Google IMA SDK

A library without runtime dependencies for asynchronously loading the Google IMA
SDK, including TypoScript type definitions for the SDK itself.

For information on the Google IMA SDK itself, please visit
[Google's official documentation](https://developers.google.com/interactive-media-ads/docs/sdks/html5/).

## Installation

`yarn add @alugha/ima` or `npm install --save @alugha/ima`

## Usage

### TypeScript with async loading

```typescript
import { loadImaSdk } from '@alugha/ima';

const example = async () => {
  try {
    const ima = await loadImaSdk();
    // Use the IMA SDK like any other typed module
    const adDisplayContainer: ima.AdDisplayContainer = new ima.AdDisplayContainer(
      document.getElementById('ad-container'),
    );
    adDisplayContainer.initialize();
  }
};
```

### TypeScript without async loading

If you prefer to directly load the SDK using a script tag, you can still make
use of the included type definitions in `types/ima.d.ts`.

## Disclaimer

We are not involved in the development of the Google IMA SDK itself.
This library is not connected to Google in any way either.
