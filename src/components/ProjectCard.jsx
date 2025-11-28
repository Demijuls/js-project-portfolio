import { ButtonFilled } from "./Buttons/ButtonFilled";

export const ProjectCard = (props) => {
  /*  const CardImg = (props) => {
    return <img src={props.imgSrc} alt={props.altText} />;
  }; */

  return (
    <>
      <img src={props.imgSrc} alt={props.altText} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.about}</p>
        <div>
          <ButtonFilled icon={"/icons/Ic-Web.svg"} text="Live Demo" link="#" />
          <ButtonFilled
            icon={"/icons/Btn - github.svg"}
            text="View Code"
            link="#"
          />
        </div>
      </div>
    </>
  );
};
