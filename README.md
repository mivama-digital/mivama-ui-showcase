# Mivama UI Showcase

Interactive component catalog and testbed for the official shadcn base-nova defaults packaged by [`@mivama/ui`](https://github.com/mivama-digital/mivama-ui). This project is independent from the Mivama website.

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
npm run doctor
npm run build
npm run test:e2e
```

Run the complete functional and accessibility gate with `npm run verify`
(lint, typecheck, react-doctor, build, e2e). Visual snapshots are
intentionally reviewed separately with `npm run test:visual`; update approved
baselines with `npm run test:visual -- --update-snapshots`.

The browser checks cover every route in both themes, opened overlay states,
Axe accessibility rules, focus trapping, keyboard behavior, and 320 px
overflow. Chromium and Firefox run locally. WebKit is configured for CI and
can be enabled explicitly with `PLAYWRIGHT_WEBKIT=1`; its Linux system
dependencies must be installed first. Visual tests run against a production
build and keep Chromium baselines.

## @mivama/ui dependency

The showcase tracks the current development state of the UI package through
the local tarball `file:../mivama-ui/mivama-ui-3.0.0.tgz`, which must exist
next to this checkout (`npm pack` it from the mivama-ui repository). The
tarball is intentionally unversioned in the ui repo, so a fresh clone of the
showcase needs the ui repo present.

For a published, release-pinned production flow instead, upload the tarball
to the mivama-ui GitHub release and switch the dependency to its immutable
URL before updating the lockfile — do not mix both modes in one commit.

## Deployment

`https://ui.kamidzu.com` laeuft aktuell als Entwicklungs-Deployment mit Hot
Reload: das systemd-User-Unit `mivama-ui-showcase-dev.service` startet
`next dev -p 8300 -H 127.0.0.1` (Build-Cache unter `.next-dev`), nginx leitet
die Domain an diesen Port weiter. Aenderungen an `app/` sind ohne Neustart
live; die Domain ist per Basic Auth geschuetzt.

```bash
systemctl --user enable --now mivama-ui-showcase-dev
systemctl --user status mivama-ui-showcase-dev
journalctl --user -u mivama-ui-showcase-dev -f
```

Das Docker-Image (`docker-compose.prod.yml`, Container `mivama-ui-showcase` auf
`127.0.0.1:8300`) ist die alternativ moegliche Produktionsausfuehrung; beim
Wechsel zurueck auf Produktion zuerst den Dev-Dienst stoppen, damit kein
`next dev`-Prozess auf dem Port laeuft:

```bash
systemctl --user stop mivama-ui-showcase-dev
docker compose -f docker-compose.prod.yml up -d --build
```

Die Nginx-Virtual-Host-Vorlage liegt unter `deploy/ui.kamidzu.com.nginx.conf`.
