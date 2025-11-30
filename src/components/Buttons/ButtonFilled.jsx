import styled from "styled-components";

const ButtonStyled = styled.a`
  display: flex;
  width: 303px;
  height: 48px;
  padding: 0 16px;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  border-radius: 12px;
  background: #000;
  color: #fff;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  /* Icons */
  img {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
  }

  /* Hover */
  &:hover {
    background: #222;
  }

  /* Keyboard focus */
  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 3px;
  }
`;

export const ButtonFilled = (props) => {
  return (
    <ButtonStyled
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
      aria-label={props.ariaLabel || props.text}
    >
      {props.icon && <img src={props.icon} alt="" aria-hidden="true" />}
      {props.text}
    </ButtonStyled>
  );
};
