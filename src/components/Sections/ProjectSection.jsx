import { ProjectCard } from "../ProjectCard";
import weatherApp from "../../Assets/project1.jpg";
import { ButtonGhost } from "../Buttons/ButtonGhost";

export const ProjectSection = () => {
  return (
    <div>
      <ProjectCard
        imgSrc={weatherApp}
        altText="Chatbot built in javascript"
        title="Weather App"
        about="The chatbot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries."
      />
      <ButtonGhost
        icon={"/icons/Ic-ArrowDown.svg"}
        text="See more projects"
        link="test"
      />
    </div>
  );
};
