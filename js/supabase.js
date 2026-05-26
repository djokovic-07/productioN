const SUPABASE_URL = 'https://rjwkcbhdqltxihshdzhq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqd2tjYmhkcWx0eGloc2hkemhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NTI1NzQsImV4cCI6MjA5NTMyODU3NH0.khSLZUlyJf-zzRC3pScQ77-kmmz44QSi6MNNvntjG8o';

const client = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);