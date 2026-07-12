import {
  ASSESSMENT_CATEGORIES,
  ASSESSMENT_QUESTIONS,
  CATEGORY_OPPORTUNITIES,
  ROADMAP_PHASES,
  scoreBand,
  type AssessmentCategoryId,
  type Opportunity,
  type RoadmapPhase,
} from "../data/assessment";

export type CategoryScore = {
  id: AssessmentCategoryId;
  label: string;
  shortLabel: string;
  score: number;
};

export type AssessmentResult = {
  overall: number;
  band: ReturnType<typeof scoreBand>;
  categories: CategoryScore[];
  topOpportunities: Opportunity[];
  roadmap: RoadmapPhase[];
};

export type AnswerMap = Record<string, number>;

export function scoreAssessment(answers: AnswerMap): AssessmentResult {
  const byCategory = new Map<AssessmentCategoryId, number[]>();

  for (const q of ASSESSMENT_QUESTIONS) {
    const value = answers[q.id];
    if (typeof value !== "number") continue;
    const list = byCategory.get(q.category) ?? [];
    list.push(value);
    byCategory.set(q.category, list);
  }

  const categories: CategoryScore[] = ASSESSMENT_CATEGORIES.map((cat) => {
    const scores = byCategory.get(cat.id) ?? [];
    const avg =
      scores.length === 0
        ? 0
        : Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    return {
      id: cat.id,
      label: cat.label,
      shortLabel: cat.shortLabel,
      score: avg,
    };
  });

  const answered = categories.filter((c) => (byCategory.get(c.id)?.length ?? 0) > 0);
  const overall =
    answered.length === 0
      ? 0
      : Math.round(answered.reduce((sum, c) => sum + c.score, 0) / answered.length);

  const band = scoreBand(overall);

  const topOpportunities = [...categories]
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map((c) => CATEGORY_OPPORTUNITIES[c.id]);

  const roadmap: RoadmapPhase[] =
    overall < 40
      ? ROADMAP_PHASES
      : overall < 70
        ? ROADMAP_PHASES.slice(1)
        : ROADMAP_PHASES.slice(2);

  return {
    overall,
    band,
    categories,
    topOpportunities,
    roadmap,
  };
}
