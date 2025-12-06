import { featuredPrompts } from "@/data/atlas";
import { SectionBadge } from "./SectionBadge";
import { PromptCard } from "./PromptCard";

export function FeaturedPromptsGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="space-y-6">
        <SectionBadge icon={<span>✨</span>}>Featured Blueprints</SectionBadge>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              High-velocity prompt playbooks
            </h2>
            <p className="max-w-2xl text-base text-slate-300 md:text-lg">
              Explore a rotating set of prompts delivering outsized outcomes
              across strategy, growth, and knowledge systems. Adapt, remix, and
              align them with your operating cadence.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} highlight />
          ))}
        </div>
      </div>
    </section>
  );
}
