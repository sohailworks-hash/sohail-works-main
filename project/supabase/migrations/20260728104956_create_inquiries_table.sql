/*
# Create inquiries table (single-tenant, no auth)

1. New Tables
- `inquiries`
- `id` (uuid, primary key)
- `name` (text, not null) — visitor's full name from the contact form
- `business_type` (text, nullable) — optional business category e.g. "Restaurant", "Gym"
- `message` (text, nullable) — optional project description
- `source` (text, default 'contact_form') — where the inquiry came from
- `created_at` (timestamptz, default now()) — submission time

2. Security
- Enable RLS on `inquiries`.
- This is a public marketing site with no sign-in, so the anon-key client must be
  able to INSERT new inquiries. Reads/writes/deletes are NOT exposed to the public
  client — only INSERT is granted to anon+authenticated so visitors can submit the
  contact form. Anyone wishing to read inquiries must authenticate (site owner).

3. Important Notes
- INSERT-only policy for the public keeps submissions private to the authenticated owner.
- No user_id column is used because this is a single-tenant portfolio site with no accounts.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business_type text,
  message text,
  source text NOT NULL DEFAULT 'contact_form',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Public may submit inquiries (no sign-in on this marketing site)
DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
ON inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated owner can read inquiries
DROP POLICY IF EXISTS "auth_select_inquiries" ON inquiries;
CREATE POLICY "auth_select_inquiries"
ON inquiries FOR SELECT
TO authenticated
USING (true);
