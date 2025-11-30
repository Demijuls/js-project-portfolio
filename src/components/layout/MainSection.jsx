import { TechSection } from "../Sections/TechSection";
import { SkillSection } from "../Sections/SkillSection";
import { ProjectSection } from "../Sections/ProjectSection";
import { BlogSection } from "../Sections/BlogSection";

export const MainSection = () => {
  return (
    <div>
      <TechSection />
      <ProjectSection />
      <SkillSection />
      <BlogSection />
    </div>
  );
};
