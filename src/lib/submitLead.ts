type LeadSource = "contact" | "academy";

export type SubmitLeadInput = {
  source: LeadSource;
  name: string;
  email: string;
  business?: string;
  message?: string;
  course?: string;
};

export type SubmitLeadResponse = {
  ok: boolean;
  id?: string;
  error?: string;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export function isLeadApiConfigured() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export async function submitLead(input: SubmitLeadInput): Promise<SubmitLeadResponse> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { ok: false, error: "Lead API is not configured" };
  }

  const res = await fetch(`${supabaseUrl}/functions/v1/submit-lead`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${supabaseAnonKey}`,
      apikey: supabaseAnonKey,
    },
    body: JSON.stringify(input),
  });

  let data: SubmitLeadResponse | null = null;
  try {
    data = (await res.json()) as SubmitLeadResponse;
  } catch {
    return { ok: false, error: "Invalid response from lead API" };
  }

  if (!res.ok) {
    return { ok: false, error: data.error || "Could not save your message" };
  }

  return data;
}
