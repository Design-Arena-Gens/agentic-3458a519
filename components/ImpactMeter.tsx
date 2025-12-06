import clsx from "classnames";

type ImpactMeterProps = {
  score: number;
};

export function ImpactMeter({ score }: ImpactMeterProps) {
  const capped = Math.min(Math.max(score, 0), 100);
  const tier =
    capped >= 90 ? "High impact" : capped >= 75 ? "Strategic" : "Foundational";

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span>Impact index</span>
        <span>{capped}</span>
      </div>
      <div className="h-2.5 w-full rounded-full border border-white/5 bg-white/10">
        <div
          className={clsx(
            "h-full rounded-full bg-gradient-to-r from-primary-400 via-primary-500 to-purple-500 transition-all",
            {
              "shadow-[0_0_18px_rgba(99,102,241,0.65)]": capped > 85
            }
          )}
          style={{ width: `${capped}%` }}
        />
      </div>
      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
        {tier}
      </p>
    </div>
  );
}
