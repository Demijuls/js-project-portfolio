import styled from "styled-components";
import skills from "../../data/skillslist.json";
import { H2, H3 } from "../Typography";
import { ListItems } from "../Typography";
import { media } from "../../media";

const SkillBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.mobile} {
    align-items: center;
  }
`;

const SkillWrapper = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* grid-template-columns: repeat(4, 1fr); */
  padding: 128px 329px;

  ${media.tablet} {
    padding: 64px auto;
  }

  ${media.mobile} {
    padding: 24px 20px;
    gap: 12px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ListUnord = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;

  ${media.mobile} {
    align-items: center;
    width: max-content;
  }
`;

const StyledH3 = styled(H3)`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  border-radius: 4px;
  border: 1px solid #fff;
  background: #000;

  ${media.mobile} {
    width: 240px;
  }
`;

/* const UnList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  padding: 0;
  margin: 0;
  list-style: none;
`; */

export const SkillSection = () => {
  const skillBlocks = skills.map((skillData) => {
    const skillListItem = skillData.items.map((skillItem) => (
      <ListItems color="#fff">{skillItem}</ListItems>
    ));

    return (
      <SkillBlock>
        <StyledH3 size="16px" color="#fff" padding="2px 6 px">
          {skillData.title}
        </StyledH3>
        <ListUnord>{skillListItem}</ListUnord>
      </SkillBlock>
    );
  });

  return (
    <SkillWrapper>
      <H2 color="#fff">Skills</H2>
      <GridWrapper>{skillBlocks}</GridWrapper>
    </SkillWrapper>
  );
};
