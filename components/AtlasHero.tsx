import Link from "next/link";
import { SectionBadge } from "./SectionBadge";

export function AtlasHero() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-20 md:flex-row md:items-center">
      <div className="relative z-10 flex-1 space-y-8">
        <SectionBadge icon={<span>🗺️</span>}>Atlas Intelligence</SectionBadge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Architect high-leverage prompt systems with the{" "}
          <span className="text-gradient">ChatPT Atlas</span>
        </h1>
        <p className="max-w-xl text-lg text-slate-300 md:text-xl">
          Curate, experiment, and orchestrate prompt strategies that compound.
          The atlas pairs crafted AI blueprints with operational context so
          teams can activate AI copilots responsibly and at velocity.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="#explore"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-soft"
          >
            Explore the atlas
          </Link>
          <Link
            href="#insights"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-white/30"
          >
            View operating signals
          </Link>
        </div>

        <dl className="grid grid-cols-2 gap-6 text-sm text-slate-300 sm:grid-cols-3">
          <div className="space-y-1 rounded-3xl border border-white/10 bg-white/5 p-4">
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Playbooks
            </dt>
            <dd className="text-2xl font-semibold text-white">47 curated</dd>
          </div>
          <div className="space-y-1 rounded-3xl border border-white/10 bg-white/5 p-4">
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Teams supported
            </dt>
            <dd className="text-2xl font-semibold text-white">12 functions</dd>
          </div>
          <div className="space-y-1 rounded-3xl border border-white/10 bg-white/5 p-4">
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Time-to-impact
            </dt>
            <dd className="text-2xl font-semibold text-white">72h avg.</dd>
          </div>
        </dl>
      </div>

      <div className="relative flex-1">
        <div className="glass relative mx-auto w-full max-w-md rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/15 to-white/5 p-6 shadow-[0_40px_140px_rgba(79,70,229,0.25)]">
          <div className="absolute -left-8 top-8 hidden h-16 w-16 animate-pulse rounded-2xl border border-primary-500/40 bg-primary-500/10 md:block" />
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
            Atlas Signals
          </h3>
          <div className="mt-6 space-y-5">
            {[
              {
                name: "Persona resonance",
                value: "94%",
                caption: "Prompts scoring &gt; 90 on persona fit index"
              },
              {
                name: "Launch velocity",
                value: "3.2x",
                caption: "Acceleration on roadmap alignment rituals"
              },
              {
                name: "Governance coverage",
                value: "87%",
                caption: "Copilot guardrails mapped to org controls"
              }
            ].map((signal) => (
              <div
                key={signal.name}
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {signal.name}
                </p>
                <p className="mt-2 text-3xl font-semibold text-white">
                  {signal.value}
                </p>
                <p className="text-xs text-slate-400">{signal.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
