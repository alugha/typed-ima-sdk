## v2.2.0 (2023-05-17)

Changes:
- Target ES2015 instead of ES5

Fixes:
- Add [`crossorigin="anonymous"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) to script tags for compatibility with [COEP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)

Technical changes:
- Updated from TypeScript `4.4` to `5.0`

## v2.1.0 (2021-09-28)

Changes:
- @joeflateau: Add `pageUrl` property to AdsRequest (#19)

Fixes:
- @joeflateau: Loading of IMA SDK in non-http environments (#16 / #18)

Technical changes:
- Updated from TypeScript `4.1` to `4.4`
- Updated from ESLint `7.13` to `7.32`
- Updated from Prettier `2.2` to `2.4`
- Remove TSLint

## v2.0.3 (2021-05-01)

Fixes:
- @Achavesm: Spelling mistake in `nearMathPercent` (#11)

## v2.0.2 (2020-11-20)

Fixes:
- Set correct values for enum types (fixes #1)

## v2.0.1 (2020-11-20)

Fixes:
- Import `google` namespace through `import type` instead of `import` to avoid compiler errors

## v2.0.0 (2020-11-20)

Breaking changes:
- Moved declaration of `google.ima` namespace from global scope to module scope to avoid type clashes, it now has to be imported explicitly: `import type { google } from '@alugha/ima;`

Technical changes:
- Updated from TypeScript `2.6` to `4.1`
- Updated from Prettier `1.10` to `2.2`
- Migrated from TSLint to ESLint

## v1.2.0 (2020-05-08)

Changes:
- @bechtold: Added new AdEvent types (#4)
- @klipstein: Add missing AdsRequest.setContinuousPlayback method (#7)

## v1.1.0 (2018-01-31)

Changes:

- Update method `addEventListener` for both AdsLoader and AdsManager to include an optional third parameter called `useCapture` of type `boolean`
- Add method `removeEventListener(type, listener, useCapture?)` to AdsLoader and AdsManager
