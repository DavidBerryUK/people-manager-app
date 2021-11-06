import { UseListDetailContext } from "../../../contexts/ListDetailContext.tsx/ListDetailContext";
import CommandShowPerson from "../../../contexts/ListDetailContext.tsx/actions/CommandShowPerson";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";
import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";

interface IProperties {
  people: Array<PersonApiModel>;
}

const PeopleTagsWidget: React.FC<IProperties> = (props) => {
  const { dispatch } = UseListDetailContext();

  // event handlers
  const handleSkillSelectedEvent = (person: PersonApiModel) => {
    dispatch(new CommandShowPerson(person.id));
  };

  return (
    <TagContainer>
      {props.people.map((person, index) => (
        <Tag
          key={index}
          onClick={() => {
            handleSkillSelectedEvent(person);
          }}
        >
          {person.forename} {person.surname}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default PeopleTagsWidget;
