-- Assessment lead magnet submissions (mirrors remote migration)
create table if not exists public.assessment_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  business text,
  email_opt_in boolean not null default false,
  overall_score integer not null check (overall_score >= 0 and overall_score <= 100),
  band_label text not null,
  category_scores jsonb not null default '{}'::jsonb,
  top_opportunities jsonb not null default '[]'::jsonb,
  roadmap jsonb not null default '[]'::jsonb,
  answers jsonb not null default '{}'::jsonb,
  email_sent_at timestamptz,
  email_error text
);

create index if not exists assessment_submissions_created_at_idx
  on public.assessment_submissions (created_at desc);

create index if not exists assessment_submissions_email_idx
  on public.assessment_submissions (email);

alter table public.assessment_submissions enable row level security;

revoke all on table public.assessment_submissions from anon, authenticated;
grant all on table public.assessment_submissions to service_role;

comment on table public.assessment_submissions is
  'Business Systems Assessment submissions; emailed via Resend when email_opt_in is true.';
