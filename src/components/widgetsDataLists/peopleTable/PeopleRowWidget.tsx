import React from "react";
import PersonApiModel from "../../../apiRepository/models/PersonApiModel";
import RoleTag from "../roleTag/RoleTag";
import SkillTags from "../skillTags/SkillTags";
import TeamTags from "../teamTags/TeamTags";

interface IProperties {
  person: PersonApiModel;
}

const PeopleRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.person.forename}</td>
      <td> {props.person.surname}</td>
      <td>
        <RoleTag role={props.person.role} />
      </td>
      <td> {props.person.email}</td>
      <td>
        <TeamTags teams={props.person.teams} />
      </td>
      <td>
        <SkillTags skills={props.person.skills} />
      </td>
    </tr>
  );
};

export default PeopleRowWidget;
