# sms-common-constants — notes

Shared enums, API codes, filters and the UI content dictionary (`src/content/{en,hi,gu}.ts`, served by sms-company
`GET /api/v1/content/dictionary`).

**Build warning:** `npm run build` runs `prebuild` = `rm -rf dist` first. On Windows there is no local `tsc`, so the
build deletes `dist/` and then fails — every service that symlinks this package then cannot start. Build inside a
container instead: `docker exec -w /app/sms-common-constants sms-company /app/node_modules/.bin/tsc -p tsconfig.json`.

## 2026-09-30
- `web.onboarding` (plan & payment + approval labels) added in en + hi for the school onboarding flow
  (docs/flows/school-onboarding). dist rebuilt in the sms-company container.
