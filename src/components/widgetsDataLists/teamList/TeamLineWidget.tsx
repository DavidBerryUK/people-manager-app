import React from "react";
import TeamApiModel from "../../../apiRepository/models/TeamApiModel";
import PeopleTagsWidget from "../peopleTags/PeopleTagsWidget";

interface IProperties {
  team: TeamApiModel;
}

const TeamLineWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.team.name}</td>
      <td>
        <PeopleTagsWidget people={props.team.people} />
      </td>
    </tr>
  );
};

export default TeamLineWidget;
