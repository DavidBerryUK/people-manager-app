import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowSkill from "../../../contexts/ListDetailContext.tsx/actions/CommandShowSkill";
import Rating from "../../widgetsUI/rating/Rating";
import React from "react";
import SkillLevelApiModel from "../../../apiRepository/entities/SkillLevelApiModel";
import Tag from "../../widgetsUI/tags/Tag";

interface IProperties {
  skill: SkillLevelApiModel;
}

const SkillTag: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSkillSelectedEvent = () => {
    dispatch(new CommandShowSkill(props.skill.skill.id));
  };

  return (
    <Tag onClick={handleSkillSelectedEvent}>
      {props.skill.skill.name}
      <Rating rating={props.skill.level} />
    </Tag>
  );
};

export default SkillTag;
