# The Beauty Refinery JA — Portfolio Case Study

**Internal document.** Full technical record for Buzprout. Public portfolio uses outcome-focused copy only.

**Live site:** https://www.thebeautyrefineryja.com/

---

## Project at a glance

| | |
|---|---|
| **Client** | The Beauty Refinery JA |
| **Industry** | Beauty / lash extensions, waxing, professional training |
| **Locations** | Kingston (Molynes Road) & Treasure Beach, St. Elizabeth, Jamaica |
| **Deliverable** | Public marketing site + online booking + staff admin portal |
| **Stack** | React 19, Vite, TypeScript, Tailwind CSS, Supabase (Postgres, Auth, RLS, Edge Functions) |
| **My role** | Full-stack design & development: UI, booking flow, database schema, API layer, admin dashboard, deployment setup |

---

## Overview

The Beauty Refinery JA is a lash studio and training hub that needed more than a brochure site. Clients book online only, pay a 50% non-refundable deposit, and expect clear policies and location info. The studio also runs a multi-day Lash & Business Retreat with a long application form, and the owner needed a way to manage bookings, services, staff, and applications without touching code.

I built a production-ready web platform: a multi-page public site with live booking, a retreat application pipeline, and a privilege-based admin dashboard backed by Supabase. The project went from a single-page prototype with hardcoded mock data to a connected system where public bookings land in the admin portal in real time.

---

## The problem

When I started, the site had several gaps:

1. **No real booking persistence** — The booking UI looked complete, but confirming an appointment only updated local React state. Nothing reached a database, and the admin dashboard read from fabricated `MOCK_BOOKINGS` data that reset on refresh.

2. **Disconnected admin** — Retreat applications and staff login used Supabase, but services, locations, technicians, and appointments did not. Admin edits to prices or booking status were in-memory only.

3. **No operational backend in the repo** — Schema, RLS policies, and Edge Function source were not version-controlled, making the system hard to audit, reproduce, or hand off.

4. **Weak staff governance** — There was no self-service flow for the owner to add managers with scoped permissions (e.g. applications only vs. full catalog control).

5. **UX mismatch with business rules** — The studio requires 12-hour advance booking, deposit confirmation, two locations, optional artist selection, and refill-specific logic. The UI needed to enforce and communicate those rules clearly.

The business goal was straightforward: **clients book on the website, staff manage everything in one dashboard, and the owner controls who can see and change what.**

---

## Goals & constraints

**Business goals**
- Website-only booking with deposit policy surfaced at every step
- Support Kingston and Treasure Beach locations
- 28+ services across lashes, refills, waxing, and training programs
- Retreat application intake separate from appointment booking
- Owner-managed team with granular admin permissions

**Technical constraints**
- Shared Supabase project (`buzprout`) with isolated `tbrja_*` tables so TBRJA data stays namespaced
- Browser must never expose service-role keys; sensitive writes go through Edge Functions or RLS-protected authenticated paths
- Frontend env limited to `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Mobile-first audience (WhatsApp confirmation flow after booking)

**Design constraints**
- Premium, calm studio aesthetic: warm neutrals (`#F3EBE1`, `#3A2418`), gold accent (`#C4A46A`), Lora serif for headings
- Plain, direct copy (no generic marketing filler)
- Fast, lightweight SPA (Vite, no SSR requirement)

---

## Solution

### Public website (multi-page)

The site was restructured from one long landing page into focused routes, each with a clear job:

| Route | Purpose |
|-------|---------|
| `/` | Hero, hours, locations, page teasers, featured services, gallery preview, FAQs preview, booking CTA |
| `/services` | Full service menu with category filters and direct book actions |
| `/about` | Studio story and brand pillars |
| `/training` | Program cards, pricing, book vs. apply paths |
| `/work` | Gallery |
| `/policies` | Studio standards (deposits, cancellations, etiquette) |
| `/faqs` | Accordion FAQ |
| `/contact` | Contact details, payment/bank info |
| `/apply` | Lash & Business Retreat application (multi-section form) |

Shared layout includes sticky navigation, footer, and a **global booking modal** available from any page via React context (`BookingProvider`).

