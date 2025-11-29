import styled from "styled-components";
import { ProjectCard } from "../ProjectCard";
import weatherApp from "../../Assets/project1.jpg";
import { ButtonGhost } from "../Buttons/ButtonGhost";

const CardWrapper = styled.div`
  background-color: #fff;
  display: flex;
  gap: 125px;
`;

export const ProjectSection = () => {
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
};
