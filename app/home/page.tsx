import { FeatureSection } from "@/app/home/FeatureSection";
import { IntroSection } from "@/app/home/IntroSection";
import { SkillSection } from "@/app/home/SkillSection";

export default function Page() {
  return (
    <div className="flex flex-col space-y-12">
      <IntroSection className="animate-fadein-1" />
      <div className="flex flex-col space-y-12 xl:flex-row xl:justify-between xl:space-y-0">
        <FeatureSection className="animate-fadein-2" />
        <SkillSection className="animate-fadein-2" />
      </div>
    </div>
  );
}