### Booking flow (4 steps)

1. **Service** — Loaded live from `tbrja_services`; refill services prompt for last appointment date with overdue guidance
2. **Location & artist** — Kingston or Treasure Beach; optional preferred artist or “any available”
3. **Date & time** — Static slot grid; 12-hour minimum enforced server-side
4. **Contact details** — Name, email, phone; summary with deposit amount (50%)

Submission calls the `tbrja-submit-booking` Edge Function, which validates input, checks service/location availability, optionally checks technician conflicts, and inserts into `tbrja_appointments`. The client receives a booking reference (e.g. `BR-A1B2C3D4`) and a WhatsApp deep link to confirm deposit payment.

### Retreat application

`/apply` is a structured multi-section form (contact, background, motivation, plans, health, commitment, reflection, confirmations) built with React Hook Form. Submissions persist to `tbrja_applications` and appear in the admin Applications inbox with status workflow and internal notes.

---

## Admin portal

Authenticated staff access `/admin` after Supabase email/password login. Access requires an active row in `tbrja_staff_profiles`.

**Dashboard modules**

| Tab | Capability |
|-----|------------|
| **Insights** | KPIs and charts from applications + bookings |
| **Applications** | Retreat inbox, status updates, internal notes |
| **Team** | Create managers, assign privileges, edit/deactivate staff |
| **Bookings overview** | Revenue, upcoming counts, location breakdown |
| **Bookings** | Search, filter, complete, cancel, reschedule |
| **Services** | Edit price/duration, activate/deactivate |
| **Technicians** | Add artists, assign location & specialties, toggle active |
| **Locations** | View studio locations tied to catalog |

**Role model**
- **Owner** — implicit full access
- **Manager** — JSON privilege flags: `applications.read/update`, `insights.read`, `staff.manage`, `appointments.read/update`, `catalog.manage`

Team creation and privilege updates run through secured Edge Functions (`tbrja-create-staff`, `tbrja-update-staff`) using the service role, with server-side privilege checks so the browser cannot escalate permissions.

---

## Backend architecture

```
Public browser
    │
    ├─► Supabase REST (anon) ──► RLS: read active catalog
    │
    ├─► tbrja-submit-booking (Edge Function) ──► insert appointment
    │
    ├─► tbrja_applications insert (RLS: public insert)
    │
Staff browser (authenticated)
    │
    ├─► Supabase REST ──► RLS: privilege-gated reads/writes
    │
    └─► tbrja-create-staff / tbrja-update-staff (Edge Functions)
```

**Core tables**
- `tbrja_services`, `tbrja_locations`, `tbrja_technicians` — live catalog
- `tbrja_appointments` — public bookings with reference, status, payment status
- `tbrja_applications` — retreat form submissions
- `tbrja_staff_profiles` — roles and privileges linked to Supabase Auth users

**Security highlights**
- Row Level Security on all operational tables
- Private `tbrja_private.has_privilege()` helper for policy checks
- Public catalog reads scoped to `active = true`; staff with `catalog.manage` can see inactive rows
- Booking creation only via Edge Function (validation + conflict checks)
- Migrations committed: initial schema/seed, policy hardening, catalog RLS fix

---

## Key engineering decisions

**Why Supabase Edge Functions for bookings**
Direct anonymous inserts would bypass business rules (12-hour window, active catalog checks, technician overlap). The Edge Function centralizes validation and uses the service role safely on the server.

**Why a booking context instead of per-page modals**
After splitting into multiple pages, booking had to work from Home, Services, Training, and Contact without duplicating 300+ lines of modal logic. `BookingProvider` loads the catalog once and exposes `openBooking(serviceId?, mode?)` site-wide.

**Why privilege JSON on managers**
The owner wanted to delegate (e.g. front desk sees bookings but not team settings). A flat role enum was too rigid; granular flags map directly to UI tab visibility and RLS policies.

**Why multi-page over single scroll**
Better SEO structure, clearer navigation, and easier maintenance as content grows. Home still summarizes every section with teasers so first-time visitors get the full picture without scrolling endlessly.

