import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowSkill from "../../../contexts/ListDetailContext.tsx/actions/CommandShowSkill";
import Rating from "../../widgetsUI/rating/Rating";
import React from "react";
import SkillLevelApiModel from "../../../apiRepository/models/SkillLevelApiModel";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";

interface IProperties {
  skills: Array<SkillLevelApiModel>;
}

const SkillTags: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSkillSelectedEvent = (skill: SkillLevelApiModel) => {
    dispatch(new CommandShowSkill(skill.skill.id));
  };

  return (
    <TagContainer>
      {props.skills.map((skill, index) => (
        <Tag
          key={index}
          onClick={() => {
            handleSkillSelectedEvent(skill);
          }}
        >
          {skill.skill.name}
          <Rating rating={skill.level} />
        </Tag>
      ))}
    </TagContainer>
  );
};

export default SkillTags;
