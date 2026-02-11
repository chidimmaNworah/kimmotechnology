# Kimmotech Frontend (Next.js)

## Overview

This is the public-facing Kimmotech web app built with Next.js (pages router). It renders the marketing site, careers experience, and admin routes, and pulls content from the FastAPI backend.

## Tech Stack

- Next.js (pages router)
- React 19
- Sass + Tailwind
- Axios for API calls
- Google Tag Manager + Google Analytics

## Project Structure

- pages/: routes and API handlers
- components/: shared UI components
- container/: page sections
- styles/: global and module styles
- utils/api.js: backend API helpers
- public/: static assets

## Environment Variables

Create a .env.local in this folder with:

```bash
NEXT_PUBLIC_PYTHON_BACKEND_URL=http://127.0.0.1:8000
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

These values are referenced in [next.config.mjs](next.config.mjs) and used in [utils/api.js](utils/api.js) and [pages/_app.js](pages/_app.js).

## Local Development

1. Install dependencies:

	```bash
	npm install
	```

2. Run the dev server:

	```bash
	npm run dev
	```

Open http://localhost:3000.

## Data Flow

The homepage uses server-side rendering to fetch content from the backend in [pages/index.js](pages/index.js). API helpers are defined in [utils/api.js](utils/api.js) and rely on `NEXT_PUBLIC_PYTHON_BACKEND_URL`.

## Scripts

- `npm run dev`: start the dev server
- `npm run build`: create production build
- `npm run start`: run production build
- `npm run lint`: lint

## Deployment

The app is deployable on Vercel. Set the same environment variables in the Vercel dashboard. Cloudinary image domains are allowed via [next.config.mjs](next.config.mjs).
