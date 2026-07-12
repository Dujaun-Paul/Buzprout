-- Contact form and Academy waitlist submissions
create table if not exists public.site_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  source text not null check (source in ('contact', 'academy')),
  name text not null,
  email text not null,
  business text,
  message text,
  course text,
  meta jsonb not null default '{}'::jsonb
);

create index if not exists site_leads_created_at_idx on public.site_leads (created_at desc);
create index if not exists site_leads_email_idx on public.site_leads (email);
create index if not exists site_leads_source_idx on public.site_leads (source);

alter table public.site_leads enable row level security;
revoke all on table public.site_leads from anon, authenticated;
grant all on table public.site_leads to service_role;
