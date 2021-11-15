import React from "react";
import SkillLevelApiModel from "../../../apiRepository/entities/SkillLevelApiModel";
import TagContainer from "../../widgetsUI/tags/TagContainer";
import SkillTag from "./SkillTag";

interface IProperties {
  skills: Array<SkillLevelApiModel>;
}

const SkillTags: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} />
      ))}
    </TagContainer>
  );
};

export default SkillTags;
