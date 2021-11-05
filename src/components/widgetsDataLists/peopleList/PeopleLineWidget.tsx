import React from "react";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";
import SkillTagsWidget from "../skillTags/SkillTagsWidget";
import TeamTagsWidget from "../teamTags/TeamTagsWidget";

interface IProperties {
  person: PersonApiModel;
}

const PeopleLineWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.person.forename}</td>
      <td> {props.person.surname}</td>
      <td> {props.person.email}</td>
      <td>
        <TeamTagsWidget teams={props.person.teams} />
      </td>
      <td>
        <SkillTagsWidget skills={props.person.skills} />
      </td>
    </tr>
  );
};

export default PeopleLineWidget;
