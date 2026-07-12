import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type LeadBody = {
  source?: string;
  name?: string;
  email?: string;
  business?: string;
  message?: string;
  course?: string;
};

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  let body: LeadBody;
  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const source = String(body.source ?? "").trim();
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const business = String(body.business ?? "").trim();
  const message = String(body.message ?? "").trim();
  const course = String(body.course ?? "").trim();

  if (source !== "contact" && source !== "academy") {
    return json(400, { error: "Invalid source" });
  }
  if (!name || name.length > 120) {
    return json(400, { error: "Name is required" });
  }
  if (!email || !isValidEmail(email) || email.length > 254) {
    return json(400, { error: "A valid email is required" });
  }
  if (business.length > 200) {
    return json(400, { error: "Business name is too long" });
  }
  if (source === "contact" && (!message || message.length > 4000)) {
    return json(400, { error: "A project message is required" });
  }
  if (source === "academy" && course.length > 120) {
    return json(400, { error: "Course selection is too long" });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) {
    return json(500, { error: "Server configuration error" });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from("site_leads")
    .select("id", { count: "exact", head: true })
    .eq("email", email)
    .gte("created_at", since);

  if ((count ?? 0) >= 5) {
    return json(429, { error: "Too many submissions. Please try again later." });
  }

  const { data: row, error } = await supabase
    .from("site_leads")
    .insert({
      source,
      name,
      email,
      business: business || null,
      message: source === "contact" ? message : null,
      course: source === "academy" ? course || null : null,
    })
    .select("id")
    .single();

  if (error || !row) {
    console.error("lead insert failed", error);
    return json(500, { error: "Could not save your message" });
  }

  const notifyEmail = Deno.env.get("ASSESSMENT_NOTIFY_EMAIL") ?? "hello@buzprout.com";
  const fromEmail =
    Deno.env.get("RESEND_FROM_EMAIL") ?? "Buzprout <hello@buzprout.com>";
  const resendApiKey = Deno.env.get("RESEND_API_KEY");

  if (resendApiKey) {
    const subject =
      source === "academy"
        ? `Academy waitlist: ${name}`
        : `Project enquiry: ${name}`;
    const text = [
      source === "academy" ? "Academy waitlist submission" : "Contact form submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business || "-"}`,
      source === "academy" ? `Course: ${course || "-"}` : `Message:\n${message}`,
    ].join("\n");

    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [notifyEmail],
          reply_to: email,
          subject,
          text,
        }),
      });
    } catch (err) {
      console.error("notify email failed", err);
    }
  }

  return json(200, { ok: true, id: row.id });
});
