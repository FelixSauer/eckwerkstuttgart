# Eckwerk Stuttgart

Website des Handwerksbetriebs Eckwerk Stuttgart. Das Projekt wird mit Astro statisch gebaut und über GitHub Pages ausgeliefert.

## Voraussetzungen

- Node.js 22.22.3
- pnpm 10.34.5 über Corepack

```bash
corepack enable
pnpm install --frozen-lockfile
```

## Entwicklung

```bash
pnpm dev
```

Der Entwicklungsserver ist anschließend unter `http://localhost:4321` erreichbar.

## Befehle

| Befehl              | Zweck                                                   |
| ------------------- | ------------------------------------------------------- |
| `pnpm dev`          | Entwicklungsserver starten                              |
| `pnpm check`        | Astro-, TypeScript- und Content-Prüfung ausführen       |
| `pnpm lint`         | ESLint ohne Dateiänderungen ausführen                   |
| `pnpm lint:fix`     | automatisch behebbare ESLint-Befunde korrigieren        |
| `pnpm format:check` | Formatierung ohne Dateiänderungen prüfen                |
| `pnpm format`       | unterstützte Dateien mit Prettier formatieren           |
| `pnpm build`        | Produktionsbuild mit vorheriger Astro-Prüfung erstellen |
| `pnpm preview`      | Produktionsbuild lokal anzeigen                         |

## Struktur

```text
src/
├── assets/       Bilder, Favicons und Icons
├── components/   Astro-Komponenten
├── content/      MDX-Seiten und Content-Schema
├── hooks/        Navigationserzeugung
├── layouts/      Gemeinsames Seitenlayout
├── pages/        Statisch erzeugte Routen
├── styles/       Globale Tailwind-Stile
├── types/        Gemeinsame TypeScript-Typen
└── utils/        Clientseitige Hilfsfunktionen
```

## Umgebungsvariablen

Google-Bewertungen werden nur geladen, wenn beide Variablen gesetzt sind:

```text
GOOGLE_PLACES_API_KEY
GOOGLE_PLACES_ID
```

Ohne diese Werte wird die Website weiterhin gebaut und zeigt keine Bewertungen an.

## Deployment

Ein Push auf `main` startet den Workflow in `.github/workflows/deployment_prod.yml`. Der Workflow baut die statische Website und veröffentlicht sie über GitHub Pages unter der in `astro.config.mjs` konfigurierten Domain.
