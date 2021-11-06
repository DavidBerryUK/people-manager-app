import PeopleTagsWidget from "../peopleTags/PeopleTagsWidget";
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
        <PeopleTagsWidget people={props.role.people} />
      </td>
    </tr>
  );
};

export default RoleRowWidget;