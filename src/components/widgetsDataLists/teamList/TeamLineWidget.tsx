import React from "react";
import TeamApiModel from "../../../apiRepository/models/TeamApiModel";

interface IProperties {
  team: TeamApiModel;
}

const TeamLineWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.team.name}</td>
      <td></td>
    </tr>
  );
};

export default TeamLineWidget;
