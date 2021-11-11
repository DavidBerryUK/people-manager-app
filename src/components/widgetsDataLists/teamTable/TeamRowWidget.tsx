import { EnumIconSize } from "../../../constants/enums/EnumIconSize";
import ImageTeam from "../../widgetsUI/imageTeam/ImageRole";
import PeopleTags from "../peopleTags/PeopleTags";
import React from "react";
import TeamApiModel from "../../../apiRepository/models/TeamApiModel";

interface IProperties {
  team: TeamApiModel;
}

const TeamRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td>
        {" "}
        <ImageTeam fileName={props.team.iconName} size={EnumIconSize.small} />
      </td>
      <td> {props.team.name}</td>
      <td>
        <PeopleTags people={props.team.people} />
      </td>
    </tr>
  );
};

export default TeamRowWidget;
