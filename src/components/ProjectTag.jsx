import styled from "styled-components";
//import { media } from "../media";
import { BodyText } from "./Typography";

const StyledTag = styled(BodyText).attrs({ as: "span" })`
  display: inline-flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 16px;
  padding: 4px 10px;
  background: transparent;
  white-space: nowrap;
`;

export const ProjectTag = ({ tag }) => {
  return (
    <StyledTag $size="16px" $padding="2px 6px">
      {tag}
    </StyledTag>
  );
};
