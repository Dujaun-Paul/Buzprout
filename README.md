# Buzprout Website

Marketing site for Buzprout — a digital business solutions studio serving Caribbean businesses and beyond.

Brand strategy: [docs/brand/brand-strategy.md](docs/brand/brand-strategy.md)

Design source: [Figma](https://www.figma.com/design/VY4mRlFuKh3mK3amZzMY2A/Buzprout-Website-Design)

## Setup

```bash
npm install
```

Fill `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env.local` (see Supabase project **buzprout**).

### Assessment lead magnet (Supabase + Resend)

Submissions are stored in `assessment_submissions` and emailed via Resend only when the visitor opts in.

1. Deploy / update the Edge Function (already deployed as `submit-assessment` on project `cgnvvjdfjmapfdwnolsb`).
2. Set Edge Function secrets:

```bash
npx supabase login
npx supabase secrets set --project-ref cgnvvjdfjmapfdwnolsb \
  RESEND_API_KEY=re_xxxxx \
  RESEND_FROM_EMAIL="Buzprout <hello@buzprout.com>" \
  ASSESSMENT_NOTIFY_EMAIL=hello@buzprout.com \
  SITE_URL=https://buzprout.com \
  CALENDLY_URL=https://calendly.com/buzprout/discovery
```

3. In Resend, verify the `buzprout.com` domain (or use `onboarding@resend.dev` for testing and set `RESEND_FROM_EMAIL` accordingly).
4. On Vercel, add the same `VITE_SUPABASE_*` env vars used in `.env.local`.

## Development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```
