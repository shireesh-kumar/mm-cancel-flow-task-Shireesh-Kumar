// src/lib/supabase.ts
// Supabase client configuration for database connections
// Does not include authentication setup or advanced features

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client for authenticated operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Admin client for bypassing RLS during development
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
}) 