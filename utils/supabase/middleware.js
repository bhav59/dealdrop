// https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs?queryGroups=language&language=js#nextjs-middleware

import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function updateSession(request) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL= "https://zgyyoojsbhtrfzemvgff.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpneXlvb2pzYmh0cmZ6ZW12Z2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MDc5MzgsImV4cCI6MjA5NzA4MzkzOH0.WQAFwiC3mJOTs7o9atu2XLaSH_y8FVSZbI6yHLdXsTg",
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // refreshing the auth token
  await supabase.auth.getUser();

  return supabaseResponse;
}
