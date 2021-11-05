import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";
import SkillLevelApiModel from "../../../apiRepository/models/SkillLevelApiModel";
import Rating from "../../widgetsUI/rating/Rating";

interface IProperties {
  skills: Array<SkillLevelApiModel>;
}

const SkillTagsWidget: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.skills.map((skill, index) => (
        <Tag key={index}>
          {skill.skill.name}
          <Rating rating={skill.level} />
        </Tag>
      ))}
    </TagContainer>
  );
};

export default SkillTagsWidget;
