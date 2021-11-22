import React from "react";
import SkillLevelApiModel from "../../../apiRepository/entities/SkillLevelApiModel";
import SkillTag from "./SkillTag";
import TagContainer from "../../widgetsUI/tags/TagContainer";

interface IProperties {
  skills: Array<SkillLevelApiModel>;
}

const SkillTags: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.skills.map((skill) => (
        <SkillTag key={`${skill.person.id}:${skill.skill.id}`} skill={skill} />
      ))}
    </TagContainer>
  );
};

export default SkillTags;
