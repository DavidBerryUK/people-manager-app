import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowPerson from "../../../contexts/ListDetailContext.tsx/actions/CommandShowPerson";
import Rating from "../../widgetsUI/rating/Rating";
import React from "react";
import SkillLevelApiModel from "../../../apiRepository/models/SkillLevelApiModel";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";

interface IProperties {
  peopleSkills: Array<SkillLevelApiModel>;
}

const PeopleSkillTags: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSkillSelectedEvent = (skill: SkillLevelApiModel) => {
    dispatch(new CommandShowPerson(skill.person.id));
  };

  return (
    <TagContainer>
      {props.peopleSkills.map((personSkill, index) => (
        <Tag
          key={index}
          onClick={() => {
            handleSkillSelectedEvent(personSkill);
          }}
        >
          {personSkill.person.forename} {personSkill.person.surname}
          <Rating rating={personSkill.level} />
        </Tag>
      ))}
    </TagContainer>
  );
};

export default PeopleSkillTags;
