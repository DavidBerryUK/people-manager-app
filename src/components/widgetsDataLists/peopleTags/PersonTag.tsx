import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowPerson from "../../../contexts/ListDetailContext.tsx/actions/CommandShowPerson";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";
import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";

interface IProperties {
  person: PersonApiModel;
}

const PersonTag: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSkillSelectedEvent = () => {
    dispatch(new CommandShowPerson(props.person.id));
  };

  return (
    <TagContainer>
      <Tag onClick={handleSkillSelectedEvent}>
        {props.person.forename} {props.person.surname}
      </Tag>
    </TagContainer>
  );
};

export default PersonTag;
