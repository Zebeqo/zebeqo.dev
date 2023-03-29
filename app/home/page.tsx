import { FeatureSection } from "@/app/home/FeatureSection";
import { IntroSection } from "@/app/home/IntroSection";
import { SkillSection } from "@/app/home/SkillSection";

export default function Page() {
  return (
    <div className="flex flex-col space-y-12">
      <IntroSection />
      <FeatureSection />
      <SkillSection />
    </div>
  );
}
