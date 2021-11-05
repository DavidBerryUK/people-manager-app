import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";
import SkillLevelApiModel from "../../../apiRepository/models/SkillLevelApiModel";
import Rating from "../../widgetsUI/rating/Rating";

interface IProperties {
  peopleSkills: Array<SkillLevelApiModel>;
}

const PeopleSkillTagsWidget: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.peopleSkills.map((personSkill, index) => (
        <Tag key={index}>
          {personSkill.person.forename} {personSkill.person.surname}
          <Rating />
        </Tag>
      ))}
    </TagContainer>
  );
};

export default PeopleSkillTagsWidget;