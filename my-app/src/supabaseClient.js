import {createClient} from '@supabase/supabase-js'

const supabaseUrl ="https://hzqiszopebnbkrmqduki.supabase.co"

const supabaseAnonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cWlzem9wZWJuYmtybXFkdWtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3ODUzMjEsImV4cCI6MjAxNTM2MTMyMX0.d7u2f9PDe1wrsQamAKwQ5ewiAGiBpgm0RVqOIYzWP98"


export const supabase=createClient(supabaseUrl,supabaseAnonkey);


