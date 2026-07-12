import type { AnswerMap, AssessmentResult } from "./assessmentScoring";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export type SubmitAssessmentInput = {
  name: string;
  email: string;
  business: string;
  emailOptIn: boolean;
  answers: AnswerMap;
  result: AssessmentResult;
};

export type SubmitAssessmentResponse = {
  ok: boolean;
  id?: string;
  emailSent?: boolean;
  emailError?: string | null;
  error?: string;
};

export function isAssessmentApiConfigured() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export async function submitAssessment(
  input: SubmitAssessmentInput,
): Promise<SubmitAssessmentResponse> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return { ok: false, error: "Assessment API is not configured" };
  }

  const res = await fetch(`${supabaseUrl}/functions/v1/submit-assessment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${supabaseAnonKey}`,
      apikey: supabaseAnonKey,
    },
    body: JSON.stringify(input),
  });

  let data: SubmitAssessmentResponse | null = null;
  try {
    data = (await res.json()) as SubmitAssessmentResponse;
  } catch {
    return { ok: false, error: "Invalid response from assessment API" };
  }

  if (!res.ok) {
    return { ok: false, error: data.error || "Could not save assessment" };
  }

  return data;
}
