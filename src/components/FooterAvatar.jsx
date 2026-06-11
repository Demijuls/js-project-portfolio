import styled from "styled-components";
import avatarFooter from "../assets/footer_av.png";

const AvatarStyled = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 100px;
`;

const FooterAvatar = () => {
  return (
    <AvatarStyled
      src={avatarFooter}
      alt="round portrait with orange background"
    />
  );
};

export default FooterAvatar;