---

## Design & UX

- **Typography:** Lora for display, system sans for UI; improved readability over earlier Cormorant choice
- **Motion:** Subtle hero scale, scroll-triggered fade-ups (Motion library)
- **Booking UX:** Step progress bar, inline deposit reminder, refill date capture, WhatsApp handoff for deposit confirmation
- **Admin UX:** Sidebar navigation filtered by privileges, status badges, inline service editing, reschedule modal
- **Copy tone:** Short, operational sentences aligned with how the studio actually communicates policies

Brand line retained: *Tailored Beauty. Refined Experience.*

---

## Challenges & how they were solved

| Challenge | Resolution |
|-----------|------------|
| Public catalog returned 401 for anonymous users | RLS policies called `has_privilege()` without execute grants for `anon`. Split public read policies (`active` only) and granted execute on the helper function |
| Mock data masked missing backend | Removed all mock bookings/technicians; wired Admin and public UI to `live-data.ts` Supabase queries |
| Booking modal unreachable after page split | Extracted to shared `BookingProvider` + `SiteLayout` |
| Staff privilege escalation risk | Server-side checks in Edge Functions; RLS as source of truth, UI gating as convenience only |
| Vite production build failure | Moved inline HTML CSS to global stylesheet |

---

## Results & current state

- Public site loads live services, locations, and technicians from Supabase
- End-to-end booking creates real appointments with reference IDs visible in admin
- Owner can log in, view bookings, manage catalog, and create managers with custom privileges
- Retreat applications persist and are manageable from the admin inbox
- Schema, migrations, and Edge Function source are in the repository with setup documentation (`TBRJA_SETUP.md`)
- Production build passes; local dev verified across routes and booking modal

**Planned / out of scope (v1)**
- Automated deposit confirmation emails (Resend integration documented as Edge Function secrets)
- Real-time availability engine (static time slots + server-side conflict check for assigned technicians)
- Payment gateway integration (deposits currently via bank transfer + WhatsApp confirmation)

---

## Tech stack (detailed)

**Frontend**
- React 19 + TypeScript
- Vite 6
- React Router 7 (nested routes, `SiteLayout`)
- Tailwind CSS 4
- Motion (animations)
- React Hook Form (retreat application)
- Recharts (admin insights)
- Lucide icons

**Backend**
- Supabase Postgres
- Supabase Auth (email/password)
- Row Level Security policies
- Deno Edge Functions (`tbrja-submit-booking`, `tbrja-create-staff`, `tbrja-update-staff`)
- SQL migrations with seeded catalog (28 services, 2 locations)

---

## What I'd highlight in an interview

1. **Replacing a convincing prototype with a real system** — Same UI surface, completely different data layer and trust model
2. **Designing RLS + Edge Functions together** — Public read vs. privileged write paths without exposing secrets
3. **Operational admin for a non-technical client** — Privilege-based team management they can run day to day
4. **Business rule encoding** — 12-hour booking window, deposit policy, refill logic, dual-location support
5. **Incremental delivery** — Applications/staff first, then live booking catalog, then admin operational tools, then multi-page IA refactor

---

## Suggested portfolio presentation

**Title:** The Beauty Refinery JA — Booking Platform & Admin Portal

**One-liner:** Full-stack booking and operations platform for a Jamaican lash studio and training academy.

**Tags:** React · TypeScript · Supabase · Postgres · RLS · Edge Functions · Booking System · Admin Dashboard · Role-Based Access

**Screenshots to include**
1. Home hero + explore grid
2. Booking modal (service selection + confirmation)
3. Services page
4. Admin bookings table
5. Admin team/privileges panel
6. Retreat application form

**Links**
- Live: https://www.thebeautyrefineryja.com/
- Admin: invitation only; use screenshots for public portfolio

---

## Pricing reference (internal)

See [referrer-pricing-guide.md](./referrer-pricing-guide.md) for full scope-to-price bands and TBRJA as the benchmark for beauty/booking + ops referrals.

---

## Related Buzprout docs

- [Pricing, billing, and referral guide](./referrer-pricing-guide.md)
