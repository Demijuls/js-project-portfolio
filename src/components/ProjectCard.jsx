import styled from "styled-components";
import { H3 } from "./Typography";
import { BodyText } from "./Typography";
import { ButtonFilled } from "./Buttons/ButtonFilled";

const ProjectImg = styled.img`
  width: 479px;
  height: 479px;
  object-fit: cover;
  border-radius: 12px;
`;

export const ProjectCard = (props) => {
  /*  const CardImg = (props) => {
    return <img src={props.imgSrc} alt={props.altText} />;
  }; */

  return (
    <>
      <ProjectImg src={props.imgSrc} alt={props.altText} />
      <div>
        <H3>{props.title}</H3>
        <BodyText>{props.about}</BodyText>
        <div>
          <ButtonFilled icon={"/icons/Ic-Web.svg"} text="Live Demo" link="#" />
          <ButtonFilled
            icon={"/icons/Btn - github.svg"}
            text="View Code"
            link="#"
          />
        </div>
      </div>
    </>
  );
};
