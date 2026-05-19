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
        Frontend Developer who thinks in user experience
      </H2>
      <BodyText align="center" padding="16px 0">
        Julia is a junior <b>frontend developer</b> with a background in
        <b> UX/UI design</b> and 3+ years working in product teams at tech
        companies. She brings a rare combination of technical skills and design
        thinking: understanding how users experience interfaces, and can build
        them. She recently completed a 32-week fullstack JavaScript bootcamp at
        Technigo, where she built real products under weekly production
        deadlines — and now looking for her frontend role in Stockholm.
      </BodyText>
    </SectionWrapper>
  );
};
