import skills from "../../data/skillslist.json";

export const SkillSection = () => {
  const skillBlocks = skills.map((skillData) => {
    const skillListItem = skillData.items.map((skillItem) => (
      <li>{skillItem}</li>
    ));

    return (
      <>
        <h3>{skillData.title}</h3>
        <ul>{skillListItem}</ul>
      </>
    );
  });

  return (
    <>
      <h2>Skills</h2>
      {skillBlocks}
    </>
  );
};
