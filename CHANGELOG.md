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
