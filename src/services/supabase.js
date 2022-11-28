import {createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://mngnsjqfyajxoivvocsr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uZ25zanFmeWFqeG9pdnZvY3NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2MzkyMzEsImV4cCI6MTk4NTIxNTIzMX0.QD-HGdiaPtqK-akM6FE4mqhWzeTRPsGE5hMa5RHH_Os";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
