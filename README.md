# Mivama UI Showcase

Interactive component catalog and testbed for the official shadcn base-nova defaults packaged by [`@mivama/ui`](https://github.com/mivama-digital/mivama-ui). This project is independent from the Mivama website and installs the UI package directly from GitHub.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Component pages

The catalog is split into focused routes for actions, content, feedback, forms,
navigation, dialogs, sheets, attachments, and layout primitives. The examples
present the package defaults across 20 component families without replacing
their official geometry or theme. Tooltip is included as a Sidebar dependency
and does not have a dedicated page. Use the header control to inspect the
catalog in light and dark themes.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

Run the complete functional and accessibility gate with `npm run verify`.
Visual snapshots are intentionally reviewed separately with
`npm run test:visual`; update approved baselines with
`npm run test:visual -- --update-snapshots`.

The browser checks cover every route in both themes, opened overlay states,
Axe accessibility rules, focus trapping, keyboard behavior, and 320 px
overflow. Chromium and Firefox run locally. WebKit is configured for CI and
can be enabled explicitly with `PLAYWRIGHT_WEBKIT=1`; its Linux system
dependencies must be installed first. Visual tests run against a production
build and keep Chromium baselines.

The showcase pins the immutable package tarball attached to the GitHub release.
During package development, test an `npm pack` tarball with `--no-save` and
`--package-lock=false`; do not commit a local `file:` dependency. Each package
release must upload its tarball before this URL and lockfile are updated.

## Production

The production container listens only on `127.0.0.1:8300`. Nginx terminates TLS and protects `ui.kamidzu.com` with HTTP Basic Authentication.

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

The Nginx virtual host template is available at `deploy/ui.kamidzu.com.nginx.conf`.
