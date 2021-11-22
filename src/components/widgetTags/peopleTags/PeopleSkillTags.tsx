import PersonSkillTag from "./PersonSkillTag";
import React from "react";
import SkillLevelApiModel from "../../../apiRepository/entities/SkillLevelApiModel";
import TagContainer from "../../widgetsUI/tags/TagContainer";

interface IProperties {
  peopleSkills: Array<SkillLevelApiModel>;
}

const PeopleSkillTags: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.peopleSkills.map((personSkill) => (
        <PersonSkillTag key={`${personSkill.person.id}:${personSkill.skill.id}`} personSkill={personSkill} />
      ))}
    </TagContainer>
  );
};

export default PeopleSkillTags;
