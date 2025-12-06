import { atlasCategories } from "@/data/atlas";
import { SectionBadge } from "./SectionBadge";

const insightTopics = [
  {
    title: "Ritual Acceleration",
    description:
      "Codify AI rituals that complement existing ceremonies instead of replacing them outright.",
    takeaways: [
      "Pair prompts with checkpoints to maintain accountability.",
      "Instrument every ritual with pre/post metrics to verify lift.",
      "Share prompt retros to encourage refinement across teams."
    ]
  },
  {
    title: "Responsible Deployment",
    description:
      "Treat governance prompts as living assets with explicit owners, escalation paths, and review cadences.",
    takeaways: [
      "Map compliance guardrails to every deployed co-pilot.",
      "Automate drift detection by logging prompt usage context.",
      "Schedule quarterly sanity sweeps with strike teams."
    ]
  },
  {
    title: "Cross-Functional Fluency",
    description:
      "Build shared language across product, growth, and knowledge teams to eliminate siloed prompt playbooks.",
    takeaways: [
      "Publish narrative PRDs for prompts to broadcast intent.",
      "Bundle prompts with assets: dashboards, templates, checklists.",
      "Integrate feedback loops from go-to-market and ops partners."
    ]
  }
];

export function InsightsPanel() {
  const coverage = atlasCategories.map((category) => ({
    name: category.name,
    insight: category.insight
  }));

  return (
    <section
      id="insights"
      className="mx-auto max-w-6xl px-6 pb-24 pt-6 md:pt-0"
    >
      <div className="glass relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900 to-slate-950 p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_50%)]" />
        <div className="relative space-y-8">
          <SectionBadge icon={<span>📡</span>}>Operating Signals</SectionBadge>
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Operational intelligence from the ChatPT Atlas network
              </h2>
              <p className="max-w-xl text-base text-slate-300">
                Atlas members contribute anonymous telemetry on prompt usage,
                lifecycle adoption, and AI governance health. Fold these signals
                into your enablement roadmap.
              </p>

              <dl className="grid gap-4 md:grid-cols-2">
                {coverage.map((category) => (
                  <div
                    key={category.name}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5"
                  >
                    <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {category.name}
                    </dt>
                    <dd className="mt-2 text-sm text-slate-200">
                      {category.insight}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex-1 space-y-6">
              {insightTopics.map((topic) => (
                <div
                  key={topic.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    {topic.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200">
                    {topic.takeaways.map((takeaway) => (
                      <li key={takeaway} className="flex gap-2">
                        <span className="text-primary-300">⟡</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
