import styled from "styled-components";
import { H2 } from "../Typography";
import { ProjectCard } from "../ProjectCard";
import { ButtonGhost } from "../Buttons/ButtonGhost";

//import projects from "../../data/projects.json";

import { media } from "../../media";
import { projects } from "../../data/projects";

const SectionWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 128px 0;

  ${media.tablet} {
    padding: 64px 0;
  }

  ${media.mobile} {
    padding: 64px 0;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: min(1200px, 100% - 48px);
  display: flex;
  flex-direction: column;
  gap: 128px;
  padding: 0 24px;

  ${media.tablet} {
    gap: 64px;
    padding: 0 24px;
  }

  ${media.mobile} {
    padding: 0 16px;
    gap: 64px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProjectSection = () => {
  const listProjectCards = projects.map((data, index) => (
    <ProjectCard
      key={data.name}
      title={data.name}
      imgSrc={data.image}
      altText="preview picture for a project"
      tags={data.tags}
      about={data.about}
      reverse={index % 2 === 1}
      netlify={data.netlify}
      github={data.github}
    />
  ));

  return (
    <SectionWrapper>
      <ContentWrapper>
        <H2>Featured Projects</H2>
        {listProjectCards}
        {/* <ButtonWrapper>
        <ButtonGhost
          icon={"/icons/Ic-ArrowDown.svg"}
          text="See more projects"
          link="test"
          ariaLabel={`See more projects`}
        />
      </ButtonWrapper> */}
      </ContentWrapper>
    </SectionWrapper>
  );
};
