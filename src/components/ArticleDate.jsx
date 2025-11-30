import styled from "styled-components";
import { media } from "../media";
import { BodyText } from "./Typography";

const StyledText = styled(BodyText)`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  border-radius: 4px;
  border: 1px solid #000;

  ${media.mobile} {
    flex-wrap: wrap;
  }
`;

export const ArticleDate = ({ date }) => {
  return (
    <StyledText size="16px" padding="2px 6px">
      {date}
    </StyledText>
  );
};
