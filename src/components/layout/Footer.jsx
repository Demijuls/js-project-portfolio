import styled from "styled-components";
import FooterAvatar from "../../components/FooterAvatar";
import { IconsSocMedia } from "../IconsSocMedia";
import { BodyText, H2 } from "../Typography";
import { media } from "../../media";

const FooterWrapper = styled.div`
  background-color: #000;
  display: flex;
  padding: 128px 0;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;

  ${media.mobile} {
    padding: 24px 20px;
  }
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <H2 color="#fff">Let's talk</H2>
      <FooterAvatar />
      <ContactsWrapper>
        <BodyText align="center" color="#fff">
          Julia Demianetc
        </BodyText>
        <BodyText align="center" color="#fff">
          +46 00 00 00 00 00
        </BodyText>
        <BodyText align="center" color="#fff">
          julia.demianetc@gmail.com
        </BodyText>
      </ContactsWrapper>
      <IconsSocMedia />
    </FooterWrapper>
  );
};
