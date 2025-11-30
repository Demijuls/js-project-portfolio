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
  border: 2px solid #000;
  background: #fff;
  color: #000;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  /* Icon */
  img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
  }

  /* Hover */
  &:hover {
    background: #f2f2f2;
  }

  /* Keyboard focus */
  &:focus-visible {
    outline: 3px solid #000;
    outline-offset: 3px;
  }
`;

export const ButtonGhost = (props) => {
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
