/* import { ButtonText } from "./ButtonText"; */

/* const Button = `styled.a`; */

export const ButtonFilled = (props) => {
  return (
    <a href={props.link} target="_blank">
      {props.icon && <img src={props.icon} />}
      {props.text}
    </a>
  );
};

{
  /* Button with Web Icon, the link to deployed project and Live Demo text */
}
{
  /*  <button>
        <ButtonText icon={"/icons/Ic-Web.svg"} text="Live Demo" />
      </button> */
}
{
  /* Button with Github icon and link, and View code text */
}
{
  /* <button>
        <ButtonText icon={"/icons/Btn - github.svg"} text="View code" />
      </button> */
}
{
  /* Button with Web Icon, Article link and Read Article text */
}
{
  /* <button>
        <ButtonText icon={"/icons/Ic-Web.svg"} text="Read article" />
      </button> */
}
