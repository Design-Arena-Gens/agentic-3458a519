import clsx from "classnames";
import { Prompt } from "@/data/atlas";
import { ImpactMeter } from "./ImpactMeter";

type PromptCardProps = {
  prompt: Prompt;
  highlight?: boolean;
};

export function PromptCard({ prompt, highlight = false }: PromptCardProps) {
  return (
    <article
      className={clsx(
        "glass relative flex h-full flex-col gap-6 rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/20 hover:shadow-soft",
        highlight && "bg-gradient-to-br from-white/10 to-white/5"
      )}
    >
      <div className="space-y-3">
        <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-200">
          {prompt.persona}
        </span>
        <h3 className="text-xl font-semibold text-white">{prompt.title}</h3>
        <p className="text-sm text-slate-300">{prompt.objective}</p>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Operating Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {prompt.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Prompt Blueprint
        </h4>
        <p className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 text-sm text-slate-200">
          {prompt.prompt}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-primary-500/15 px-3 py-1 text-xs font-medium text-primary-100"
          >
            #{tag}
          </span>
        ))}
      </div>

      <ImpactMeter score={prompt.impactScore} />
    </article>
  );
}
