# Mivama UI Showcase

Interactive component catalog and testbed for [`@mivama/ui`](https://github.com/mivama-digital/mivama-ui). This project is independent from the Mivama website and installs the UI package directly from GitHub.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

## Production

The production container listens only on `127.0.0.1:8300`. Nginx terminates TLS and protects `ui.kamidzu.com` with HTTP Basic Authentication.

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

The Nginx virtual host template is available at `deploy/ui.kamidzu.com.nginx.conf`.
