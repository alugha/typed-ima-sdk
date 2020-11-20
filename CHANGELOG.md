## 2.0.1 (2020-11-20)

Fixes:
- Import `google` namespace through `import type` instead of `import` to avoid compiler errors

## 2.0.0 (2020-11-20)

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
