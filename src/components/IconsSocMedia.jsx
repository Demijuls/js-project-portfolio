import { IconWithLink } from "./IconWithLink";

export const IconsSocMedia = () => {
  return (
    <div>
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
    </div>
  );
};
