# Flexza Website

Marketing landing page for [Flexza](https://flexza.in) — a digital token and live queue management platform for clinics, salons, and service businesses.

## Overview

This is a single-page marketing site that introduces Flexza's product: digital token booking, live queue tracking, QR-based check-in, patient visit history, and clinic analytics. The page is fully responsive and supports English and Gujarati typography via the Anek font family.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 |
| Build tool | Vite 7 |
| Language | TypeScript |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion |
| Icons | Lucide React |

## Prerequisites

- **Node.js** 20.19+ or 22.13+ (recommended). Node 23 works but may show engine warnings from some ESLint packages.
- **npm** 10+

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the URL shown in the terminal (default: [http://localhost:5173](http://localhost:5173)).

To expose the dev server on your local network:

```bash
npm run dev -- --host
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Type-check and build for production (output in `dist/`) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Supabase Setup

The request-a-demo popup in the CTA flow is already prepared to submit lead data to Supabase when the following environment variables are present:

```bash
VITE_SUPABASE_URL=https://<your-project>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```

### 1. Create a Supabase project

- Create a new project in [Supabase](https://supabase.com).
- Go to the SQL Editor and run the following table creation script:

```sql
create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text not null,
  source text,
  submitted_at timestamptz default now()
);
```

### 2. Enable anonymous inserts

Because the landing form is submitted from the browser, use an `anon` policy so the public form can insert a row:

```sql
alter table public.leads enable row level security;

create policy "Allow anonymous lead inserts"
on public.leads
for insert
with check (true);
```

If you want to keep `select` access closed, only the `insert` policy above is needed for the demo form.

### 3. Add your environment variables

Create a `.env` file in the project root:

```bash
VITE_SUPABASE_URL=https://kcjypliqhfhqvjgsvouw.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```

### 4. Verify the connection

Start the app:

```bash
npm run dev
```

Then open the popup form, submit a test lead, and check the `leads` table in Supabase.

## Production Build

```bash
npm run build
npm run preview
```

The `dist/` folder contains static assets ready to deploy to any static host (Firebase Hosting, Vercel, Netlify, S3, etc.).

## Project Structure

```
website/
├── index.html              # HTML entry point
├── src/
│   ├── main.tsx            # React bootstrap
│   ├── App.tsx             # Root component
│   ├── pages/
│   │   └── Landing.tsx     # Main landing page layout
│   ├── components/
│   │   ├── Navbar/         # Top navigation
│   │   ├── Hero/           # Hero section with phone mockup
│   │   ├── Problems/       # Pain points section
│   │   ├── Solution/       # Product solution cards
│   │   ├── HowItWorks/     # Step-by-step flow
│   │   ├── Benefits/       # Patient & clinic benefits
│   │   ├── Comparison/     # Manual vs digital comparison
│   │   ├── Features/       # Feature grid
│   │   ├── ScreensPreview/ # App screen previews
│   │   ├── FAQ/            # Frequently asked questions
│   │   ├── CTA/            # Early access & final call-to-action
│   │   ├── Footer/         # Site footer
│   │   ├── TrustedBy/      # Social proof logos
│   │   └── ui/             # Shared UI primitives (Button, SectionHeader, etc.)
│   ├── lib/
│   │   ├── constants.ts    # Copy, nav items, FAQ data
│   │   └── motion.ts       # Framer Motion variants
│   └── styles.css          # Global styles & Tailwind imports
├── images/                 # Brand logo variants
├── tailwind.config.ts      # Design tokens (colors, fonts, shadows)
├── vite.config.ts
└── package.json
```

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#5A9D98` | Brand teal, CTAs, accents |
| `secondary` | `#EAF5F4` | Soft backgrounds |
| `ink` | `#1E1E1E` | Primary text |
| `muted` | `#6B7472` | Secondary text |

Font stack: **Anek Gujarati**, **Anek Latin**, Inter, system-ui.

## Landing Page Sections

1. **Navbar** — Anchor links to page sections
2. **Hero** — Headline, CTA, animated phone mockup
3. **Trusted By** — Partner/clinic logos
4. **Problems** — Common queue-management pain points
5. **Solution** — How Flexza solves each problem
6. **How It Works** — Patient and clinic onboarding flow
7. **Benefits** — Value for patients and clinics
8. **Comparison** — Manual tokens vs digital tokens
9. **Features** — Product capability grid
10. **Screens Preview** — Key app screens
11. **Early Access Banner** — Waitlist CTA
12. **FAQ** — Common questions
13. **Final CTA** — Closing call to action
14. **Footer** — Links and legal

## Troubleshooting

**`Cannot find module 'caniuse-lite/dist/unpacker/agents'` (Vercel build)**

Usually caused by `node_modules` being committed to git with an incomplete `caniuse-lite` package. Never commit `node_modules` — Vercel should install dependencies via `npm ci`.

```bash
git rm -r --cached node_modules .vite dist
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Port already in use**

Vite will automatically try the next available port (e.g. 5174). Check the terminal output for the correct URL.

## License

Private — Flexza HQ. All rights reserved.
