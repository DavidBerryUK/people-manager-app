import PersonApiModel from "../../../apiRepository/models/PersonApiModel";
import PersonTag from "./PersonTag";
import React from "react";
import TagContainer from "../../widgetsUI/tags/TagContainer";

interface IProperties {
  people: Array<PersonApiModel>;
}

const PeopleTags: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.people.map((person, index) => (
        <PersonTag key={index} person={person} />
      ))}
    </TagContainer>
  );
};

export default PeopleTags;
