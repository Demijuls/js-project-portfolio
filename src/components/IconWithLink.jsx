export const IconWithLink = (props) => {
  return (
    <div>
      <a href={props.link}>
        <img src={props.image} />
      </a>
    </div>
  );
};
