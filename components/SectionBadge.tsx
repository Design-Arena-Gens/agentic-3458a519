import { ReactNode } from "react";
import clsx from "classnames";

type SectionBadgeProps = {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
};

export function SectionBadge({ icon, children, className }: SectionBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200",
        className
      )}
    >
      <span className="text-primary-300">{icon}</span>
      {children}
    </span>
  );
}
