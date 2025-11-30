import styled from "styled-components";
import { H3 } from "./Typography";
import { BodyText } from "./Typography";
import { ButtonFilled } from "./Buttons/ButtonFilled";
import { media } from "../media";
import { ProjectTag } from "./ProjectTag";

const ProjectImg = styled.img`
  width: 479px;
  height: 479px;
  object-fit: cover;
  border-radius: 12px;

  ${media.tablet} {
    width: 100%;
    align-self: stretch;
  }

  ${media.mobile} {
    height: 479px;
    align-self: stretch;
  }
`;

const CardContent = styled.div`
  display: flex;
  gap: 125px;
  align-content: space-between;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  ${media.tablet} {
    flex-direction: column;
    gap: 64px;
  }

  ${media.mobile} {
    gap: 20px;
  }
`;

const CardInfo = styled.div`
  display: flex;
  width: 580px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 32px;

  ${media.tablet} {
    width: auto;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  }

  ${media.mobile} {
    width: auto;
    flex-wrap: wrap;
    gap: 32px;
    align-self: stretch;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const ProjectCard = (props) => {
  const allTags = props.tags.map((name) => (
    <ProjectTag key={name} tag={name} />
  ));
  return (
    <CardContent reverse={props.reverse}>
      <ProjectImg src={props.imgSrc} alt={props.altText} />
      <CardInfo>
        <TagsWrapper>{allTags}</TagsWrapper>
        <H3>{props.title}</H3>
        <BodyText>{props.about}</BodyText>
        <ButtonsWrapper>
          <ButtonFilled
            icon={"/icons/Ic-Web.svg"}
            text="Live Demo"
            link={props.netlify}
          />
          <ButtonFilled
            icon={"/icons/Btn - github.svg"}
            text="View Code"
            link={props.github}
          />
        </ButtonsWrapper>
      </CardInfo>
    </CardContent>
  );
};
