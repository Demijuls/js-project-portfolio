import styled from "styled-components";
import { H3, BodyText } from "./Typography";
import { ButtonFilled } from "./Buttons/ButtonFilled";
import { media } from "../media";
import { ArticleDate } from "../components/ArticleDate";

const ArticleImg = styled.img`
  width: 479px;
  align-self: stretch;
  object-fit: cover;
  border-radius: 12px;

  ${media.tablet} {
    width: 200px;
  }

  ${media.mobile} {
    width: 100%;
    height: 200px;
    align-self: stretch;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 125px;
  align-self: stretch;

  ${media.tablet} {
    gap: 32px;
  }

  ${media.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 580px;
  align-self: stretch;

  ${media.tablet} {
    gap: 32px;
    flex: 1 0 0;
    width: auto;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  ${media.mobile} {
    width: auto;
    flex-wrap: wrap;
    align-items: center;
    gap: 32px;
    align-self: stretch;
  }
`;

export const BlogCard = (props) => {
  return (
    <CardContent role="article" aria-labelledby={`blog-title-${props.id}`}>
      <ArticleImg src={props.imgSrc} alt="" role="presentation" />
      <CardInfo>
        <ArticleDate date={props.date} />
        <H3>{props.title}</H3>
        <BodyText>{props.about}</BodyText>
        <ButtonFilled
          text="Read article"
          link={props.link}
          aria-label={`Read full article: ${props.title}`}
        />
      </CardInfo>
    </CardContent>
  );
};
