import styled from "styled-components";
import { BodyText, H2 } from "../Typography";
import { media } from "../../media";

const TechWrapper = styled.div`
  background-color: #000;
  width: 100%;
  padding: 128px 329px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    padding: 64px auto;
  }

  ${media.mobile} {
    padding: 24px auto;
    gap: 12px;
  }

  ${media.tablet} {
    padding: 64px 24px;
    align-self: stretch;
  }

  ${media.mobile} {
    padding: 64px 16px;
    align-self: stretch;
  }
`;

export const TechSection = () => {
  return (
    <TechWrapper>
      <H2 color="#fff">Tech</H2>
      <BodyText align="center" color="#fff">
        HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js,
        Mongo DB, Express.js, Web Accessibility, APIs, mob-programming,
        pair-programming, GitHub
      </BodyText>
    </TechWrapper>
  );
};
