-- Insert an admin user (you'll need to set the password in the Supabase dashboard)
insert into auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) values (
  '00000000-0000-0000-0000-000000000000',
  '00000000-0000-0000-0000-000000000000',
  'authenticated',
  'authenticated',
  'admin@example.com',
  crypt('your_secure_password', gen_salt('bf')), -- You'll need to set a secure password here
  now(),
  now(),
  now(),
  '',
  '',
  '',
  ''
);

-- Add admin user to auth.users
insert into public.profiles (
  id,
  email,
  role
) values (
  '00000000-0000-0000-0000-000000000000',
  'admin@example.com',
  'admin'
);
