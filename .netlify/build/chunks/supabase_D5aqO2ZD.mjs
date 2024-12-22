import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://ntihsielwhbvsdrakvhb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50aWhzaWVsd2hidnNkcmFrdmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MjU5ODIsImV4cCI6MjA0NDQwMTk4Mn0.LhveM1sPAh2P3pxAbK2EyXcJWah56V6_4L01T6mmQtU"
);

export { supabase as s };
