import React from "react";
import TeamApiModel from "../../../apiRepository/models/TeamApiModel";
import PeopleTags from "../peopleTags/PeopleTags";

interface IProperties {
  team: TeamApiModel;
}

const TeamRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.team.name}</td>
      <td>
        <PeopleTags people={props.team.people} />
      </td>
    </tr>
  );
};

export default TeamRowWidget;
