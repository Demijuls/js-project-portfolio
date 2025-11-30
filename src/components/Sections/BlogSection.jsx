import styled from "styled-components";
import { H2 } from "../Typography";
import { BlogCard } from "../BlogCard";
import { ButtonGhost } from "../Buttons/ButtonGhost";

import articles from "../../data/articles.json";
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

export const BlogSection = () => {
  const listBlogCards = articles.article.map((data) => (
    <BlogCard
      aria-labelledby="blog-heading"
      key={data.index}
      date={data.date}
      title={data.name}
      imgSrc={data.image}
      altText="preview picture for an article"
      about={data.about}
    />
  ));

  return (
    <SectionWrapper as="section" aria-labelledby="blog-heading">
      <H2>Today I thought...</H2>
      {listBlogCards}
      <ButtonWrapper>
        <ButtonGhost
          icon={"/icons/Ic-ArrowDown.svg"}
          text="See more articles"
          link="test"
        />
      </ButtonWrapper>
    </SectionWrapper>
  );
};
