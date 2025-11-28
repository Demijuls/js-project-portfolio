import { TechSection } from "../Sections/TechSection";
import { SkillSection } from "../Sections/SkillSection";
import { ProjectSection } from "../Sections/ProjectSection";

export const MainSection = () => {
  return (
    <div>
      <TechSection />
      <ProjectSection />
      <SkillSection />
    </div>
  );
};
