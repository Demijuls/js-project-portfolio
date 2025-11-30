import styled from "styled-components";
import { H2 } from "../Typography";
import { ProjectCard } from "../ProjectCard";
import { ButtonGhost } from "../Buttons/ButtonGhost";

import projects from "../../data/projects.json";
import { media } from "../../media";

const SectionWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 128px;
  align-content: center;
  margin: 128px;

  ${media.tablet} {
    margin: 64px 24px;
    gap: 64px;
  }

  ${media.mobile} {
    margin: 64px 16px;
    gap: 64px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProjectSection = () => {
  const listProjectCards = projects.projects.map((data, index) => (
    <ProjectCard
      key={data.name}
      title={data.name}
      imgSrc={data.image}
      altText="preview picture for a project"
      tags={data.tags}
      about={data.about}
      reverse={index % 2 === 1}
    />
  ));

  return (
    <SectionWrapper>
      <H2>Featured Projects</H2>
      {listProjectCards}
      <ButtonWrapper>
        <ButtonGhost
          icon={"/icons/Ic-ArrowDown.svg"}
          text="See more projects"
          link="test"
          ariaLabel={`See more projects`}
        />
      </ButtonWrapper>
    </SectionWrapper>
  );
};
