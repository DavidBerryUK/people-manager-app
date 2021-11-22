import PersonApiModel from "../../../apiRepository/entities/PersonApiModel";
import PersonTag from "./PersonTag";
import React from "react";
import TagContainer from "../../widgetsUI/tags/TagContainer";

interface IProperties {
  people: Array<PersonApiModel>;
}

const PeopleTags: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.people.map((person) => (
        <PersonTag key={person.id} person={person} />
      ))}
    </TagContainer>
  );
};

export default PeopleTags;
