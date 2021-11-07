import PeopleTags from "../peopleTags/PeopleTags";
import React from "react";
import RoleApiModel from "../../../apiRepository/models/RoleApiModel";

interface IProperties {
  role: RoleApiModel;
}

const RoleRowWidget: React.FC<IProperties> = (props) => {
  return (
    <tr>
      <td> {props.role.name}</td>
      <td>
        <PeopleTags people={props.role.people} />
      </td>
    </tr>
  );
};

export default RoleRowWidget;
