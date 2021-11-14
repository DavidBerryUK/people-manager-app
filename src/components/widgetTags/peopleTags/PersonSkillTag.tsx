import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowPerson from "../../../contexts/ListDetailContext.tsx/actions/CommandShowPerson";
import Rating from "../../widgetsUI/rating/Rating";
import React from "react";
import SkillLevelApiModel from "../../../apiRepository/models/SkillLevelApiModel";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";

interface IProperties {
  personSkill: SkillLevelApiModel;
}

const PersonSkillTag: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSkillSelectedEvent = () => {
    dispatch(new CommandShowPerson(props.personSkill.person.id));
  };

  return (
    <TagContainer>
      <Tag onClick={handleSkillSelectedEvent}>
        {props.personSkill.person.forename} {props.personSkill.person.surname}
        <Rating rating={props.personSkill.level} />
      </Tag>
    </TagContainer>
  );
};

export default PersonSkillTag;
