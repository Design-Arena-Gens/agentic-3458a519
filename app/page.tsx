import { AtlasHero } from "@/components/AtlasHero";
import { FeaturedPromptsGrid } from "@/components/FeaturedPromptsGrid";
import { PromptExplorer } from "@/components/PromptExplorer";
import { InsightsPanel } from "@/components/InsightsPanel";
import { CallToAction } from "@/components/CallToAction";

export default function HomePage() {
  return (
    <main className="space-y-12 pb-24">
      <AtlasHero />
      <FeaturedPromptsGrid />
      <PromptExplorer />
      <InsightsPanel />
      <CallToAction />
    </main>
  );
}
