import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type CategoryScore = {
  id: string;
  label: string;
  shortLabel: string;
  score: number;
};

type Opportunity = {
  category: string;
  title: string;
  recommendation: string;
  packageHint: string;
};

type RoadmapPhase = {
  phase: string;
  title: string;
  description: string;
};

type SubmitBody = {
  name?: string;
  email?: string;
  business?: string;
  emailOptIn?: boolean;
  answers?: Record<string, number>;
  result?: {
    overall?: number;
    band?: { label?: string; summary?: string };
    categories?: CategoryScore[];
    topOpportunities?: Opportunity[];
    roadmap?: RoadmapPhase[];
  };
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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildResultsEmailHtml(input: {
  name: string;
  overall: number;
  bandLabel: string;
  bandSummary: string;
  categories: CategoryScore[];
  opportunities: Opportunity[];
  roadmap: RoadmapPhase[];
  siteUrl: string;
  calendlyUrl: string;
}) {
  const {
    name,
    overall,
    bandLabel,
    bandSummary,
    categories,
    opportunities,
    roadmap,
    siteUrl,
    calendlyUrl,
  } = input;

  const categoryRows = categories
    .map(
      (c) =>
        `<tr>
          <td style="padding:8px 0;border-bottom:1px solid #e5ebe7;color:#0b1f2a;">${escapeHtml(c.shortLabel)}</td>
          <td style="padding:8px 0;border-bottom:1px solid #e5ebe7;text-align:right;font-weight:600;color:#0b1f2a;">${c.score}/100</td>
        </tr>`,
    )
    .join("");

  const opportunityBlocks = opportunities
    .map(
      (o, i) =>
        `<div style="margin:0 0 16px;padding:16px;border:1px solid #e5ebe7;border-radius:12px;">
          <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#1b7a4a;font-weight:600;">Opportunity ${i + 1}</p>
          <p style="margin:0 0 8px;font-size:16px;font-weight:600;color:#0b1f2a;">${escapeHtml(o.title)}</p>
          <p style="margin:0 0 8px;font-size:14px;line-height:1.5;color:#5a6b73;">${escapeHtml(o.recommendation)}</p>
          <p style="margin:0;font-size:13px;color:#0b1f2a;"><span style="color:#5a6b73;">Often starts with:</span> ${escapeHtml(o.packageHint)}</p>
        </div>`,
    )
    .join("");

  const roadmapBlocks = roadmap
    .map(
      (p) =>
        `<div style="margin:0 0 12px;">
          <p style="margin:0 0 4px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#1b7a4a;font-weight:600;">${escapeHtml(p.phase)}</p>
          <p style="margin:0 0 4px;font-size:15px;font-weight:600;color:#0b1f2a;">${escapeHtml(p.title)}</p>
          <p style="margin:0;font-size:14px;line-height:1.5;color:#5a6b73;">${escapeHtml(p.description)}</p>
        </div>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f7faf8;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 20px;">
    <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#1b7a4a;font-weight:600;">Buzprout</p>
    <h1 style="margin:0 0 12px;font-size:28px;line-height:1.2;color:#0b1f2a;">Your Business Systems Score</h1>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.5;color:#5a6b73;">Hi ${escapeHtml(name)}, here are your results from the free assessment.</p>

    <div style="margin:0 0 24px;padding:24px;background:#ffffff;border:1px solid #e5ebe7;border-radius:16px;text-align:center;">
      <p style="margin:0;font-size:48px;font-weight:700;color:#0b1f2a;">${overall}<span style="font-size:20px;color:#5a6b73;">/100</span></p>
      <p style="margin:8px 0 0;font-size:16px;font-weight:600;color:#1b7a4a;">${escapeHtml(bandLabel)}</p>
      <p style="margin:12px 0 0;font-size:14px;line-height:1.5;color:#5a6b73;">${escapeHtml(bandSummary)}</p>
    </div>

    <div style="margin:0 0 24px;padding:20px;background:#ffffff;border:1px solid #e5ebe7;border-radius:16px;">
      <p style="margin:0 0 12px;font-size:16px;font-weight:600;color:#0b1f2a;">Scores by area</p>
      <table style="width:100%;border-collapse:collapse;">${categoryRows}</table>
    </div>

    <div style="margin:0 0 24px;">
      <p style="margin:0 0 12px;font-size:16px;font-weight:600;color:#0b1f2a;">Top improvement opportunities</p>
      ${opportunityBlocks}
    </div>

    <div style="margin:0 0 28px;padding:20px;background:#ffffff;border:1px solid #e5ebe7;border-radius:16px;">
      <p style="margin:0 0 12px;font-size:16px;font-weight:600;color:#0b1f2a;">Suggested growth roadmap</p>
      ${roadmapBlocks}
    </div>

    <div style="margin:0 0 24px;padding:24px;background:#eef7f1;border:1px solid #cfe5d8;border-radius:16px;text-align:center;">
      <p style="margin:0 0 8px;font-size:18px;font-weight:600;color:#0b1f2a;">Want help implementing this?</p>
      <p style="margin:0 0 16px;font-size:14px;line-height:1.5;color:#5a6b73;">Book a free discovery call. We'll walk through your score and tell you honestly what to fix first.</p>
      <a href="${escapeHtml(calendlyUrl)}" style="display:inline-block;padding:12px 20px;background:#1b7a4a;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">Book Discovery Call</a>
    </div>

    <p style="margin:0;font-size:12px;line-height:1.5;color:#8a9aa3;text-align:center;">
      You received this because you opted in on <a href="${escapeHtml(siteUrl)}/assessment" style="color:#1b7a4a;">buzprout.com</a>.
    </p>
  </div>
</body>
</html>`;
}

function buildNotifyEmailText(input: {
  name: string;
  email: string;
  business: string;
  emailOptIn: boolean;
  overall: number;
  bandLabel: string;
  opportunities: Opportunity[];
}) {
  return [
    `New Business Systems Assessment submission`,
    ``,
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Business: ${input.business || "-"}`,
    `Email opt-in: ${input.emailOptIn ? "yes" : "no"}`,
    `Score: ${input.overall}/100 (${input.bandLabel})`,
    ``,
    `Top opportunities:`,
    ...input.opportunities.map((o, i) => `${i + 1}. ${o.title}`),
  ].join("\n");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  let body: SubmitBody;
  try {
    body = (await req.json()) as SubmitBody;
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const business = String(body.business ?? "").trim();
  const emailOptIn = Boolean(body.emailOptIn);
  const answers = body.answers ?? {};
  const result = body.result;

  if (!name || name.length > 120) {
    return json(400, { error: "Name is required" });
  }
  if (!email || !isValidEmail(email) || email.length > 254) {
    return json(400, { error: "A valid email is required" });
  }
  if (business.length > 200) {
    return json(400, { error: "Business name is too long" });
  }
  if (
    !result ||
    typeof result.overall !== "number" ||
    result.overall < 0 ||
    result.overall > 100 ||
    !result.band?.label ||
    !Array.isArray(result.categories) ||
    !Array.isArray(result.topOpportunities)
  ) {
    return json(400, { error: "Assessment result is required" });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!supabaseUrl || !serviceRoleKey) {
    return json(500, { error: "Server configuration error" });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from("assessment_submissions")
    .select("id", { count: "exact", head: true })
    .eq("email", email)
    .gte("created_at", since);

  if ((count ?? 0) >= 5) {
    return json(429, { error: "Too many submissions. Please try again later." });
  }

  const { data: row, error: insertError } = await supabase
    .from("assessment_submissions")
    .insert({
      name,
      email,
      business: business || null,
      email_opt_in: emailOptIn,
      overall_score: Math.round(result.overall),
      band_label: result.band.label,
      category_scores: result.categories,
      top_opportunities: result.topOpportunities,
      roadmap: result.roadmap ?? [],
      answers,
    })
    .select("id")
    .single();

  if (insertError || !row) {
    console.error("insert failed", insertError);
    return json(500, { error: "Could not save assessment" });
  }

  const siteUrl = Deno.env.get("SITE_URL") ?? "https://buzprout.com";
  const calendlyUrl =
    Deno.env.get("CALENDLY_URL") ?? "https://calendly.com/dujaunjpaul/30min";
  const notifyEmail = Deno.env.get("ASSESSMENT_NOTIFY_EMAIL") ?? "hello@buzprout.com";
  const fromEmail =
    Deno.env.get("RESEND_FROM_EMAIL") ?? "Buzprout <hello@buzprout.com>";
  const resendApiKey = Deno.env.get("RESEND_API_KEY");

  let emailSent = false;
  let emailError: string | null = null;

  if (resendApiKey) {
    // Always notify the studio of a new lead
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
          subject: `Assessment lead: ${name} (${Math.round(result.overall)}/100)`,
          text: buildNotifyEmailText({
            name,
            email,
            business,
            emailOptIn,
            overall: Math.round(result.overall),
            bandLabel: result.band.label,
            opportunities: result.topOpportunities,
          }),
        }),
      });
    } catch (err) {
      console.error("notify email failed", err);
    }

    if (emailOptIn) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [email],
            subject: `Your Business Systems Score: ${Math.round(result.overall)}/100`,
            html: buildResultsEmailHtml({
              name,
              overall: Math.round(result.overall),
              bandLabel: result.band.label,
              bandSummary: result.band.summary ?? "",
              categories: result.categories,
              opportunities: result.topOpportunities,
              roadmap: result.roadmap ?? [],
              siteUrl,
              calendlyUrl,
            }),
          }),
        });

        if (!res.ok) {
          const detail = await res.text();
          emailError = `Resend ${res.status}: ${detail.slice(0, 300)}`;
          console.error(emailError);
        } else {
          emailSent = true;
        }
      } catch (err) {
        emailError = err instanceof Error ? err.message : "Email send failed";
        console.error("results email failed", err);
      }

      await supabase
        .from("assessment_submissions")
        .update({
          email_sent_at: emailSent ? new Date().toISOString() : null,
          email_error: emailError,
        })
        .eq("id", row.id);
    }
  } else if (emailOptIn) {
    emailError = "RESEND_API_KEY not configured";
    await supabase
      .from("assessment_submissions")
      .update({ email_error: emailError })
      .eq("id", row.id);
  }

  return json(200, {
    ok: true,
    id: row.id,
    emailSent,
    emailError: emailError ? "Could not send email" : null,
  });
});
