import { createClient } from "@supabase/supabase-js";

let adminClient: ReturnType<typeof createClient> | null = null;

function assertEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

export function getSupabaseAdminClient() {
  if (adminClient) {
    return adminClient;
  }

  const supabaseUrl = assertEnv("SUPABASE_URL", process.env.SUPABASE_URL);
  const serviceRoleKey = assertEnv("SUPABASE_SERVICE_ROLE_KEY", process.env.SUPABASE_SERVICE_ROLE_KEY);

  adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  return adminClient;
}