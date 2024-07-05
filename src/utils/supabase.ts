import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://dmnmsivqaynohlgpeofd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbm1zaXZxYXlub2hsZ3Blb2ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAxNDYxMzksImV4cCI6MjAzNTcyMjEzOX0.BQ6IEkvO0OdyRWghbGbF5DzXavVeTUVhiwqtIUubA9E',
);
