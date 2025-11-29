import styled from "styled-components";
import { IconWithLink } from "./IconWithLink";

const SocialWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

export const IconsSocMedia = () => {
  return (
    <SocialWrapper>
      <IconWithLink
        image={"/icons/Btn - github.svg"}
        link="https://github.com/Demijuls?tab=repositories"
      />
      <IconWithLink
        image={"/icons/Btn - linkedin.svg"}
        link="https://www.linkedin.com/"
      />
      <IconWithLink
        image={"/icons/Btn - instagram.svg"}
        link="https://www.instagram.com/"
      />
    </SocialWrapper>
  );
};
