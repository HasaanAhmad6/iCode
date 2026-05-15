create extension if not exists vector;

create table if not exists public.knowledge_chunks (
  id text primary key,
  source_id text not null,
  source_type text not null,
  title text not null,
  slug text null,
  url text null,
  summary text null,
  content text not null,
  metadata jsonb not null default '{}'::jsonb,
  chunk_index integer not null default 0,
  embedding vector(768) not null,
  created_at timestamptz not null default now()
);

create index if not exists knowledge_chunks_source_id_idx on public.knowledge_chunks (source_id);
create index if not exists knowledge_chunks_source_type_idx on public.knowledge_chunks (source_type);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  company_name text not null,
  required_service text not null,
  budget text not null,
  project_details text not null,
  preferred_contact_time text not null,
  source_page text not null,
  user_agent text null,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.chat_unknown_questions (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  source_page text null,
  reason text not null,
  created_at timestamptz not null default now()
);

create or replace function public.match_knowledge_chunks(
  query_embedding vector(768),
  match_count integer default 5,
  min_similarity double precision default 0.72
)
returns table (
  id text,
  source_type text,
  title text,
  slug text,
  url text,
  summary text,
  content text,
  similarity double precision
)
language sql
stable
as $$
  select
    kc.id,
    kc.source_type,
    kc.title,
    kc.slug,
    kc.url,
    kc.summary,
    kc.content,
    1 - (kc.embedding <=> query_embedding) as similarity
  from public.knowledge_chunks kc
  where 1 - (kc.embedding <=> query_embedding) >= min_similarity
  order by kc.embedding <=> query_embedding asc
  limit match_count;
$$;