# DevStudio Labs

Creative tech studio website for pre-built projects, services, project details, contact briefs, and startup/student-focused digital product builds.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Lucide React

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production output is generated in `dist`.

## Vercel

Vercel can deploy this as a Vite app with:

- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` includes a rewrite to `index.html` so client-side routes like `/projects/project-slug`, `/about`, and `/contact` work on refresh.
