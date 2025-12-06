import clsx from "classnames";
import { PromptCategory } from "@/data/atlas";

type CategoryTabsProps = {
  categories: PromptCategory[];
  activeSlug: string;
  onSelect: (slug: string) => void;
};

export function CategoryTabs({
  categories,
  activeSlug,
  onSelect
}: CategoryTabsProps) {
  return (
    <div className="scrollbar-thin flex gap-3 overflow-x-auto pb-4">
      {categories.map((category) => {
        const isActive = category.slug === activeSlug;
        return (
          <button
            key={category.slug}
            onClick={() => onSelect(category.slug)}
            className={clsx(
              "relative inline-flex min-w-[220px] flex-col gap-2 rounded-3xl border border-white/10 px-5 py-4 text-left transition",
              "hover:border-white/30 hover:bg-white/10",
              isActive &&
                clsx(
                  "border-primary-400/70 bg-gradient-to-br shadow-soft",
                  category.gradient
                )
            )}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              {category.name}
            </span>
            <p className="text-sm text-slate-300">{category.description}</p>
          </button>
        );
      })}
    </div>
  );
}
