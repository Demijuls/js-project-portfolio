export const ButtonText = (props) => {
  return (
    <div>
      <img src={props.icon} />
      {props.text}
    </div>
  );
};
