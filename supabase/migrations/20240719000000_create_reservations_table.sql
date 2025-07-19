-- Create a table for reservations
create table if not exists public.reservations (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text,
  service text not null,
  message text,
  status text default 'pending'::text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add row level security
alter table public.reservations enable row level security;

-- Create policies for admin access
create policy "Enable read access for authenticated users"
  on public.reservations
  for select
  to authenticated
  using (true);

create policy "Enable insert for anon users"
  on public.reservations
  for insert
  to anon
  with check (true);

create policy "Enable update for authenticated users"
  on public.reservations
  for update
  to authenticated
  using (true);
