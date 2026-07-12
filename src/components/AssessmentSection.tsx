import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import {
  ASSESSMENT_CATEGORIES,
  ASSESSMENT_META,
  ASSESSMENT_QUESTIONS,
} from "../data/assessment";
import { CONTACT } from "../data/contact";
import {
  scoreAssessment,
  type AnswerMap,
  type AssessmentResult,
} from "../lib/assessmentScoring";
import { isAssessmentApiConfigured, submitAssessment } from "../lib/submitAssessment";

type Step = "intro" | "questions" | "capture" | "results";

function ScoreBar({ score, label }: { score: number; label: string }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-1.5">
        <span className="text-sm text-foreground">{label}</span>
        <span className="text-sm font-semibold text-foreground tabular-nums">{score}</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-700 ease-out"
          style={{ width: `${Math.min(100, Math.max(0, score))}%` }}
        />
      </div>
    </div>
  );
}

export default function AssessmentSection() {
  const [step, setStep] = useState<Step>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [saved, setSaved] = useState(false);

  const total = ASSESSMENT_QUESTIONS.length;
  const question = ASSESSMENT_QUESTIONS[index];
  const progress = step === "questions" ? ((index + 1) / total) * 100 : step === "intro" ? 0 : 100;
  const apiReady = isAssessmentApiConfigured();

  function selectOption(score: number) {
    if (!question) return;
    const next = { ...answers, [question.id]: score };
    setAnswers(next);

    if (index < total - 1) {
      setIndex(index + 1);
      return;
    }

    setResult(scoreAssessment(next));
    setStep("capture");
  }

  function goBack() {
    if (step === "questions" && index > 0) {
      setIndex(index - 1);
      return;
    }
    if (step === "questions" && index === 0) {
      setStep("intro");
      return;
    }
    if (step === "capture" && !submitting) {
      setStep("questions");
      setIndex(total - 1);
    }
  }

  async function handleCapture(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!result || submitting) return;

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const business = String(form.get("business") || "").trim();
    const email = String(form.get("email") || "").trim();
    const emailOptIn = form.get("emailOptIn") === "on";

    setSubmitError(null);
    setSubmitting(true);

    try {
      if (!apiReady) {
        setSubmitError("Assessment saving isn’t configured yet. You can still view results below.");
        setStep("results");
        return;
      }

      const response = await submitAssessment({
        name,
        email,
        business,
        emailOptIn,
        answers,
        result,
      });

      if (!response.ok) {
        setSubmitError(response.error || "Could not save your assessment. Showing results anyway.");
        setStep("results");
        return;
      }

      setSaved(true);
      setEmailSent(Boolean(response.emailSent));
      if (response.emailError && emailOptIn) {
        setSubmitError(
          "Saved, but we couldn’t send the email just now. Your results are on this page.",
        );
      }
      setStep("results");
    } catch {
      setSubmitError("Something went wrong saving. Showing your results on this page.");
      setStep("results");
    } finally {
      setSubmitting(false);
    }
  }

  function skipCapture() {
    setSubmitError(null);
    setSaved(false);
    setEmailSent(false);
    setStep("results");
  }

  function restart() {
    setStep("intro");
    setIndex(0);
    setAnswers({});
    setResult(null);
    setSubmitting(false);
    setSubmitError(null);
    setEmailSent(false);
    setSaved(false);
  }

  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(27,122,74,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(27,122,74,0.06),transparent)] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto">
        {(step === "questions" || step === "capture") && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
              <span>
                {step === "questions"
                  ? `Question ${index + 1} of ${total}`
                  : "Almost done"}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {step === "intro" && (
          <div className="text-center animate-fade-up">
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
              Free assessment
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
              {ASSESSMENT_META.headline}
            </h1>
            <p className="text-xl text-primary font-semibold mb-6">{ASSESSMENT_META.subhead}</p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
              {ASSESSMENT_META.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-10">
              <span className="inline-flex items-center gap-2">
                <Check size={14} className="text-primary" /> {ASSESSMENT_META.questionCountLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <Check size={14} className="text-primary" /> {ASSESSMENT_META.timeLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <Check size={14} className="text-primary" /> Score + next steps
              </span>
            </div>
            <button
              type="button"
              onClick={() => setStep("questions")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm hover-lift"
            >
              Start assessment <ArrowRight size={16} />
            </button>
          </div>
        )}

        {step === "questions" && question && (
          <div key={question.id} className="animate-fade-up">
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
              {ASSESSMENT_CATEGORIES.find((c) => c.id === question.category)?.shortLabel}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
              {question.prompt}
            </h2>
            <div className="space-y-3">
              {question.options.map((opt) => {
                const selected = answers[question.id] === opt.score;
                return (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => selectOption(opt.score)}
                    className={`w-full text-left px-5 py-4 rounded-2xl border text-sm leading-relaxed transition-colors ${
                      selected
                        ? "border-primary/40 bg-primary/[0.06] text-foreground ring-1 ring-primary/15"
                        : "border-border bg-card text-foreground hover:border-primary/30 shadow-soft"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={goBack}
              className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} /> Back
            </button>
          </div>
        )}

        {step === "capture" && result && (
          <div className="animate-fade-up">
            <p className="text-xs text-primary uppercase tracking-widest font-medium mb-3">
              Your score is ready
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
              Save your results
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Enter your details to store your score. Opt in below if you want a copy emailed to you.
            </p>
            <form
              onSubmit={handleCapture}
              className="space-y-5 p-6 md:p-8 rounded-2xl border border-border bg-card shadow-soft"
            >
              <div>
                <label htmlFor="assess-name" className="block text-sm font-medium text-foreground mb-2">
                  Your name
                </label>
                <input
                  id="assess-name"
                  name="name"
                  required
                  disabled={submitting}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm disabled:opacity-60"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label
                  htmlFor="assess-business"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Business name
                </label>
                <input
                  id="assess-business"
                  name="business"
                  disabled={submitting}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm disabled:opacity-60"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="assess-email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  id="assess-email"
                  name="email"
                  type="email"
                  required
                  disabled={submitting}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm disabled:opacity-60"
                  placeholder="you@business.com"
                />
              </div>
              <label className="flex items-start gap-3 text-sm text-foreground cursor-pointer">
                <input
                  type="checkbox"
                  name="emailOptIn"
                  disabled={submitting}
                  className="mt-1 rounded border-border text-primary focus:ring-primary"
                />
                <span>
                  Email me my results
                  <span className="block text-muted-foreground mt-0.5">
                    Optional. We’ll only send this assessment summary, no marketing drip from this
                    checkbox.
                  </span>
                </span>
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm disabled:opacity-60"
              >
                {submitting ? "Saving…" : "See my results"} <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={skipCapture}
                disabled={submitting}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-1 disabled:opacity-60"
              >
                Skip and show results only
              </button>
            </form>
            <button
              type="button"
              onClick={goBack}
              disabled={submitting}
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-60"
            >
              <ArrowLeft size={14} /> Back
            </button>
          </div>
        )}

        {step === "results" && result && (
          <div className="animate-fade-up space-y-10">
            {(saved || emailSent || submitError) && (
              <div className="text-center text-sm space-y-1">
                {saved && (
                  <p className="text-muted-foreground">
                    {emailSent
                      ? "Saved. Check your inbox for a copy of these results."
                      : "Your assessment was saved."}
                  </p>
                )}
                {submitError && <p className="text-muted-foreground">{submitError}</p>}
              </div>
            )}

            <div className="text-center">
              <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
                Your Business Systems Score
              </p>
              <p className="text-6xl md:text-7xl font-bold tracking-tight text-foreground tabular-nums mb-2">
                {result.overall}
                <span className="text-2xl md:text-3xl text-muted-foreground font-semibold">/100</span>
              </p>
              <p className="text-lg font-semibold text-primary mb-3">{result.band.label}</p>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                {result.band.summary}
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl border border-border bg-card shadow-soft space-y-5">
              <h3 className="text-lg font-semibold text-foreground">Scores by area</h3>
              {result.categories.map((c) => (
                <ScoreBar key={c.id} score={c.score} label={c.shortLabel} />
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Top 3 improvement opportunities
              </h3>
              <ol className="space-y-4">
                {result.topOpportunities.map((op, i) => (
                  <li
                    key={op.category}
                    className="p-5 rounded-2xl border border-border bg-card shadow-soft"
                  >
                    <p className="text-xs text-primary uppercase tracking-widest font-medium mb-2">
                      Opportunity {i + 1}
                    </p>
                    <h4 className="text-base font-semibold text-foreground mb-2">{op.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {op.recommendation}
                    </p>
                    <p className="text-sm text-foreground">
                      <span className="text-muted-foreground">Often starts with: </span>
                      {op.packageHint}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Suggested growth roadmap
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Based on your score. A practical order of work, not a one-size pitch.
              </p>
              <div className="space-y-3">
                {result.roadmap.map((phase) => (
                  <div
                    key={phase.phase}
                    className="flex gap-4 p-5 rounded-2xl border border-border bg-card shadow-soft"
                  >
                    <div className="shrink-0 text-xs font-semibold uppercase tracking-widest text-primary pt-0.5">
                      {phase.phase}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{phase.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-2xl border border-primary/25 bg-primary/[0.05] text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Want help implementing this?
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Book a free discovery call. We'll walk through your score and tell you honestly what
                to fix first.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={CONTACT.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 text-sm"
                >
                  {CONTACT.calendlyLabel} <ArrowRight size={16} />
                </a>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground hover:border-primary/40 hover:text-primary text-sm"
                >
                  See packages
                </Link>
              </div>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={restart}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Retake assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
