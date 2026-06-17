import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = "https://zgyyoojsbhtrfzemvgff.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpneXlvb2pzYmh0cmZ6ZW12Z2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MDc5MzgsImV4cCI6MjA5NzA4MzkzOH0.WQAFwiC3mJOTs7o9atu2XLaSH_y8FVSZbI6yHLdXsTg";

export const createClient = () => createBrowserClient(supabaseUrl, supabaseKey);
