import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  // Surface a clear error in dev instead of failing silently downstream.
  console.warn('Supabase env vars missing — contact form logging will be disabled.');
}

export const supabase =
  url && anonKey ? createClient(url, anonKey) : null;
