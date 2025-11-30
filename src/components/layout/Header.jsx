import styled from "styled-components";
import { media } from "../../media";
import { H1 } from "../Typography";
import { H2 } from "../Typography";
import { BodyText } from "../Typography";

import HeroCarousel from "../HeroCarousel";

const SectionWrapper = styled.section`
  padding: 120px 120px 20px 120px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;

  ${media.mobile} {
    p {
      font-size: 18px !important;
    }
  }

  ${media.tablet} {
    p {
      font-size: 18px !important;
    }
  }
`;

export const Header = () => {
  return (
    <SectionWrapper className="heroSection">
      <BodyText align="center" padding="16px 0">
        Hi there, I'm{" "}
      </BodyText>
      <H1 align="center" padding="16px 0">
        Julia
      </H1>
      <HeroCarousel />
      <H2 weight="500" size="30px" align="center" padding="16px 0">
        Dedicated Web&Frontend Developer with a background in UX/UI Design
      </H2>
      <BodyText align="center" padding="16px 0">
        Julia is a <b>Web and Front-Developer</b> with strong emphasis on user
        experience that she took from her years of being UX/UI Designer. With a
        foundation in design and a growing passion for code, she is exploring
        how JavaScript, React, Node.js, APIs, and Web Accessibility can create
        digital experiences that feel both intuitive and deeply human. Now
        looking for an <b>LIA/internship</b> to grow as a developer and
        contribute to a team with her with curiosity and problem-solving skills.
      </BodyText>
    </SectionWrapper>
  );
};
