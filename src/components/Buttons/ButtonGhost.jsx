/* import { ButtonText } from "./ButtonText"; */

/* const Button = `Styled.a`; */

export const ButtonGhost = (props) => {
  return (
    <a href={props.link} target="_blank">
      {props.icon && <img src={props.icon} />}
      {props.text}
    </a>
  );
};
{
  /* See More Projects button */
}
{
  /* <button>
        <ButtonText icon={"/icons/Ic-ArrowDown.svg"} text="See more projects" />
      </button> */
}

{
  /* See More Articles buttons */
}
{
  /*   <button>
        <ButtonText icon={"/icons/Ic-ArrowDown.svg"} text="See more articels" />
      </button> */
}
