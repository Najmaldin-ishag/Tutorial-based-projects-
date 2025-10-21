# The Wild Oasis — Next.js Vacation Rentals Demo

This repository contains "The Wild Oasis" — a tutorial-style Next.js application that demonstrates building a small vacation rental website with user authentication, booking/reservation flows, and integration with Supabase for data and storage.

The app is organized with the Next.js App Router and includes components for listing cabins, making reservations, and user profile pages.

## Features

- Next.js 14 App Router based UI
- Google authentication via NextAuth
- Persistent data and image storage with Supabase
- Date picking with react-day-picker
- Tailwind CSS for styling and layout
- Prettier and ESLint for code formatting and linting

## Tech Stack

- Next.js 14 (App Router)
- React 18
- NextAuth (next-auth) — authentication (Google provider)
- Supabase (@supabase/supabase-js) — database and storage
- Tailwind CSS — utility-first CSS framework
- PostCSS — CSS tooling
- Heroicons (@heroicons/react) — SVG icons
- date-fns — date utilities
- react-day-picker — date selection component
- Prettier (with prettier-plugin-tailwindcss) — code formatting
- ESLint — linting

## Project Structure (high level)

- app/ — Next.js App Router pages and nested layouts
  - \_components/ — React components used across the app
  - \_lib/ — utilities and services (supabase client, auth, data service)
- public/ — static assets
- starter/ — example pages or starter content
- tailwind.config.js — Tailwind configuration
- postcss.config.mjs — PostCSS configuration
- next.config.mjs — Next.js configuration (image remotePatterns)

## Environment Variables

The application expects the following environment variables (example names found in the code):

- SUPABASE_URL — your Supabase project URL
- SUPABASE_KEY — your Supabase anon or service key
- AUTH_GOOGLE_ID — Google OAuth client ID (used by NextAuth)
- AUTH_GOOGLE_SECRET — Google OAuth client secret (used by NextAuth)

Create a `.env.local` file in the project root with values similar to:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-supabase-key
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret
```

## Development

Install dependencies and run the development server:

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Production

Build and start the production server:

```powershell
npm run build
npm start
```

Or use the provided `prod` script which runs build then start:

```powershell
npm run prod
```

## Notes

- The Next.js `next.config.mjs` contains `images.remotePatterns` for the Supabase storage hostname and Google profile images — if you change the storage bucket or host, update the config.
- Supabase is used for both the database and storing cabin images (see `app/_lib/supabase.js`). Ensure your storage buckets are set to public or that you handle signed URLs appropriately.
- Authentication callbacks in `app/_lib/auth.js` interact with `data-service` to ensure guest records exist.

## Useful Commands

- npm run dev — run in development mode
- npm run build — create a production build
- npm run start — start the production server
- npm run lint — run Next.js/ESLint checks

## License

This project is provided for tutorial/demo purposes. Check individual files or the repository owner for license details.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
