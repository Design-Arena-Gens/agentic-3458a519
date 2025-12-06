"use client";

import { useMemo, useState } from "react";
import { atlasCategories, PromptCategory, Prompt } from "@/data/atlas";
import { CategoryTabs } from "./CategoryTabs";
import { PromptCard } from "./PromptCard";
import { SectionBadge } from "./SectionBadge";

type PromptExplorerProps = {
  categories?: PromptCategory[];
};

const personaFilters = [
  "All personas",
  "Head of Product",
  "Product Manager",
  "Strategy Lead",
  "Lifecycle PM",
  "Growth Strategist",
  "Retention Analyst",
  "Chief of Staff",
  "AI Program Lead",
  "Documentation Lead"
];

export function PromptExplorer({
  categories = atlasCategories
}: PromptExplorerProps) {
  const [activeSlug, setActiveSlug] = useState(categories[0]?.slug ?? "");
  const [search, setSearch] = useState("");
  const [persona, setPersona] = useState(personaFilters[0]);
  const [tagSelection, setTagSelection] = useState<string | null>(null);

  const activeCategory = useMemo(
    () => categories.find((category) => category.slug === activeSlug),
    [categories, activeSlug]
  );

  const allPrompts = useMemo(() => {
    if (!activeCategory) {
      return [];
    }
    return activeCategory.prompts;
  }, [activeCategory]);

  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    categories.forEach((category) => {
      category.prompts.forEach((prompt) => {
        prompt.tags.forEach((tag) => tagSet.add(tag));
      });
    });
    return ["all", ...Array.from(tagSet)];
  }, [categories]);

  const filteredPrompts = useMemo(() => {
    return allPrompts.filter((prompt) => {
      const matchesSearch =
        prompt.title.toLowerCase().includes(search.toLowerCase()) ||
        prompt.prompt.toLowerCase().includes(search.toLowerCase()) ||
        prompt.objective.toLowerCase().includes(search.toLowerCase());
      const matchesPersona =
        persona === "All personas" || prompt.persona === persona;
      const matchesTag =
        tagSelection === null ||
        tagSelection === "all" ||
        prompt.tags.includes(tagSelection);
      return matchesSearch && matchesPersona && matchesTag;
    });
  }, [allPrompts, search, persona, tagSelection]);

  return (
    <section id="explore" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <SectionBadge icon={<span>🧭</span>}>Prompt Explorer</SectionBadge>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Navigate AI prompt systems tuned for execution
          </h2>
          <p className="max-w-2xl text-base text-slate-300 md:text-lg">
            Filter by persona, tags, and operating context to compose your AI
            command center. Each prompt blueprint is annotated with impact
            telemetry and ready-to-run instructions.
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        <CategoryTabs
          categories={categories}
          activeSlug={activeSlug}
          onSelect={setActiveSlug}
        />

        <div className="glass flex flex-col gap-4 rounded-3xl p-6 md:flex-row">
          <div className="relative flex-1">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for prompts, outcomes, or stack elements..."
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary-400 focus:outline-none"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
              ⌘K
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-3 md:flex-row">
            <select
              value={persona}
              onChange={(event) => setPersona(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-primary-400 focus:outline-none"
            >
              {personaFilters.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={tagSelection ?? "all"}
              onChange={(event) => setTagSelection(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 focus:border-primary-400 focus:outline-none"
            >
              {tags.map((option) => (
                <option key={option} value={option}>
                  {option === "all" ? "All tags" : `#${option}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {activeCategory && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                highlight={prompt.impactScore >= 90}
              />
            ))}
            {filteredPrompts.length === 0 && (
              <EmptyState category={activeCategory} />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function EmptyState({ category }: { category: PromptCategory }) {
  return (
    <div className="col-span-full rounded-3xl border border-dashed border-white/20 bg-white/5 p-10 text-center text-slate-300">
      <p className="text-lg">
        No prompts match your filters in{" "}
        <span className="font-semibold text-white">{category.name}</span>. Reset
        filters or explore another track.
      </p>
    </div>
  );
}
