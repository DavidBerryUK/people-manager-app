import React from "react";
import Tag from "../../widgetsUI/tags/Tag";
import TagContainer from "../../widgetsUI/tags/TagContainer";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";

interface IProperties {
  people: Array<PersonApiModel>;
}

const PeopleTagsWidget: React.FC<IProperties> = (props) => {
  return (
    <TagContainer>
      {props.people.map((person, index) => (
        <Tag key={index}>
          {person.forename} {person.surname}
        </Tag>
      ))}
    </TagContainer>
  );
};

export default PeopleTagsWidget;
